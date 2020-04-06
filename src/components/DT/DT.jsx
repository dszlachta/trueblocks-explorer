import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import './DT.css';
import { ObjectTable2 } from 'components';
import { stateFromStorage } from 'components/utils';

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: ${props => props.wids};
  overflow-y: scroll;
`;

export const DT = ({ columns, data, noHeader, title, search, pagination }) => {
  const [pagingCtx, setPaging] = useState(stateFromStorage('paging', { perPage: 10, curPage: 0 }));
  let total = columns.reduce((sum, item) => sum + item.width, 0);
  const wids = columns.map(item => {
    if (Number.isNaN(total))
      return '1fr ';
    return (Math.floor((item.width / total) * 64) + 'fr ');
  });
  if (Number.isNaN(total))
    total = columns.length;

  console.log('p: ', total, wids);

  const pageHandler = (action) => {
    let newCtx = pagingCtx;
    switch (action.type) {
      case 'perPage':
        newCtx = { perPage: action.payload, curPage: 0, total: data.length, handler: pageHandler };
        break;
    }
    setPaging(newCtx);
    localStorage.setItem('paging', JSON.stringify(newCtx));
  }

  useEffect(()=>{
    setPaging({ perPage: pagingCtx.perPage, curPage: 0, total: data.length, handler: pageHandler });
  },[data]);

  const showTools = (title !== '' || search || pagination);
  const showHeader = !noHeader;
  return (
    <>
      {showTools && <Toolbar search={search} title={title} pagination={pagination} pagingCtx={pagingCtx} />}
      {showHeader && <Header columns={columns}/>}
      <StyledTable wids={wids} className="dt-body">
        {data.map((record, index) => {
          if (index >= pagingCtx.perPage)
            return <></>;
          return (
            <>
              <MainRow columns={columns} record={record} />
              {/* <div style={{ gridColumn: '1 / span 7' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'}}>
                  <div style={{ height: '100%' }}></div>
                  <div style={{ height: '100%' }}>
                  <ObjectTable2 fieldList={columns} data={record} />
                  </div>
                  <div style={{ height: '100%' }}></div>
                </div>
              </div> */}
            </>
          );
        })}
      </StyledTable>
    </>
  )
}

const Toolbar = ({ title, search, pagination, pagingCtx }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Search enabled={search} />
        {<div style={{ alignSelf: 'end', justifySelf: 'center', fontSize: '20pt', height: '27pt' }}>{title}</div>}
        {pagination && <Pagination pagingCtx={pagingCtx} />}
      </div>
    </div>
  );
}

const Header = ({ columns }) => {
  let total = columns.reduce((sum, item) => sum + item.width, 0);
  const wids = columns.map(item => {
    if (Number.isNaN(total))
      return '1fr ';
    return (Math.floor((item.width / total) * 64) + 'fr ');
  });
  if (Number.isNaN(total))
    total = columns.length;

  return (
    <StyledHeader wids={wids} columns={columns} className="dt-header">
      {columns.map((column) => {
        return (
          <div>
            {column.name}
          </div>
        );
      })}
    </StyledHeader>
  );
}


const Paggy = styled.div`
  align-self: end;
  justify-self: end;
  font-size: .9em;
`;

const Pagination = ({ pagingCtx }) => {
  const { perPage, curPage, total, handler } = pagingCtx;
  const perPageOptions = [ 10, 20, 25, 50, 100 ];
  const sel = 
    <select
      value={perPage}
      onChange={({target}) => handler({ type: 'perPage', payload: target.value })}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        fontSize: 'inherit',
        backgroundColor: 'transparent',
        appearance: 'none',
        direction: 'ltr',
      }}>
        {perPageOptions.map((n) => {
          return (<option>{n}</option>);
        })}
    </select>;
  const start = (perPage * curPage) + 1;
  const end = (perPage * (curPage + 1));
  return (
    <Paggy>
      {`Rows per page: `}
      {sel}
      {` ${start}-${end} of ${total}.......controls`}
    </Paggy>
  );
}

const Search = ({ enabled }) => {
  return (
    <div style={{ alignSelf: 'end', justifySelf: 'start' }}>{enabled ? 'Search' : ''}</div>
  );
}

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: ${ props => props.wids };
`;

const MainRow = ({ columns, record }) => {
  return (
    <>
      {Object.keys(record).map((key, index) => {
        return (
          <div className={columns[index].cn ? columns[index].cn : "dt-cell"}>
            {record[key]}
          </div>
        );
      })}
    </>
  );
}
