import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Pagination } from './Pagination';
import { ObjectTable2 } from 'components';
import { stateFromStorage, handleClick } from 'components/utils';

import './DT.css';

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.wids};
`;

export const DT = ({ columns, data, noHeader, title, search, pagination, searchField }) => {
  const [filterText, setFilterText] = useState('');
  const filteredData = data.filter((item) => item[searchField] && item[searchField].includes(filterText));

  const [pagingCtx, setPaging] = useState(stateFromStorage('paging', { perPage: 10, curPage: 0, total: 0 }));
  let total = columns.reduce((sum, item) => sum + item.width, 0);
  const wids = columns.map((item) => {
    if (Number.isNaN(total)) return '1fr ';
    return Math.floor((item.width / total) * 64) + 'fr ';
  });
  if (Number.isNaN(total)) total = columns.length;

  const pageHandler = (action) => {
    const { perPage, curPage } = pagingCtx;
    switch (action.type) {
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

  useEffect(() => {
    setPaging({ perPage: pagingCtx.perPage, curPage: 0, total: filteredData.length });
  }, [filteredData]);

  const showTools = title !== '' || search || pagination;
  const showHeader = !noHeader;
  const firstInPage = Number(pagingCtx.perPage) * Number(pagingCtx.curPage);
  const lastInPage = Math.min(Number(firstInPage) + Number(pagingCtx.perPage), filteredData.length);
  return (
    <>
      {showTools && (
        <Toolbar
          title={title}
          search={search}
          searchField={searchField}
          curSearch={filterText}
          pagination={pagination}
          handler={pageHandler}
          pagingCtx={pagingCtx}
        />
      )}
      {showHeader && <Header columns={columns} />}
      <StyledTable wids={wids} className="dt-body">
        {filteredData.map((record, index) => {
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
        })}
      </StyledTable>
    </> //
  );
};

const Toolbar = ({ title, search, searchField, curSearch, pagination, handler, pagingCtx }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Searchbox enabled={search} searchField={searchField} curSearch={curSearch} />
        {<div style={{ alignSelf: 'end', justifySelf: 'center', fontSize: '20pt', height: '27pt' }}>{title}</div>}
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

const Searchbox = ({ enabled, searchField, curSearch }) => {
  return (
    <div style={{ alignSelf: 'end', justifySelf: 'start' }}>
      {enabled ? (
        <div className="dt-search-container">
          <input className="dt-search" placeholder={'Search ' + searchField + '...'} value={curSearch}></input>
          <button className="dt-search-clear-button">x</button>
        </div>
      ) : (
        ''
      )}
    </div>
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
