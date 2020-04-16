import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Toolbar, ObjectTable } from 'components';
import { calcValue, getPrimaryKey } from 'store';
import { stateFromStorage, formatFieldByType, handleClick } from 'components/utils';

import './DataTable.css';

//-----------------------------------------------------------------
export const DataTable = ({
  data,
  columns,
  title = 'Data Table (dt-)',
  search = true,
  pagination = true,
  searchFields,
  noHeader = false,
  expandable = true,
  showHidden = false,
}) => {
  let total = columns.reduce((sum, item) => sum + (item.hidden && !showHidden ? 0 : item.width), 0);
  let nHidden = 0;
  const wids = columns.map((item) => {
    if (item.hidden && !showHidden) {
      nHidden++;
      return '';
    }
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length - nHidden;

  const [pagingCtx, setPaging] = useState(stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0 }));
  const [expandedRow, setExpandedRow] = useState('');
  const [filterText, setFilterText] = useState('');
  let filteredData = data;
  if (filterText !== '' && hasFields(columns, searchFields)) {
    filteredData = data.filter((record) => {
      return matches(record, searchFields, filterText.toLowerCase());
    });
  }

  const pageHandler = (action) => {
    const { perPage, curPage } = pagingCtx;
    switch (action.type) {
      case 'update_filter':
        setFilterText(action.payload);
        break;
      case 'clear_filter':
        setFilterText('');
        break;
      case 'first':
        setPaging({ perPage: perPage, curPage: 0, total: filteredData.length });
        break;
      case 'next':
        setPaging({ perPage: perPage, curPage: curPage + 1, total: filteredData.length });
        break;
      case 'previous':
        setPaging({ perPage: perPage, curPage: curPage - 1, total: filteredData.length });
        break;
      case 'last':
        setPaging({ perPage: perPage, curPage: Math.floor(filteredData.length / perPage), total: filteredData.length });
        break;
      case 'perPage':
        const newCtx = { perPage: action.payload, curPage: 0, total: filteredData.length };
        setPaging(newCtx);
        localStorage.setItem('paging', JSON.stringify(newCtx));
        break;
      case 'expand_row':
        if (expandable) setExpandedRow(expandedRow === action.payload ? '' : action.payload);
        break;
      default:
        break;
    }
  };

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
  const buttonStyle = {
    width: '120px',
    margin: '4px',
    padding: '4px',
  };

  const showTools = title !== '' || search || pagination;
  const showHeader = !noHeader;
  return (
    <Fragment key="dt">
      {showTools && (
        <Toolbar
          title={title}
          handler={pageHandler}
          search={search}
          filterText={filterText}
          searchFields={searchFields}
          pagination={pagination}
          pagingCtx={pagingCtx}
        />
      )}
      {showHeader && <DataTableHeader columns={columns} showHidden={showHidden} />}
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
                  handler={pageHandler}
                  showHidden={showHidden}
                />
                {key === expandedRow ? (
                  <div style={expandedStyle}>
                    <div></div>
                    <ObjectTable data={record} columns={columns} compact={true} />
                    <div>
                      <button style={buttonStyle}>save changes</button>
                      <button style={buttonStyle}>add monitor</button>
                      <button style={buttonStyle}>view history</button>
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
const DataTableHeader = ({ columns, showHidden = false }) => {
  let total = columns.reduce((sum, item) => sum + (item.hidden && !showHidden ? 0 : item.width), 0);
  let nHidden = 0;
  const wids = columns.map((item) => {
    if (item.hidden && !showHidden) {
      nHidden++;
      return '';
    }
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length - nHidden;

  return (
    <StyledDiv key="dt-header" wids={wids} columns={columns} className="base-header at-header dt-header">
      {columns.map((column, index) => {
        const key = 'dt-' + column.name + '-' + index;
        if (column.hidden && !showHidden) return <Fragment key={key}></Fragment>;
        return <div key={key}>{column.name}</div>;
      })}
    </StyledDiv>
  );
};

//-----------------------------------------------------------------
const DataTableRow = ({ columns, id, record, wids, expandable, handler, showHidden }) => {
  const fKey = 'dt-frag-' + id;
  const rKey = 'dt-row-' + id;
  return (
    <StyledDiv key={rKey} className={'at-row' + (expandable ? ' expandable' : '')} wids={wids}>
      {columns.map((column, index) => {
        const key = id + column.name + '-' + index;
        if (column.hidden && !showHidden) return <Fragment key={key}></Fragment>;

        let decimals = column.decimals || 0;
        let type = column.type ? column.type : 'string';
        let value = calcValue(record, column);
        value = formatFieldByType(type, value, false, column.hideZero, decimals);
        if (!value || value === undefined) value = '-';

        let cn = 'at-cell ' + (column.cn ? column.cn : '') + ' ';
        switch (type) {
          case 'calc':
          case 'number':
          case 'timestamp':
          case 'filesize':
            cn += 'right ';
            break;
          case 'bool':
          case 'hash':
          case 'short_hash':
          case 'string':
          default:
            break;
        }
        cn += column.pill ? ' at-pill center ' + record[column.selector] : '';
        const style = column.align ? { justifySelf: column.align } : {};
        return (
          <div
            key={key}
            style={style}
            className={cn}
            onClick={(e) => handleClick(e, handler, { type: 'expand_row', payload: id })}
          >
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
