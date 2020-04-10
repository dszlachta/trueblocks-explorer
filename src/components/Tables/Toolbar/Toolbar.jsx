import React from 'react';

import { Pagination } from './Pagination';
import { Search } from './Search';

export const Toolbar = ({ title, search, searchFields, filterText, pagination, handler, pagingCtx = {} }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 7fr 3fr' }}>
        <Search enabled={search} searchFields={searchFields} searchText={filterText} handler={handler} />
        {<div className="at-title">{title ? title.replace('%20', ' ') : ''}</div>}
        {pagination && <Pagination pagingCtx={pagingCtx} handler={handler} />}
      </div>
    </div>
  );
};
