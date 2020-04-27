import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Tablebar, ObjectTable } from 'components';
import { getIcon } from 'pages/utils';
import { calcValue, getPrimaryKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick, sortArray } from 'components/utils';
import { hasFields, matches } from './utils';

import ChevronUp from 'assets/icons/ChevronUp';
import ChevronDown from 'assets/icons/ChevronDown';

import './DataTable.css';

const colors = ['red', 'green', 'blue', 'black', 'purple', 'red', 'orange', 'grey'];
const DataTableHeader = ({
  columns,
  showHidden = false,
  sortCtx1 = { sortBy: '', sortDir: '' },
  sortCtx2 = { sortBy: '', sortDir: '' },
  sortHandler,
  headerIcons = null,
  nIcons = 0,
  widths = '',
}) => {
  const sortIcon1 = <SortIcon dir={sortCtx1.sortDir} n={1} />;
  const sortIcon2 = <SortIcon dir={sortCtx2.sortDir} n={2} />;
  return (
    <div id="whatever" className="at-header-base at-header dt-header" key="dt-header">
      {columns.map((column, index) => {
        const cellText = (
          <div style={{ display: 'inline' }}>
            {column.name}
            {column.selector === sortCtx1.sortBy && sortIcon1}
            {column.selector === sortCtx2.sortBy && sortIcon2}
          </div>
        );
        return column.hidden || column.selector === 'icons' ? null : (
          <div
            onClick={(e) => handleClick(e, sortHandler, { type: 'sortBy', payload: column.selector })}
            style={{
              textAlign: 'center',
              borderRight: '1px solid #2aa198',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              wordWrap: 'none',
            }}
          >
            <div>{cellText}</div>
          </div>
        );
      })}
      <IconTray iconList={headerIcons} nIcons={nIcons} />
    </div>
  );
};

const DataTableRows = ({ data, columns, hasData, handler, idCol, firstInPage, lastInPage }) => {
  return (
    <Fragment>
      {hasData ? (
        data.map((record, index) => {
          // ...for each row
          const key = calcValue(record, idCol) + '_' + index;
          const id = calcValue(record, idCol) + '_' + index;
          const rKey = 'dt-row-' + id;
          if (index < firstInPage || index >= lastInPage) return <Fragment key={key}></Fragment>;
          return (
            <div
              id="whatever-row"
              className="at-body dt-body"
              onClick={(e) => handleClick(e, handler, { type: 'row_click', payload: id })}
              onDoubleClick={(e) => handleClick(e, handler, { type: 'row_doubleclick', payload: id })}
              key={rKey}
            >
              {columns.map((column) => {
                // ...for each column
                if (column.hidden) return null;
                return <div className="dtt-row-cell">{calcValue(record, column)}</div>;
              })}
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>

    /*
const DataTableRow = ({
  record,
  columns,
  id,
  isSelected,
  handler,
  showHidden,
  rowIcons = null,
  nIcons = 0,
  widths = '',
}) => {
  //if (hasIcons) ret.push(' minmax(' + nIcons * 25 + 'px, ' + nIcons + 'fr)');
  return (
    <StyledDiv
      onClick={(e) => handleClick(e, handler, { type: 'row_click', payload: id })}
      onDoubleClick={(e) => handleClick(e, handler, { type: 'row_doubleclick', payload: id })}
      key={rKey}
      className={'at-row dt-row' + (isSelected ? ' selected' : '')}
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
      <IconTray iconList={rowIcons} nIcons={nIcons} />
    </StyledDiv>
  );
};
                <DataTableRow
                  key={key}
                  id={key}
                  columns={columns}
                  isSelected={key === selectedRow}
                  record={record}
                  handler={dataTableHandler}
                  showHidden={showHidden}
                  rowIcons={rowIcons}
                  nIcons={maxIcons}
                  widths={widths}
                />
                {key === expandedRow && (
                  <DataTableExpandedRow record={record} columns={columns} handler={dataTableHandler} />
                )}
*/
  );
};

/*


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
*/

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

export function widthsFromColumns(columns, showHidden) {
  let totalWidth = columns.reduce((sum, column) => {
    const hidden = (column.hidden && !showHidden) || column.type === 'icons';
    const width = column.width || 1;
    return sum + (hidden ? 0 : width);
  }, 0);

  const ret = columns
    .map((column) => {
      const hidden = (column.hidden && !showHidden) || column.type === 'icons';
      if (hidden) return null;
      const width = column.width || 1;
      return Math.floor((width / totalWidth) * 64) + 'fr ';
    })
    .filter((x) => x !== null);

  return ret;
}

//-----------------------------------------------------------------
export const SortIcon = ({ dir, n = -1 }) => {
  if (dir === '') return <></>;
  return (
    <div style={{ display: 'inline' }}>
      {dir === 'asc' ? <ChevronDown size="13px" /> : dir === 'desc' ? <ChevronUp size="13px" /> : <></>}
      {n !== -1 ? (
        <small>
          <small>{n}</small>
        </small>
      ) : null}
    </div>
  );
};

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

  const dataTableHandler = (action) => {
    console.log(action);
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

  let showTools = title !== '' || search || pagination;
  search = false;

  const headerIcons = recordIcons.filter((icon) => icon.includes('header-'));
  const footerIcons = recordIcons.filter((icon) => icon.includes('footer-'));
  const rowIcons = recordIcons.filter((icon) => !icon.includes('header-') && !icon.includes('footer-'));
  const maxIcons = Math.max(Math.max(headerIcons.length, footerIcons.length), rowIcons.length);
  const widths = widthsFromColumns(columns, showHidden);
  if (maxIcons) widths.push(' minmax(' + maxIcons * 25 + 'px, 1fr)');
  let widStr = widths.map((a) => a + ' ').join(' ');
  widStr = widStr.replace(',', '').replace('  ', ' ').replace(' 1fr)', ', 1fr)');

  const str = 'grid-template-columns: ' + widStr + '; display: grid;';
  createClass('#whatever', str);
  createClass('#whatever-row', str);
  createClass('#whatever-row:hover', 'background-color: white;');

  // <pre>{str}</pre>
  // <pre>sort1: {JSON.stringify(sortCtx1, null, 2)}</pre>
  // <pre>sort2: {JSON.stringify(sortCtx2, null, 2)}</pre>

  return (
    <Fragment key="dt">
      {showTools && (
        <Tablebar
          title={title}
          handler={dataTableHandler}
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
        sortHandler={dataTableHandler}
        headerIcons={headerIcons}
        nIcons={maxIcons}
        widths={widths}
      />
      <DataTableRows
        data={filteredData}
        columns={columns}
        hasData={hasData}
        idCol={idCol}
        handler={dataTableHandler}
        // key={key}
        firstInPage={firstInPage}
        lastInPage={lastInPage}
      />
      {search && (
        <Tablebar
          search={search}
          searchFields={searchFields}
          asHeader={false}
          handler={dataTableHandler}
          footerIcons={footerIcons}
          nIcons={maxIcons}
        />
      )}
    </Fragment>
  );
};

function createClass(name, rules) {
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!(style.sheet || {}).insertRule) (style.styleSheet || style.sheet).addRule(name, rules);
  else style.sheet.insertRule(name + '{' + rules + '}', 0);
}

const IconTray = ({ iconList, nIcons }) => {
  if (nIcons === 0) return null;
  if (!iconList) return <div></div>;
  return (
    <div
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
