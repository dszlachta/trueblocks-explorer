import React from 'react';

import { Pagination } from './Pagination';
import { Search } from './Search';

export const TableToolbar = ({ title, search, searchFields, filterText, pagination, handler, pagingCtx }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Search enabled={search} searchFields={searchFields} filterText={filterText} handler={handler} />
        {<div className="dt-title">{title ? title.replace('%20', ' ') : ''}</div>}
        {pagination && <Pagination pagingCtx={pagingCtx} handler={handler} />}
      </div>
    </div>
  );
};
