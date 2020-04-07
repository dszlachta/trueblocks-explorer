import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Pagination } from './Pagination';
import { Search } from './Search';
import { ObjectTable2 } from 'components';
import { stateFromStorage, handleClick } from 'components/utils';

import './DataTable.css';

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.wids};
`;

const hasField = (columns, field) => {
  return (
    columns.filter((item) => {
      return item.selector === field;
    }).length > 0
  );
};

const hasFields = (columns, fields) => {
  return (
    fields.reduce((sum, field) => {
      return sum + hasField(columns, field);
    }, 0) === fields.length
  );
};

const matches = (record, fields, filterText) => {
  return (
    fields.reduce((sum, field) => {
      console.log();
      return sum + record[field].toLowerCase().includes(filterText.toLowerCase());
    }, 0) > 0
  );
};

export const DataTable = ({
  columns,
  data,
  title,
  search = true,
  searchFields,
  pagination = true,
  noHeader = false,
}) => {
  const [pagingCtx, setPaging] = useState(stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0 }));
  let total = columns.reduce((sum, item) => sum + item.width, 0);
  const wids = columns.map((item) => {
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length;

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

  const showTools = title !== '' || search || pagination;
  const showHeader = !noHeader;
  return (
    <>
      {showTools && (
        <Toolbar
          title={title}
          search={search}
          searchFields={searchFields}
          filterText={filterText}
          pagination={pagination}
          handler={pageHandler}
          pagingCtx={pagingCtx}
        />
      )}
      {showHeader && <Header columns={columns} />}
      <StyledTable wids={wids} className="dt-body">
        {hasData ? (
          filteredData.map((record, index) => {
            if (index < firstInPage || index >= lastInPage) return <></>; //
            return (
              <>
                <MainRow key={index} columns={columns} record={record} />
                {/* <div style={{ gridColumn: '1 / span 7' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'}}>
                  <div style={{ height: '100%' }}></div>
                  <div style={{ height: '100%' }}>
                  <ObjectTable2 fieldList={columns} data={record} />
                  </div>
                  <div style={{ height: '100%' }}></div>
                </div>
              </div> */}
              </> //
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </StyledTable>
      {search ? (
        <div>
          Searching fields:{' '}
          <div style={{ display: 'inline', fontStyle: 'italic' }}>
            {searchFields
              .map((field) => {
                return field;
              })
              .join(', ')}
          </div>
        </div>
      ) : (
        <div>Searching disabled</div>
      )}
      <div>Todo: Expandable Rows, Sorting</div>
    </> //
  );
};

const Toolbar = ({ title, search, searchFields, filterText, pagination, handler, pagingCtx }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Search enabled={search} searchFields={searchFields} filterText={filterText} handler={handler} />
        {<div className="dt-title">{title.replace('%20', ' ')}</div>}
        {pagination && <Pagination pagingCtx={pagingCtx} handler={handler} />}
      </div>
    </div>
  );
};

const Header = ({ columns }) => {
  let total = columns.reduce((sum, item) => sum + item.width, 0);
  const wids = columns.map((item) => {
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length;

  return (
    <StyledHeader wids={wids} columns={columns} className="dt-header">
      {columns.map((column) => {
        return <div>{column.name}</div>;
      })}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.wids};
`;

const MainRow = ({ columns, record }) => {
  return (
    <>
      {columns.map((column) => {
        const key = column.selector;
        const value = record[key];
        return <div className={column.cn ? column.cn : 'dt-cell'}>{value}</div>;
      })}
    </> //
  );
};
