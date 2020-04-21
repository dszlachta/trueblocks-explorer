import React from 'react';

import { Pagination } from './Pagination';
import { Search } from './Search';

//-----------------------------------------------------------------------
export const Tablebar = ({
  title = '',
  search = false,
  searchFields = [],
  filterText = '',
  pagination = false,
  pagingCtx = { curPage: 0 },
  handler = null,
}) => {
  const wids = pagingCtx.arrowsOnly ? '1fr' : '3fr 7fr 3fr';
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: wids }}>
        {!pagingCtx.arrowsOnly && (
          <Search enabled={search} searchFields={searchFields} searchText={filterText} handler={handler} />
        )}
        {!pagingCtx.arrowsOnly && <Title title={title} />}
        <Pagination enabled={pagination} handler={handler} pagingCtx={pagingCtx} />
      </div>
    </div>
  );
};

//-----------------------------------------------------------------------
const Title = ({ title }) => {
  return <div className="at-title">{title ? title.replace('%20', ' ') : ''}</div>;
};
