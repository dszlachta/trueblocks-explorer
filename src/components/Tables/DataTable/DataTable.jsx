import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Toolbar, ObjectTable } from 'components';
import { calcValue, getPrimaryKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick, sortArray } from 'components/utils';
import { SortIcon } from 'assets/icons/SortIcon';

import './DataTable.css';

//-----------------------------------------------------------------
export const DataTable = ({
  data,
  columns,
  title = 'Data Table (dt-)',
  search = true,
  pagination = true,
  arrowsOnly = false,
  searchFields,
  noHeader = false,
  expandable = true,
  showHidden = false,
}) => {
  let totalWidth = columns.reduce((sum, item) => sum + (item.hidden && !showHidden ? 0 : item.width), 0);
  let nHidden = 0;
  const wids = columns.map((item) => {
    if (item.hidden && !showHidden) {
      nHidden++;
      return '';
    }
    if (Number.isNaN(totalWidth)) return '1fr ';
    return Math.floor((item.width / totalWidth) * 64) + 'fr ';
  });
  //if (Number.isNaN(totalWidth)) totalWidth = columns.length - nHidden;

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
        setPaging({ ...pagingCtx, curPage: Math.floor(filteredData.length / perPage), total: filteredData.length });
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

  const expandedStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 8fr 1fr 5fr',
    borderBottom: '1px solid grey',
    padding: '2px',
  };

  const showTools = title !== '' || search || pagination;
  const showHeader = !noHeader;
  return (
    <Fragment key="dt">
      <pre>paging: {JSON.stringify(pagingCtx, null, 2)}</pre>
      <pre>arrowsOnly: {arrowsOnly ? 'true' : 'false'}</pre>
      {showTools && (
        <Toolbar
          title={title}
          handler={clickHandler}
          search={search}
          filterText={filterText}
          searchFields={searchFields}
          pagination={pagination}
          pagingCtx={pagingCtx}
        />
      )}
      {showHeader && (
        <DataTableHeader
          columns={columns}
          showHidden={showHidden}
          sortCtx1={sortCtx1}
          sortCtx2={sortCtx2}
          sortHandler={clickHandler}
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
                  wids={wids}
                  columns={columns}
                  record={record}
                  expandable={expandable}
                  handler={clickHandler}
                  showHidden={showHidden}
                />
                {key === expandedRow ? (
                  <div style={expandedStyle}>
                    <div></div>
                    <ObjectTable data={record} columns={columns} compact={true} showHidden={true} />
                    <div>
                      <button>save changes</button>
                      <button>add monitor</button>
                      <button>view history</button>
                    </div>
                    <div></div>
                  </div>
                ) : (
                  <Fragment></Fragment>
                )}
              </Fragment>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {search ? (
        <div>
          Searching fields:{' '}
          <div style={{ display: 'inline', fontStyle: 'italic' }}>
            {searchFields ? (
              searchFields
                .map((field) => {
                  return field;
                })
                .join(', ')
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </div>
      ) : (
        <div>{/*Searching is disabled*/}</div>
      )}
      {/*<div>Todo: Expandable Rows, Sorting, Row and Icon Hover</div>*/}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.wids};
`;

//-----------------------------------------------------------------
const DataTableHeader = ({
  columns,
  showHidden = false,
  sortCtx1 = { sortBy: '', sortDir: '' },
  sortCtx2 = { sortBy: '', sortDir: '' },
  sortHandler,
}) => {
  let totalWidth = columns.reduce((sum, item) => sum + (item.hidden && !showHidden ? 0 : item.width), 0);
  let nHidden = 0;
  const wids = columns.map((item) => {
    if (item.hidden && !showHidden) {
      nHidden++;
      return '';
    }
    if (Number.isNaN(totalWidth)) return '1fr ';
    return Math.floor((item.width / totalWidth) * 64) + 'fr ';
  });
  //if (Number.isNaN(totalWidth)) totalWidth = columns.length - nHidden;

  const sortIcon1 = <SortIcon dir={sortCtx1.sortDir} n={1} />;
  const sortIcon2 = <SortIcon dir={sortCtx2.sortDir} n={2} />;

  return (
    <StyledDiv key="dt-header" wids={wids} columns={columns} className="base-header at-header dt-header">
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
const DataTableRow = ({ columns, id, record, wids, expandable, handler, showHidden }) => {
  const rKey = 'dt-row-' + id;
  return (
    <StyledDiv
      onClick={(e) => handleClick(e, handler, { type: 'expand_row', payload: id })}
      key={rKey}
      className={'at-row' + (expandable ? ' expandable' : '')}
      wids={wids}
    >
      {columns.map((column, index) => {
        const key = id + column.name + '-' + index;
        if (column.hidden && !showHidden) return <Fragment key={key}></Fragment>;

        let type = column.type ? column.type : 'string';
        let value = calcValue(record, column);
        value = formatFieldByType(type, value, column.decimals || 0);
        if (!value || value === undefined) value = '-';

        let cn = 'at-cell ' + (column.cn ? column.cn : '') + ' ';
        switch (type) {
          case 'calc':
          case 'uint64':
          case 'timestamp':
          case 'filesize':
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
            {value}
          </div>
        );
      })}
    </StyledDiv>
  );
};

/**
 * hasField - returns true if the given field is found columns, false otherwise
 *
 * @param {array} columns - list of columns in the data table
 * @param {string} field - column to find
 */
function hasField(columns, field) {
  return (
    columns.filter((item) => {
      return item.selector === field;
    }).length > 0
  );
}

/**
 * hasFields - returns true if all fields are found columns, false otherwise
 *
 * @param {array} columns - list of columns in the data table
 * @param {array} fields - an array of strings listing field names
 */
function hasFields(columns, fields) {
  if (!fields) return false;
  return (
    fields.reduce((sum, field) => {
      return sum + hasField(columns, field);
    }, 0) === fields.length
  );
}

/**
 * matches - returns true if the object matches filterText on any field in fields
 *
 * @param {object} record - the data object to search
 * @param {array} fields - the list of fields to search (assumes hasFields returns true)
 * @param {string} filterText - the text to search for
 */
function matches(record, fields, filterText) {
  return (
    fields.reduce((sum, field) => {
      return sum + record[field].toLowerCase().includes(filterText);
    }, 0) > 0
  );
}
