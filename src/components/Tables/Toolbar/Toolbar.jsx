import React from 'react';

import { Pagination } from './Pagination';
import { Search } from './Search';

//-----------------------------------------------------------------------
export const Toolbar = ({ title, search, searchFields, filterText, pagination, handler, pagingCtx = {} }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 7fr 3fr' }}>
        <Search enabled={search} searchFields={searchFields} searchText={filterText} handler={handler} />
        <Title title={title} />
        <Pagination enabled={pagination} handler={handler} pagingCtx={pagingCtx} />
      </div>
    </div>
  );
};

//-----------------------------------------------------------------------
const Title = ({ title }) => {
  return <div className="at-title">{title ? title.replace('%20', ' ') : ''}</div>;
};
