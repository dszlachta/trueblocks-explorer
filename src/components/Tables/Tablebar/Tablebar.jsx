import React from 'react';

import { Pagination } from './Pagination';
import { Search } from './Search';

import './Tablebar.css';

//-----------------------------------------------------------------------
export const Tablebar = ({
  title = '',
  search = false,
  searchFields = [],
  filterText = '',
  pagination = false,
  pagingCtx = { curPage: 0 },
  handler = null,
  asHeader = true,
}) => {
  const header = (
    <div className="tablebar-container">
      <div style={{ display: 'grid', gridTemplateColumns: pagingCtx.arrowsOnly ? '1fr' : '3fr 7fr 3fr' }}>
        {!pagingCtx.arrowsOnly && (
          <Search enabled={search} searchFields={searchFields} searchText={filterText} handler={handler} />
        )}
        {!pagingCtx.arrowsOnly && <Title title={title} />}
        <Pagination enabled={pagination} handler={handler} pagingCtx={pagingCtx} />
      </div>
    </div>
  );
  const footer = <FooterMessage searchFields={searchFields} />;
  return asHeader ? header : footer;
};

//-----------------------------------------------------------------------
const Title = ({ title }) => {
  return <div className="at-title">{title ? title.replace('%20', ' ') : ''}</div>;
};

//-----------------------------------------------------------------
const FooterMessage = ({ searchFields }) => {
  return (
    <div>
      Searching fields:{' '}
      <div style={{ display: 'inline', fontStyle: 'italic' }}>
        {searchFields &&
          searchFields
            .map((field) => {
              return field;
            })
            .join(', ')}
      </div>
    </div>
  );
};
