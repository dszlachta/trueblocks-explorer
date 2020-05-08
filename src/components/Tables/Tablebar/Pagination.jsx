import React, { Fragment, useState, useEffect } from 'react';
import Mousetrap from 'mousetrap';

import { handleClick } from 'components/utils';

import 'components/Tables/DataTable/DataTable.css';
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'assets/icons/SetChevrons.jsx';
import { ChevronsUp, ChevronUp, ChevronDown, ChevronsDown } from 'assets/icons/SetChevrons.jsx';

import './Pagination.css';

//-----------------------------------------------------------------
export const Pagination = ({ enabled = false, handler = null, pagingCtx = { curPage: 0, paginationParts: '' } }) => {
  useEffect(() => {
    Mousetrap.bind(['home'], getHandler(pagingCtx, 'home', handler));
    Mousetrap.bind(['end'], getHandler(pagingCtx, 'end', handler));
    Mousetrap.bind(['up'], getHandler(pagingCtx, 'up', handler));
    Mousetrap.bind(['left'], getHandler(pagingCtx, 'left', handler));
    Mousetrap.bind(['down'], getHandler(pagingCtx, 'down', handler));
    Mousetrap.bind(['right'], getHandler(pagingCtx, 'right', handler));
    return () => {
      Mousetrap.unbind(['home']);
      Mousetrap.unbind(['end']);
      Mousetrap.unbind(['up']);
      Mousetrap.unbind(['left']);
      Mousetrap.unbind(['down']);
      Mousetrap.unbind(['right']);
    };
  }, [handler, pagingCtx]);

  if (!enabled) return <div></div>; // we need this div so spacing of title works right
  if (!handler) return <div className="warning">Pagination is enabled, but no handler given</div>;

  const parts = pagingCtx.paginationParts;
  return (
    <div className="pagination-container">
      {parts !== 'arrows-only' && <Selector handler={handler} pagingCtx={pagingCtx} />}
      {parts !== 'arrows-only' && <Display pagingCtx={pagingCtx} />}
      {
        <Fragment>
          <PagingIcon name="home" handler={handler} pagingCtx={pagingCtx} />
          <PagingIcon name="left" handler={handler} pagingCtx={pagingCtx} />
          <PagingIcon name="right" handler={handler} pagingCtx={pagingCtx} />
          <PagingIcon name="end" handler={handler} pagingCtx={pagingCtx} />
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
  let extra = false;
  const perPageOptions = [2, 5, 10, 15, 20, 30, 50, 75, 100].filter((val) => {
    if (val < pagingCtx.total) return true;
    if (extra) return false;
    extra = true;
    return true;
  });
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
function isDisabled(pagingCtx, which) {
  if (which !== 'left' && which !== 'right') return false; // up and down (i.e. select row) are handled by the table component
  const { perPage, curPage, total } = pagingCtx;
  if (which === 'left') return curPage === 0;
  return curPage === Math.floor(total / perPage) - !(total % perPage);
}

//-----------------------------------------------------------------
function getHandler(pagingCtx, which, handler) {
  if (isDisabled(pagingCtx, which)) return () => {}; // noop
  return (e) => handleClick(e, handler, { type: which });
}

//-----------------------------------------------------------------
const PagingIcon = ({ name, handler, pagingCtx }) => {
  const frstCn =
    'pagination-icons ' +
    (isDisabled(pagingCtx, 'home') || isDisabled(pagingCtx, 'up') || isDisabled(pagingCtx, 'left') ? 'disabled' : '');
  const lastCn =
    'pagination-icons ' +
    (isDisabled(pagingCtx, 'end') || isDisabled(pagingCtx, 'down') || isDisabled(pagingCtx, 'right') ? 'disabled' : '');

  const size = 18;
  const filled = false;
  const func = getHandler(pagingCtx, name, handler);

  switch (name) {
    case 'home':
      return <ChevronsLeft onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'end':
      return <ChevronsRight onClick={func} className={lastCn} size={size} filled={filled} />;
    case 'top':
      return <ChevronsUp onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'bottom':
      return <ChevronsDown onClick={func} className={lastCn} size={size} filled={filled} />;

    case 'left':
      return <ChevronLeft onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'right':
      return <ChevronRight onClick={func} className={lastCn} size={size} filled={filled} />;
    case 'up':
      return <ChevronUp onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'down':
      return <ChevronDown onClick={func} className={lastCn} size={size} filled={filled} />;

    default:
      return <Fragment>{name} </Fragment>;
  }
};
