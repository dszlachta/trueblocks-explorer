/* eslint-disable no-lone-blocks */
import React, { Fragment, useState, useEffect } from 'react';

import { Tablebar, ObjectTable, IconTray, Copyable } from 'components';
import { createClass } from 'components/utils';
import { calcValue, getPrimaryKey, getAltIconKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick, sortArray } from 'components/utils';
import { hasFields, matches } from './utils';

import ChevronUp from 'assets/icons/ChevronUp';
import ChevronDown from 'assets/icons/ChevronDown';

import './DataTable.css';

//-------------------------------------------------------------------------
export const DataTable = ({
  data,
  columns,
  title = 'Data Table (dt-)',
  name = '',
  search = false,
  searchFields = [],
  pagination = false,
  paginationParts = '',
  showHidden = false,
  recordIcons = [],
  parentHandler = null,
}) => {
  const [pagingCtx, setPaging] = useState(
    stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0, paginationParts: paginationParts })
  );
  const [expandedRow, setExpandedRow] = useState('');
  const [selectedRow, setSelectedRow] = useState('');
  const [filterText, setFilterText] = useState('');

  const [sortCtx1, setSortCtx1] = useState(stateFromStorage(name + '_sort1', { sortBy: '', sortDir: 'asc' }));
  const [sortCtx2, setSortCtx2] = useState(stateFromStorage(name + '_sort2', { sortBy: '', sortDir: 'asc' }));

  function changeRow(rowId) {
    setSelectedRow(rowId);
    if (parentHandler) parentHandler({ type: 'row-changed', record_id: rowId });
  }

  const dataTableHandler = (action) => {
    //console.log(action);
    const { perPage, curPage } = pagingCtx;
    switch (action.type) {
      case 'update_filter':
        setFilterText(action.payload);
        break;
      case 'clear_filter':
        setFilterText('');
        break;

      case 'perPage':
        const newCtx = {
          perPage: action.payload,
          curPage: 0,
          total: filteredData.length,
          paginationParts: paginationParts,
        };
        setPaging(newCtx);
        localStorage.setItem('paging', JSON.stringify(newCtx));
        changeRow(calcValue(filteredData[0], idCol));
        break;
      case 'sortBy':
        let newSort1 = sortCtx1;
        let newSort2 = sortCtx2;
        if (sortCtx1.sortBy === action.fieldName) {
          if (sortCtx1.sortDir === 'asc') {
            newSort1.sortDir = 'desc';
          } else if (sortCtx1.sortDir === 'desc') {
            newSort1 = sortCtx2;
            newSort2 = { sortBy: '', sortDir: 'asc' };
          } else {
            newSort1.sortDir = 'asc';
          }
        } else {
          newSort1 = { sortBy: action.fieldName, sortDir: 'asc' };
          newSort2 = sortCtx1;
        }
        setSortCtx1(newSort1);
        setSortCtx2(newSort2);
        localStorage.setItem(name + '_sort1', JSON.stringify(newSort1));
        localStorage.setItem(name + '_sort2', JSON.stringify(newSort2));
        setPaging({ ...pagingCtx, curPage: 0, total: filteredData.length });
        changeRow(calcValue(filteredData[0], idCol));
        break;

      case 'home':
        setPaging({ ...pagingCtx, curPage: 0, total: filteredData.length });
        changeRow(calcValue(filteredData[0], idCol));
        break;
      case 'end':
        setPaging({
          ...pagingCtx,
          curPage: Math.floor(filteredData.length / perPage) - !(filteredData.length % perPage),
          total: filteredData.length,
        });
        changeRow(calcValue(filteredData[filteredData.length - 1], idCol));
        break;

      case 'right':
        {
          setPaging({ ...pagingCtx, curPage: curPage + 1, total: filteredData.length });
          changeRow(calcValue(filteredData[perPage * (curPage + 1)], idCol));
        }
        break;
      case 'left':
        setPaging({ ...pagingCtx, curPage: curPage - 1, total: filteredData.length });
        changeRow(calcValue(filteredData[perPage * (curPage - 1)], idCol));
        break;

      case 'down':
        {
          let curIndex = -1;
          filteredData.map((item, index) => {
            if (calcValue(item, idCol) === selectedRow) {
              curIndex = index;
            }
          });
          if (curIndex < filteredData.length - 1) changeRow(calcValue(filteredData[curIndex + 1], idCol));
          if (curIndex === pagingCtx.perPage * (pagingCtx.curPage + 1) - 1) dataTableHandler({ type: 'right' });
        }
        break;
      case 'up':
        {
          let curIndex = -1;
          filteredData.map((item, index) => {
            if (calcValue(item, idCol) === selectedRow) {
              curIndex = index;
            }
          });
          if (curIndex > 0) changeRow(calcValue(filteredData[curIndex - 1], idCol));
        }
        break;

      case 'row_click':
        if (expandedRow === action.record_id) setExpandedRow('');
        changeRow(action.record_id);
        setExpandedRow(expandedRow === action.record_id ? '' : action.record_id);
        break;
      case 'row_doubleclick':
        if (parentHandler) parentHandler({ type: 'row_doubleclick', record_id: action.record_id });
        break;
      case 'download':
        const asCSV = action.fmt === 'CSV';
        const exportFields = columns.filter((column) => {
          return column.selector === 'compressedTx' || column.selector === 'value' || !column.hidden;
        });
        const download = data.map((record, index) => {
          const row = exportFields
            .map((column) => {
              return record[column.selector];
            })
            .join(asCSV ? ',' : '\t');
          return row + '\n';
        });
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/' + (asCSV ? 'csv' : 'text') + ';charset=utf-8,' + encodeURI(download);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'download.' + (asCSV ? 'csv' : 'txt');
        hiddenElement.click();
        break;
      case 'copied':
      case 'not-copied':
        setSelectedRow('');
        break;
      default:
        if (parentHandler) parentHandler(action);
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
    changeRow('');
  }, [data, filterText]);
  //  }, [data, filterText, hasData, filteredData.length, pagingCtx.perPage]);

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;
  const altIconCol = getAltIconKey(columns);

  const showTools = title !== '' || search || pagination;
  const headerIcons = recordIcons.filter((icon) => icon.includes('header-'));
  const footerIcons = recordIcons.filter((icon) => icon.includes('footer-'));
  const rowIcons = recordIcons.filter((icon) => !icon.includes('header-') && !icon.includes('footer-'));
  const maxIcons = Math.max(headerIcons.length, rowIcons.length);
  const widArray = widthsFromColumns(columns, showHidden);
  if (maxIcons) widArray.push(' minmax(' + maxIcons * 25 + 'px, 1fr)');
  let widStr = widArray.map((a) => a + ' ').join(' ');
  widStr = widStr.replace(',', '').replace('  ', ' ').replace('px', 'px, ');

  const str = 'grid-template-columns: ' + widStr + '; display: grid;';
  createClass('#whatever-' + name, str);
  createClass('#whatever-row-' + name, str);

  const debug = false;
  return (
    <Fragment key="dt">
      {debug && <pre>{JSON.stringify(filteredData.length - 1, null, 2)}</pre>}
      {showTools && (
        <Tablebar
          title={title}
          handler={dataTableHandler}
          search={search}
          filterText={filterText}
          searchFields={searchFields}
          pagination={pagination}
          pagingCtx={{ ...pagingCtx, paginationParts: paginationParts }}
        />
      )}
      <DataTableHeader
        columns={columns}
        showHidden={showHidden}
        sortCtx1={sortCtx1}
        sortCtx2={sortCtx2}
        handler={dataTableHandler}
        headerIcons={headerIcons}
        name={name}
      />
      <DataTableRows
        data={filteredData}
        columns={columns}
        hasData={hasData}
        idCol={idCol}
        altIconCol={altIconCol}
        handler={dataTableHandler}
        expandedRow={expandedRow}
        selectedRow={selectedRow}
        // key={key}
        firstInPage={firstInPage}
        lastInPage={lastInPage}
        rowIcons={rowIcons}
        showHidden={showHidden}
        name={name}
      />
      {search && (
        <Tablebar
          search={search}
          searchFields={searchFields}
          asHeader={false}
          handler={dataTableHandler}
          footerIcons={footerIcons}
        />
      )}
    </Fragment>
  );
};

//-------------------------------------------------------------------------
const DataTableHeader = ({
  columns,
  showHidden = false,
  sortCtx1 = { sortBy: '', sortDir: '' },
  sortCtx2 = { sortBy: '', sortDir: '' },
  handler,
  headerIcons = null,
  name,
}) => {
  const sortIcon1 = <SortIcon dir={sortCtx1.sortDir} n={1} />;
  const sortIcon2 = <SortIcon dir={sortCtx2.sortDir} n={2} />;
  return (
    <div id={'whatever-' + name} className="at-header-base at-header dt-header" key="dt-header">
      {columns.map((column, index) => {
        const cellText = (
          <div style={{ display: 'inline' }}>
            {column.name || column.selector}
            {column.selector === sortCtx1.sortBy && sortIcon1}
            {column.selector === sortCtx2.sortBy && sortIcon2}
          </div>
        );
        return column.hidden || column.selector === 'icons' ? null : (
          <div
            key={'head_' + index}
            onClick={(e) => handleClick(e, handler, { type: 'sortBy', fieldName: column.selector })}
            className="dt-header-cell"
          >
            <div>{cellText}</div>
          </div>
        );
      })}
      <IconTray iconList={headerIcons} handler={handler} record_id={null} />
    </div>
  );
};

//-------------------------------------------------------------------------
const DataTableRows = ({
  data,
  columns,
  hasData,
  selectedRow,
  expandedRow,
  handler,
  idCol,
  altIconCol,
  firstInPage,
  lastInPage,
  rowIcons,
  showHidden,
  name,
}) => {
  const debug = false;
  return (
    <Fragment>
      {debug && <pre>{JSON.stringify(altIconCol, null, 2)}</pre>}
      {hasData ? (
        data.map((record, index) => {
          // ...for each row
          const id = calcValue(record, idCol);
          const key = id + '_' + index;
          const rowKey = key + '_r';
          const isSelected = id === selectedRow;
          if (index < firstInPage || index >= lastInPage) return <Fragment key={key}></Fragment>;
          const deleted = record.deleted;
          let monitored = false;
          return (
            <Fragment key={'f_' + rowKey}>
              {/*<pre>{JSON.stringify(altIconCol, null, 2)}</pre>*/}
              {/*<pre>{monitored ? 'true' : 'false'}</pre>*/}
              <div
                className={'at-row dt-row' + (isSelected ? ' selected' : '') + (deleted ? ' at-deleted' : '')}
                id={'whatever-row-' + name}
                onClick={(e) => handleClick(e, handler, { type: 'row_click', record_id: id })}
                onDoubleClick={(e) => handleClick(e, handler, { type: 'row_doubleclick', record_id: id })}
                key={rowKey}
              >
                {columns.map((column, index) => {
                  // ...for each column
                  const colKey = rowKey + '_' + index;
                  if ((column.hidden && !showHidden) || (column.type === 'icons' && rowIcons.length > 0)) return null;
                  let type = column.type ? column.type : 'string';
                  let rawValue = record[column.selector];
                  let value = calcValue(record, column);
                  value = formatFieldByType(type, value, column.decimals);
                  let found = {};
                  let underField = null;
                  if (column.underField && column.underField !== '') {
                    underField = column.underField; // don't remove
                    found = columns.filter((col) => {
                      return col.selector === underField;
                    });
                    if (found.length > 0) underField = <div className="underField">{calcValue(record, found[0])}</div>;
                  }
                  if (!value || value === undefined) value = type === 'spacer' ? '' : column.isPill ? '' : '-';
                  let cn = 'at-cell dt-cell ';
                  if (column.cn) cn += column.cn + ' ';
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
                    case 'ether':
                      cn += ' right ';
                      break;
                    case 'bool':
                      cn += ' center ';
                      break;
                    case 'hash':
                    case 'address':
                    case 'bytes32':
                    case 'function':
                    case 'string':
                    default:
                      break;
                  }
                  if (column.isPill && value !== '') {
                    cn += ' at-pill center ';
                    cn += type === 'bool' ? (calcValue(record, column) ? 'true' : 'false') : calcValue(record, column);
                  }
                  if (column.align) cn += ' ' + (column.align && column.align);
                  if (column.selector === 'monitored') {
                    monitored = calcValue(record, column);
                  }
                  return (
                    <div key={colKey} className={cn}>
                      {debug && <pre>{JSON.stringify(found, null, 2)}</pre>}
                      {column.isPill && !handler && (
                        <div className="warning">pill column '{column.selector}' does not have a handler</div>
                      )}
                      <Copyable display={value} copyable={column.copyable ? rawValue : null} handler={handler} />
                      {underField && <div>{underField}</div>}
                    </div>
                  );
                })}
                <div style={{ display: 'inline' }}>
                  {<div>{monitored}</div>}
                  <IconTray
                    iconList={rowIcons}
                    handler={handler}
                    record_id={id}
                    alt={{ deleted: deleted, monitored: monitored }}
                  />
                </div>
              </div>
              {false && isSelected && <DataTableExpandedRow data={record} columns={columns} handler={handler} />}
            </Fragment>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const DataTableExpandedRow = ({ data, columns, handler }) => {
  const expandedStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 8fr 5fr',
    borderBottom: '1px solid',
    padding: '2px',
  };

  return (
    <div style={expandedStyle}>
      <div></div>
      <ObjectTable data={data} columns={columns} showHidden={true} handler={handler} />
      <div></div>
      <div></div>
    </div>
  );
};

//-----------------------------------------------------------------
export function widthsFromColumns(columns, showHidden) {
  let totalWidth = columns.reduce((sum, column) => {
    const hidden = (column.hidden && !showHidden) || column.type === 'icons';
    const width = column.width || 1;
    return sum + (hidden ? 0 : width);
  }, 0);

  // console.log('totalWidth: ', totalWidth);
  const ret = columns
    .map((column) => {
      const hidden = (column.hidden && !showHidden) || column.type === 'icons';
      if (hidden) return null;
      const width = column.width || 1;
      if (column.isPill) return 'minmax(80px, ' + (Math.floor((width / totalWidth) * 64) + 'fr) ');
      /* this value (80px) appears in the css for .at-pill - search it */
      return Math.floor((width / totalWidth) * 64) + 'fr ';
    })
    .filter((x) => x !== null);

  return ret;
}

//-------------------------------------------------------------------------
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

/*
  const var = action.type;
}
}
  case 'csv':
    case 'txt':
      return <button key={key}>{labelIn}</button>;
    case 'import':
      return <button key={key}>{labelIn}</button>;

function onDownload1() {
  asText = true;
  return onDownload();
}

function onDownload2() {
  asText = false;
  return onDownload();
}
*/
