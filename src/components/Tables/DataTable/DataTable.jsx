import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Toolbar, Editable } from 'components';
import { calcValue } from 'store';
import { stateFromStorage, formatFieldByType } from 'components/utils';

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
}) => {
  const [pagingCtx, setPaging] = useState(stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0 }));
  let total = columns.reduce((sum, item) => sum + (item.hidden ? 0 : item.width), 0);
  let nHidden = 0;
  const wids = columns.map((item) => {
    if (item.hidden) {
      nHidden++;
      return '';
    }
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length - nHidden;

  const [filterText, setFilterText] = useState('');
  let filteredData = data;
  if (filterText !== '' && hasFields(columns, searchFields)) {
    filteredData = data.filter((record) => {
      return matches(record, searchFields, filterText);
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
      default:
        break;
    }
  };

  const hasData = filteredData ? filteredData.length > 0 : false;
  const firstInPage = Number(pagingCtx.perPage) * Number(pagingCtx.curPage);
  const lastInPage = Math.min(Number(firstInPage) + Number(pagingCtx.perPage), hasData ? filteredData.length : 0);

  useEffect(() => {
    setPaging({ perPage: pagingCtx.perPage, curPage: 0, total: hasData ? filteredData.length : 0 });
  }, [data, filterText]);
  //  }, [data, filterText, hasData, filteredData.length, pagingCtx.perPage]);

  function idColumn(columns) {
    const ret = columns.filter((c) => c.selector === 'id');
    return ret ? ret[0] : ret;
  }
  const idCol = idColumn(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

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
      {showHeader && <Header columns={columns} />}
      <div className="at-body dt-body">
        {hasData ? (
          filteredData.map((record, index) => {
            const key = calcValue(record, idCol) + '_' + index;
            if (index < firstInPage || index >= lastInPage) return <Fragment key={key}></Fragment>;
            return <DataTableRow key={key} id={key} wids={wids} columns={columns} record={record} />;
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
        <div>Searching is disabled</div>
      )}
      <div>Todo: Expandable Rows, Sorting, Row and Icon Hover</div>
    </Fragment>
  );
};

//-----------------------------------------------------------------
//const ExpandedRow = ({ columns, record }) => {
//  return (
//    <div style={{ gridColumn: '1 / span 7' }}>
//      <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr 1fr' }}>
//        <div style={{ height: '100%' }}></div>
//        <div style={{ height: '100%' }}>
//          <ObjectTable columns={columns} data={record} />
//        </div>
//        <div style={{ height: '100%' }}></div>
//      </div>
//    </div>
//  );
//};

//-----------------------------------------------------------------
const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.wids};
`;

//-----------------------------------------------------------------
const Header = ({ columns }) => {
  let total = columns.reduce((sum, item) => sum + (item.hidden ? 0 : item.width), 0);
  let nHidden = 0;
  const wids = columns.map((item) => {
    if (item.hidden) {
      nHidden++;
      return '';
    }
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length - nHidden;

  return (
    <StyledHeader key="dt-header" wids={wids} columns={columns} className="base-header at-header dt-header">
      {columns.map((column, index) => {
        const key = 'dt-' + column.name + '-' + index;
        if (column.hidden) return <Fragment key={key}></Fragment>;
        return <div key={key}>{column.name}</div>;
      })}
    </StyledHeader>
  );
};

//-----------------------------------------------------------------
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.wids};
`;

//-----------------------------------------------------------------
const DataTableRow = ({ columns, id, record, wids }) => {
  const fKey = 'dt-frag-' + id;
  const rKey = 'dt-row-' + id;
  return (
    <Fragment key={fKey}>
      <StyledRow key={rKey} className="at-row" wids={wids}>
        {columns.map((column, index) => {
          const key = id + column.name + '-' + index;
          if (column.hidden) return <Fragment key={key}></Fragment>;

          let decimals = column.decimals || 0;
          let type = column.type ? column.type : 'string';
          let value = calcValue(record, column);
          value = formatFieldByType(type, value, false, column.hideZero, decimals);

          let cn = 'at-cell ' + column.cn + ' ';
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
            <div key={key} style={style} className={cn}>
              <Editable editable={column.editable} fieldValue={value} />
            </div>
          );
        })}
      </StyledRow>
    </Fragment>
  );
};

//-----------------------------------------------------------------
const hasField = (columns, field) => {
  return (
    columns.filter((item) => {
      return item.selector === field;
    }).length > 0
  );
};

//-----------------------------------------------------------------
const hasFields = (columns, fields) => {
  if (!fields) return false;
  return (
    fields.reduce((sum, field) => {
      return sum + hasField(columns, field);
    }, 0) === fields.length
  );
};

//-----------------------------------------------------------------
const matches = (record, fields, filterText) => {
  console.log('record: ', record);
  console.log('fields: ', fields);
  return (
    fields.reduce((sum, field) => {
      console.log('field: ', field);
      return sum + record[field].toLowerCase().includes(filterText.toLowerCase());
    }, 0) > 0
  );
};
