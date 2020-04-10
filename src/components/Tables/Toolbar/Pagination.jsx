import React, { Fragment, useState } from 'react';

import { handleClick } from 'components/utils';

import 'components/Tables/DataTable/DataTable.css';

import ChevronsLeft from 'assets/icons/ChevronsLeft';
import ChevronLeft from 'assets/icons/ChevronLeft';
import ChevronRight from 'assets/icons/ChevronRight';
import ChevronsRight from 'assets/icons/ChevronsRight';
import ChevronsUp from 'assets/icons/ChevronsUp';
import ChevronUp from 'assets/icons/ChevronUp';
import ChevronDown from 'assets/icons/ChevronDown';
import ChevronsDown from 'assets/icons/ChevronsDown';

import './Pagination.css';

//-----------------------------------------------------------------
export const Pagination = ({ handler, pagingCtx }) => {
  if (isNaN(pagingCtx.curPage)) return <Fragment></Fragment>;
  return (
    <div className="pagination-container">
      <Selector handler={handler} pagingCtx={pagingCtx} />
      <Display pagingCtx={pagingCtx} />
      {
        <Fragment>
          <PagingIcon name="first" handler={handler} pagingCtx={pagingCtx} />
          <PagingIcon name="previous" handler={handler} pagingCtx={pagingCtx} />
          <PagingIcon name="next" handler={handler} pagingCtx={pagingCtx} />
          <PagingIcon name="last" handler={handler} pagingCtx={pagingCtx} />
        </Fragment>
      }
    </div>
  );
};

//-----------------------------------------------------------------
const Display = ({ pagingCtx }) => {
  const { perPage, curPage, total } = pagingCtx;
  const start = Math.min(perPage * curPage + 1, pagingCtx.total);
  const end = Math.min(perPage * (curPage + 1), pagingCtx.total);

  return (
    <Fragment>
      {start}-{end} of {total}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const Selector = ({ handler, pagingCtx }) => {
  const [expanded, setExpanded] = useState(false);
  const perPageOptions = [2, 5, 10, 15, 20, 30, 50, 75, 100];
  const { perPage } = pagingCtx;
  const onClick = (e) => {
    if (e.target.toggle) e.target.toggle();
    setExpanded(true);
  };
  return (
    <Fragment>
      Per page{' '}
      {expanded ? (
        <select
          style={{ display: 'hidden' }}
          className="pagination-perpage"
          value={perPage}
          onChange={({ target }) => {
            if (handler) handler({ type: 'perPage', payload: target.value });
            setExpanded(false);
          }}
        >
          {perPageOptions.map((n) => {
            return <option>{n}</option>;
          })}
        </select>
      ) : (
        <Fragment>{perPage}</Fragment>
      )}
      <ChevronDown
        className="pagination-perpage"
        onClick={onClick}
        style={{ paddingLeft: '5px', paddingRight: '5px' }}
        size={15}
        filled
      />
    </Fragment>
  );
};

//-----------------------------------------------------------------
const PagingIcon = ({ name, handler, pagingCtx }) => {
  const { perPage, curPage, total } = pagingCtx;

  const disFrst = curPage === 0;
  const disLast = curPage === Math.floor(total / perPage);

  const frstCn = 'pagination-icons ' + (disFrst ? 'disabled' : '');
  const lastCn = 'pagination-icons ' + (disLast ? 'disabled' : '');

  const clickFrst = disFrst ? () => {} : (e) => handleClick(e, handler, { type: name });
  const clickLast = disLast ? () => {} : (e) => handleClick(e, handler, { type: name });

  const size = 18;
  const filled = false;

  switch (name) {
    case 'first':
      return <ChevronsLeft onClick={clickFrst} className={frstCn} size={size} filled={filled} />;
    case 'previous':
      return <ChevronLeft onClick={clickFrst} className={frstCn} size={size} filled={filled} />;
    case 'top':
      return <ChevronsUp onClick={clickFrst} className={frstCn} size={size} filled={filled} />;
    case 'up':
      return <ChevronUp onClick={clickFrst} className={frstCn} size={size} filled={filled} />;

    case 'last':
      return <ChevronsRight onClick={clickLast} className={lastCn} size={size} filled={filled} />;
    case 'next':
      return <ChevronRight onClick={clickLast} className={lastCn} size={size} filled={filled} />;
    case 'bottom':
      return <ChevronsDown onClick={clickLast} className={lastCn} size={size} filled={filled} />;
    case 'down':
      return <ChevronDown onClick={clickLast} className={lastCn} size={size} filled={filled} />;
    default:
      return <>{name} </>; //
  }
};
