import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Tablebar, ObjectTable } from 'components';
import { calcValue, getPrimaryKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick, sortArray } from 'components/utils';
import { SortIcon } from 'assets/icons/SortIcon';
import { hasFields, matches, widthsFromColumns } from './utils';

import './DataTable.css';

//-----------------------------------------------------------------
export const DataTable = ({
  data,
  columns,
  title = 'Data Table (dt-)',
  search = false,
  searchFields = [],
  pagination = false,
  arrowsOnly = false,
  noHeader = false,
  expandable = true,
  showHidden = false,
}) => {
  const [pagingCtx, setPaging] = useState(
    stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0, arrowsOnly: arrowsOnly })
  );
  const [expandedRow, setExpandedRow] = useState('');
  const [filterText, setFilterText] = useState('');

  const [sortCtx1, setSortCtx1] = useState({ sortBy: '', sortDir: 'asc' });
  const [sortCtx2, setSortCtx2] = useState({ sortBy: '', sortDir: '' });

  const clickHandler = (action) => {
    const { perPage, curPage } = pagingCtx;
    switch (action.type) {
      case 'update_filter':
        setFilterText(action.payload);
        break;
      case 'clear_filter':
        setFilterText('');
        break;
      case 'first':
        setPaging({ ...pagingCtx, curPage: 0, total: filteredData.length });
        break;
      case 'next':
        setPaging({ ...pagingCtx, curPage: curPage + 1, total: filteredData.length });
        break;
      case 'previous':
        setPaging({ ...pagingCtx, curPage: curPage - 1, total: filteredData.length });
        break;
      case 'last':
        setPaging({
          ...pagingCtx,
          curPage: Math.floor(filteredData.length / perPage) - !(filteredData.length % perPage),
          total: filteredData.length,
        });
        break;
      case 'perPage':
        const newCtx = { perPage: action.payload, curPage: 0, total: filteredData.length, arrowsOnly: arrowsOnly };
        setPaging(newCtx);
        localStorage.setItem('paging', JSON.stringify(newCtx));
        break;
      case 'expand_row':
        if (expandable) setExpandedRow(expandedRow === action.payload ? '' : action.payload);
        break;
      case 'sortBy':
        if (sortCtx1.sortBy === action.payload) {
          if (sortCtx1.sortDir === 'asc') {
            setSortCtx1({ ...sortCtx1, sortDir: 'desc' });
          } else if (sortCtx1.sortDir === 'desc') {
            setSortCtx1(sortCtx2);
            setSortCtx2({ sortBy: '', sortDir: 'asc' });
          } else {
            setSortCtx1({ ...sortCtx1, sortDir: 'asc' });
          }
        } else {
          setSortCtx2(sortCtx1);
          setSortCtx1({ sortBy: action.payload, sortDir: 'asc' });
        }
        break;
      default:
        break;
    }
  };

  let filteredData =
    sortCtx1.sortDir !== ''
      ? sortArray(data, [sortCtx1.sortBy, sortCtx2.sortBy], [sortCtx1.sortDir === 'asc', sortCtx2.sortDir === 'asc'])
      : data;

  if (filterText !== '' && hasFields(columns, searchFields)) {
    filteredData = data.filter((record) => {
      return matches(record, searchFields, filterText.toLowerCase());
    });
  }

  const hasData = filteredData ? filteredData.length > 0 : false;
  const firstInPage = Number(pagingCtx.perPage) * Number(pagingCtx.curPage);
  const lastInPage = Math.min(Number(firstInPage) + Number(pagingCtx.perPage), hasData ? filteredData.length : 0);

  useEffect(() => {
    setPaging({ perPage: pagingCtx.perPage, curPage: 0, total: hasData ? filteredData.length : 0 });
    setExpandedRow('');
  }, [data, filterText]);
  //  }, [data, filterText, hasData, filteredData.length, pagingCtx.perPage]);

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const showTools = title !== '' || search || pagination;
  const showHeader = !noHeader;
  return (
    <Fragment key="dt">
      {showTools && (
        <Tablebar
          title={title}
          handler={clickHandler}
          search={search}
          filterText={filterText}
          searchFields={searchFields}
          pagination={pagination}
          pagingCtx={{ ...pagingCtx, arrowsOnly: arrowsOnly }}
        />
      )}
      {showHeader && (
        <DataTableHeader
          columns={columns}
          showHidden={showHidden}
          sortCtx1={sortCtx1}
          sortCtx2={sortCtx2}
          sortHandler={clickHandler}
          widths={widthsFromColumns(columns, showHidden)}
        />
      )}
      <div className="at-body dt-body">
        {hasData ? (
          filteredData.map((record, index) => {
            const key = calcValue(record, idCol) + '_' + index;
            if (index < firstInPage || index >= lastInPage) return <Fragment key={key}></Fragment>;
            return (
              <Fragment>
                <DataTableRow
                  key={key}
                  id={key}
                  widths={widthsFromColumns(columns, showHidden)}
                  columns={columns}
                  record={record}
                  expandable={expandable}
                  handler={clickHandler}
                  showHidden={showHidden}
                />
                {key === expandedRow && (
                  <DataTableExpandedRow record={record} columns={columns} handler={clickHandler} />
                )}
              </Fragment>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {search && <Tablebar search={search} searchFields={searchFields} asHeader={false} />}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.widths};
`;

//-----------------------------------------------------------------
const DataTableExpandedRow = ({ record, columns, handler }) => {
  const expandedStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 8fr 5fr',
    borderBottom: '1px solid grey',
    padding: '2px',
  };

  return (
    <div style={expandedStyle}>
      <div></div>
      <ObjectTable
        data={record}
        columns={columns}
        showHidden={true}
        buttonList={['save', 'add monitor', 'view']}
        handler={handler}
      />
      <div></div>
      <div></div>
    </div>
  );
};

//-----------------------------------------------------------------
const DataTableHeader = ({
  columns,
  showHidden = false,
  sortCtx1 = { sortBy: '', sortDir: '' },
  sortCtx2 = { sortBy: '', sortDir: '' },
  sortHandler,
  widths,
}) => {
  const sortIcon1 = <SortIcon dir={sortCtx1.sortDir} n={1} />;
  const sortIcon2 = <SortIcon dir={sortCtx2.sortDir} n={2} />;

  return (
    <StyledDiv key="dt-header" widths={widths} columns={columns} className="base-header at-header dt-header">
      {columns.map((column, index) => {
        const key = 'dt-' + column.name + '-' + index;
        if (column.hidden && !showHidden) return <Fragment key={key}></Fragment>;
        return (
          <div
            onClick={(e) => handleClick(e, sortHandler, { type: 'sortBy', payload: column.selector })}
            style={{ display: 'flex', justifyItems: 'center' }}
          >
            <div style={{ textTransform: 'capitalize', paddingRight: '4px' }} key={key}>
              {column.name.substr(0, 8)}
            </div>
            {column.selector === sortCtx1.sortBy ? sortIcon1 : <></>}
            {column.selector === sortCtx2.sortBy ? sortIcon2 : <></>}
          </div>
        );
      })}
    </StyledDiv>
  );
};

//-----------------------------------------------------------------
const DataTableRow = ({ columns, id, record, widths, expandable, handler, showHidden }) => {
  const rKey = 'dt-row-' + id;
  return (
    <StyledDiv
      onClick={(e) => handleClick(e, handler, { type: 'expand_row', payload: id })}
      key={rKey}
      className={'at-row' + (expandable ? ' expandable' : '')}
      widths={widths}
    >
      {columns.map((column, index) => {
        const key = id + column.name + '-' + index;
        if (column.hidden && !showHidden) return <Fragment key={key}></Fragment>;

        let type = column.type ? column.type : 'string';
        let value = calcValue(record, column);
        value = formatFieldByType(type, value, column.decimals || 0);
        if (!value || value === undefined) value = type === 'spacer' ? '' : '-';

        let cn = 'at-cell ' + (column.cn ? column.cn : '') + ' ';
        switch (type) {
          case 'calc':
          case 'uint64':
          case 'timestamp':
          case 'filesize':
          case 'blknum':
            cn += 'right ';
            break;
          case 'bool':
          case 'hash':
          case 'string':
          default:
            break;
        }
        if (column.isPill) {
          cn += ' at-pill center ';
          cn += type === 'bool' ? (record[column.selector] ? 'true' : 'false') : record[column.selector];
        }
        const style = column.align ? { justifySelf: column.align } : {};
        return (
          <div key={key} style={style} className={cn}>
            {column.isPill && !handler && (
              <div className="warning">pill column '{column.selector}' does not have a handler</div>
            )}
            {value}
          </div>
        );
      })}
    </StyledDiv>
  );
};

/*
3 let someData;
14 let asText = false;
15 function onDownload() {
16   console.log('xxx:', someData, ' size: ', someData.length);
17   var csv;
18   for (var i = 0; i < someData.length; i++) {
19     var row = someData[i];
20     // console.log('i: ', i, ' row: ', row);
21     csv += [row.group, row.address, row.name].join(asText ? '\t' : ',');
22     csv += '\n';
23   }
24   console.log(csv);
25   var hiddenElement = document.createElement('a');
26   hiddenElement.href = 'data:text/' + (asText ? 'text' : 'csv') + ';charset=utf-8,' + encodeURI(csv);
27   hiddenElement.target = '_blank';
28   hiddenElement.download = 'download.' + (asText ? 'text' : 'csv');
29   hiddenElement.click();
30 }
31 function onDownload1() {
32   asText = true;
33   return onDownload();
34 }
35 function onDownload2() {
36   asText = false;
37   return onDownload();
38 }
*/
