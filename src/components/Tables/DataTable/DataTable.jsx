import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Tablebar, ObjectTable } from 'components';
import { getIcon } from 'pages/utils';
import { calcValue, getPrimaryKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick, sortArray } from 'components/utils';
import { SortIcon } from 'assets/icons/SortIcon';
import { hasFields, matches } from './utils';

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
  showHidden = false,
  recordIcons = [],
  buttonHandler = null,
}) => {
  const [pagingCtx, setPaging] = useState(
    stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0, arrowsOnly: arrowsOnly })
  );
  const [expandedRow, setExpandedRow] = useState('');
  const [selectedRow, setSelectedRow] = useState('');
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

      case 'perPage':
        const newCtx = { perPage: action.payload, curPage: 0, total: filteredData.length, arrowsOnly: arrowsOnly };
        setPaging(newCtx);
        localStorage.setItem('paging', JSON.stringify(newCtx));
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

      case 'home':
        setPaging({ ...pagingCtx, curPage: 0, total: filteredData.length });
        break;
      case 'end':
        setPaging({
          ...pagingCtx,
          curPage: Math.floor(filteredData.length / perPage) - !(filteredData.length % perPage),
          total: filteredData.length,
        });
        break;

      case 'right':
        setPaging({ ...pagingCtx, curPage: curPage + 1, total: filteredData.length });
        break;
      case 'left':
        setPaging({ ...pagingCtx, curPage: curPage - 1, total: filteredData.length });
        break;

      case 'down':
        setPaging({ ...pagingCtx, curPage: curPage + 1, total: filteredData.length });
        break;
      case 'up':
        setPaging({ ...pagingCtx, curPage: curPage - 1, total: filteredData.length });
        break;

      case 'row_click':
        if (expandedRow === action.payload) setExpandedRow('');
        setSelectedRow(action.payload);
        break;
      case 'row_doubleclick':
        setExpandedRow(expandedRow === action.payload ? '' : action.payload);
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
    setSelectedRow('');
  }, [data, filterText]);
  //  }, [data, filterText, hasData, filteredData.length, pagingCtx.perPage]);

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const showTools = title !== '' || search || pagination;
  const headerIcons = recordIcons.filter((icon) => icon.includes('header-'));
  const footerIcons = recordIcons.filter((icon) => icon.includes('footer-'));
  const rowIcons = recordIcons.filter((icon) => !icon.includes('header-') && !icon.includes('footer-'));
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
      <DataTableHeader
        columns={columns}
        showHidden={showHidden}
        sortCtx1={sortCtx1}
        sortCtx2={sortCtx2}
        sortHandler={clickHandler}
        headerIcons={headerIcons}
      />
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
                  columns={columns}
                  isSelected={key === selectedRow}
                  record={record}
                  handler={clickHandler}
                  showHidden={showHidden}
                  rowIcons={rowIcons}
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
      {search && <Tablebar search={search} searchFields={searchFields} asHeader={false} footerIcons={footerIcons} />}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.widths};
`;

//-----------------------------------------------------------------
const DataTableHeader = ({
  columns,
  showHidden = false,
  sortCtx1 = { sortBy: '', sortDir: '' },
  sortCtx2 = { sortBy: '', sortDir: '' },
  sortHandler,
  headerIcons = null,
}) => {
  const widths = widthsFromColumns(columns, showHidden, headerIcons.length);
  const sortIcon1 = <SortIcon dir={sortCtx1.sortDir} n={1} />;
  const sortIcon2 = <SortIcon dir={sortCtx2.sortDir} n={2} />;

  return (
    <StyledDiv className="at-header-base at-header dt-header" key="dt-header" widths={widths}>
      {columns.map((column, index) => {
        const key = 'dt-' + column.name + '-' + index;
        if ((column.hidden && !showHidden) || (column.type === 'icons' && headerIcons.length > 0))
          return <Fragment key={key}></Fragment>;

        return (
          <div
            onClick={(e) => handleClick(e, sortHandler, { type: 'sortBy', payload: column.selector })}
            style={{ display: 'flex', justifyItems: 'center' }}
          >
            <div style={{ textTransform: 'capitalize', paddingRight: '4px' }} key={key}>
              {column.name}
            </div>
            {column.selector === sortCtx1.sortBy ? sortIcon1 : <></>}
            {column.selector === sortCtx2.sortBy ? sortIcon2 : <></>}
          </div>
        );
      })}
      <IconTray iconList={headerIcons} />
    </StyledDiv>
  );
};

//-----------------------------------------------------------------
const DataTableRow = ({ columns, id, record, isSelected, handler, showHidden, rowIcons = null }) => {
  const widths = widthsFromColumns(columns, showHidden, rowIcons.length);
  const rKey = 'dt-row-' + id;
  return (
    <StyledDiv
      onClick={(e) => handleClick(e, handler, { type: 'row_click', payload: id })}
      onDoubleClick={(e) => handleClick(e, handler, { type: 'row_doubleclick', payload: id })}
      key={rKey}
      className="at-row dt-row"
      widths={widths}
    >
      {columns.map((column, index) => {
        const key = id + column.name + '-' + index;
        if ((column.hidden && !showHidden) || (column.type === 'icons' && rowIcons.length > 0))
          return <Fragment key={key}></Fragment>;

        let type = column.type ? column.type : 'string';
        let value = calcValue(record, column);
        value = formatFieldByType(type, value, column.decimals);
        if (!value || value === undefined) value = type === 'spacer' ? '' : '-';

        let cn = 'at-cell ' + (column.cn ? column.cn : '');
        switch (type) {
          case 'calc':
          case 'uint32':
          case 'uint64':
          case 'blknum':
          case 'double':
          case 'timestamp':
          case 'filesize':
          case 'gas':
          case 'wei':
            cn += ' right ';
            break;
          case 'bool':
          case 'hash':
            cn += ' center ';
            break;
          case 'address':
          case 'bytes32':
          case 'function':
          case 'string':
          default:
            break;
        }
        if (column.isPill) {
          cn += ' at-pill center ';
          cn += type === 'bool' ? (record[column.selector] ? 'true' : 'false') : record[column.selector];
        }
        cn += isSelected ? ' selected' : '';

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
      <IconTray isSelected={isSelected} iconList={rowIcons} />
    </StyledDiv>
  );
};

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
      <ObjectTable data={record} columns={columns} showHidden={true} handler={handler} />
      <div></div>
      <div></div>
    </div>
  );
};

//-----------------------------------------------------------------
const IconTray = ({ iconList, isSelected }) => {
  if (!iconList || iconList.length === 0) return null;
  return (
    <div
      className={isSelected ? ' selected' : ''}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(' + iconList.length + ', 1fr)',
        justifyItems: 'flex-end',
        alignItems: 'center',
      }}
    >
      {iconList.map((a) => {
        const icon = a.replace('footer-', '').replace('header-', '').split('/')[0];
        return getIcon(icon, false, true, 18);
      })}
    </div>
  );
};

export function widthsFromColumns(columns, showHidden, nIcons) {
  let totalWidth = columns.reduce((sum, column) => {
    const hidden = (column.hidden && !showHidden) || column.type === 'icons';
    const width = column.width || 1;
    return sum + (hidden ? 0 : width);
  }, 0);
  let hasIcons = false;
  const ret = columns
    .map((column) => {
      const hidden = (column.hidden && !showHidden) || column.type === 'icons';
      hasIcons = hasIcons || column.type === 'icons';
      if (hidden) return null;
      const width = column.width || 1;
      return Math.floor((width / totalWidth) * 64) + 'fr ';
    })
    .filter((x) => x !== null);
  if (hasIcons) ret.push(' minmax(' + nIcons * 22 + 'px, ' + nIcons + 'fr)');
  return ret;
}

/*
export to CSV
3 let someData;
14 let asText = false;
15 function onDownload() {
16   console.log('xxx:', someData, ' size: ', someData.length);
17   var csv;
18   for (var i = 0; i < someData.length; i++) {
19     var row = someData[i];
20     // console.log('i: ', i, ' row: ', row);
21     csv += [row.gr oup, row.address, row.name].join(asText ? '\t' : ',');
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
