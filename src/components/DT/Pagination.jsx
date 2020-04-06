import React from 'react';

import "./DT.css";

//-------------------------------------------------------
export const Pagination = ({ pagingCtx }) => {
  const { perPage, curPage, total } = pagingCtx;
  const start = (perPage * curPage) + 1;
  const end = (perPage * (curPage + 1));
  return (
    <div className="dt-pagination-container">
      Rows per page <PerPageSelector pagingCtx={pagingCtx}/>{' '}
      records {start}-{end} of {total}{' '}
      <PagingControls />
    </div>
  );
}

//-------------------------------------------------------
const PerPageSelector = ({ pagingCtx }) => {
  const perPageOptions = [10, 20, 25, 50, 100];
  const { perPage, curPage, total, handler } = pagingCtx;
  return (
    <select
      value={perPage}
      onChange={({ target }) => handler({ type: 'perPage', payload: target.value })}
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
    </select>
  );
}

//-------------------------------------------------------
const PagingControls = ({}) => {
  return (
    <>
      first prev next last
    </>
  );
}