import React, { Fragment, useState, useEffect } from 'react';

import { Tablebar, ObjectTable } from 'components';
import { ClickableIcon, getIcon } from 'pages/utils';
import { calcValue, getPrimaryKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick, sortArray } from 'components/utils';
import { hasFields, matches } from './utils';

import ChevronUp from 'assets/icons/ChevronUp';
import ChevronDown from 'assets/icons/ChevronDown';
import ExternalLink from 'assets/icons/ExternalLink';

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

  const [sortCtx1, setSortCtx1] = useState(stateFromStorage(name + '_sort1', { sortBy: '', sortDir: 'asc' }));
  const [sortCtx2, setSortCtx2] = useState(stateFromStorage(name + '_sort2', { sortBy: '', sortDir: 'asc' }));

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
        if (expandedRow === action.record_id) setExpandedRow('');
        setSelectedRow(action.record_id);
        // setExpandedRow(expandedRow === action.record_id ? '' : action.record_id);
        break;
      case 'row_doubleclick':
        buttonHandler({ type: 'Edit', record_id: action.record_id });
        break;

      default:
        buttonHandler(action);
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
  const maxIcons = Math.max(Math.max(headerIcons.length, footerIcons.length), rowIcons.length);
  const widArray = widthsFromColumns(columns, showHidden);
  if (maxIcons) widArray.push(' minmax(' + maxIcons * 25 + 'px, 1fr)');
  let widStr = widArray.map((a) => a + ' ').join(' ');
  widStr = widStr.replace(',', '').replace('  ', ' ').replace(' 1fr)', ', 1fr)');

  const str = 'grid-template-columns: ' + widStr + '; display: grid;';
  createClass('#whatever', str);
  createClass('#whatever-row', str);

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
        handler={dataTableHandler}
        headerIcons={headerIcons}
      />
      <DataTableRows
        data={filteredData}
        columns={columns}
        hasData={hasData}
        idCol={idCol}
        handler={dataTableHandler}
        expandedRow={expandedRow}
        selectedRow={selectedRow}
        // key={key}
        firstInPage={firstInPage}
        lastInPage={lastInPage}
        rowIcons={rowIcons}
        showHidden={showHidden}
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
            onClick={(e) => handleClick(e, handler, { type: 'sortBy', fieldName: column.selector })}
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
      <IconTray iconList={headerIcons} handler={handler} record_id={null} alt={false} />
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
  firstInPage,
  lastInPage,
  rowIcons,
  showHidden,
}) => {
  return (
    <Fragment>
      {hasData ? (
        data.map((record, index) => {
          // ...for each row
          const id = calcValue(record, idCol);
          const key = id + '_' + index;
          const rowKey = key + '_r';
          const isSelected = key === selectedRow;
          if (index < firstInPage || index >= lastInPage) return <Fragment key={key}></Fragment>;
          const deleted = record.deleted;
          return (
            <Fragment>
              <div
                className={'at-row dt-row' + (isSelected ? ' selected' : '') + (deleted ? ' at-deleted' : '')}
                id="whatever-row"
                onClick={(e) => handleClick(e, handler, { type: 'row_click', record_id: id })}
                onDoubleClick={(e) => handleClick(e, handler, { type: 'row_doubleclick', record_id: id })}
                key={rowKey}
              >
                {columns.map((column) => {
                  // ...for each column
                  const key = id + column.name + '-' + index;
                  if ((column.hidden && !showHidden) || (column.type === 'icons' && rowIcons.length > 0)) return null;
                  let type = column.type ? column.type : 'string';
                  let value = calcValue(record, column);
                  const deleted = record.deleted;
                  value = formatFieldByType(type, value, column.decimals);
                  if (!value || value === undefined) value = type === 'spacer' ? '' : '-';
                  let cn = 'at-cell dt-cell';
                  cn += ' ' + column.cn;
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
                  if (column.isPill) {
                    cn += ' at-pill center ';
                    cn += type === 'bool' ? (record[column.selector] ? 'true' : 'false') : record[column.selector];
                  }
                  if (column.align) {
                    cn += ' ' + column.align;
                  }
                  return (
                    <div className={cn}>
                      {column.isPill && !handler && (
                        <div className="warning">pill column '{column.selector}' does not have a handler</div>
                      )}
                      {value}
                    </div>
                  );
                })}
                <div style={{ display: 'inline' }}>
                  {/*<div>{deleted ? 'deleted' : 'not deleted'}</div>*/}
                  <IconTray iconList={rowIcons} handler={handler} record_id={id} alt={deleted} />
                </div>
              </div>
              {key === expandedRow && <DataTableExpandedRow record={record} columns={columns} handler={handler} />}
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
      //      console.log(column.name, width);
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

function createClass(name, rules) {
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!(style.sheet || {}).insertRule) (style.styleSheet || style.sheet).addRule(name, rules);
  else style.sheet.insertRule(name + '{' + rules + '}', 0);
}

const IconTray = ({ iconList, handler, record_id, alt = false }) => {
  if (!iconList || iconList.length === 0) return <div></div>;
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
        const alternates = a.replace('footer-', '').replace('header-', '').split('/');
        const icon = alternates.length < 2 ? alternates[0] : alternates[alt ? 1 : 0];
        if (icon === '' || icon === 'None') return null;
        return <ClickableIcon icon={icon} handler={handler} record_id={record_id} />;
      })}
    </div>
  );
};

/*
export to CSV
let someData;
let asText = false;
function onDownload(action) {
  const var = action.type;
  var csv = data.map((record) => {
    return (
      [record.group, record.address, record.name].join(asText ? '\t' : ',') + '\n';
    );
  })
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/' + (asText ? 'text' : 'csv') + ';charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'download.' + (asText ? 'text' : 'csv');
  hiddenElement.click();
}

function onDownload1() {
  asText = true;
  return onDownload();
}

function onDownload2() {
  asText = false;
  return onDownload();
}
*/
