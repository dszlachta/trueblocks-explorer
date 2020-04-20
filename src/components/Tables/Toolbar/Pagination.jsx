import React, { Fragment, useState, useEffect } from 'react';
import Mousetrap from 'mousetrap';

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
export const Pagination = ({ enabled, handler, pagingCtx }) => {
  useEffect(() => {
    Mousetrap.bind(['meta+shift+home'], getHandler(pagingCtx, 'first', handler));
    Mousetrap.bind(['meta+shift+end'], getHandler(pagingCtx, 'last', handler));
    Mousetrap.bind(['home'], getHandler(pagingCtx, 'first', handler));
    Mousetrap.bind(['end'], getHandler(pagingCtx, 'last', handler));
    Mousetrap.bind(['up'], getHandler(pagingCtx, 'previous', handler));
    Mousetrap.bind(['left'], getHandler(pagingCtx, 'previous', handler));
    Mousetrap.bind(['down'], getHandler(pagingCtx, 'next', handler));
    Mousetrap.bind(['right'], getHandler(pagingCtx, 'next', handler));
    return () => {
      Mousetrap.unbind(['meta+shift+home'], getHandler(pagingCtx, 'first', handler));
      Mousetrap.unbind(['meta+shift+end'], getHandler(pagingCtx, 'last', handler));
      Mousetrap.unbind(['home'], getHandler(pagingCtx, 'first', handler));
      Mousetrap.unbind(['end'], getHandler(pagingCtx, 'last', handler));
      Mousetrap.unbind(['up'], getHandler(pagingCtx, 'previous', handler));
      Mousetrap.unbind(['left'], getHandler(pagingCtx, 'previous', handler));
      Mousetrap.unbind(['down'], getHandler(pagingCtx, 'next', handler));
      Mousetrap.unbind(['right'], getHandler(pagingCtx, 'next', handler));
    };
  }, [handler]);

  if (!enabled) return <div></div>;
  return (
    <div className="pagination-container">
      <pre>{JSON.stringify(pagingCtx, null, 2)}</pre>
      {!pagingCtx.arrowsOnly && <Selector handler={handler} pagingCtx={pagingCtx} />}
      {!pagingCtx.arrowsOnly && <Display pagingCtx={pagingCtx} />}
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
function isDisabled(pagingCtx, which) {
  const { perPage, curPage, total } = pagingCtx;
  if (which === 'first' || which === 'previous') return curPage === 0;
  return curPage === Math.floor(total / perPage);
}

//-----------------------------------------------------------------
function getHandler(pagingCtx, which, handler) {
  if (isDisabled(pagingCtx, which)) {
    return () => {}; // noop
  }
  return (e) => handleClick(e, handler, { type: which });
}

//-----------------------------------------------------------------
const PagingIcon = ({ name, handler, pagingCtx }) => {
  const frstCn = 'pagination-icons ' + (isDisabled(pagingCtx, 'previous') ? 'disabled' : '');
  const lastCn = 'pagination-icons ' + (isDisabled(pagingCtx, 'next') ? 'disabled' : '');

  const size = 18;
  const filled = false;
  const func = getHandler(pagingCtx, name, handler);

  switch (name) {
    case 'first':
      return <ChevronsLeft onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'previous':
      return <ChevronLeft onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'top':
      return <ChevronsUp onClick={func} className={frstCn} size={size} filled={filled} />;
    case 'up':
      return <ChevronUp onClick={func} className={frstCn} size={size} filled={filled} />;

    case 'last':
      return <ChevronsRight onClick={func} className={lastCn} size={size} filled={filled} />;
    case 'next':
      return <ChevronRight onClick={func} className={lastCn} size={size} filled={filled} />;
    case 'bottom':
      return <ChevronsDown onClick={func} className={lastCn} size={size} filled={filled} />;
    case 'down':
      return <ChevronDown onClick={func} className={lastCn} size={size} filled={filled} />;
    default:
      return <Fragment>{name} </Fragment>;
  }
};
