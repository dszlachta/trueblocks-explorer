import React from 'react';

import { Pagination } from './Pagination';
import { Search } from './Search';
import { getIcon } from 'pages/utils';

import './Tablebar.css';

//-----------------------------------------------------------------------
export const Tablebar = ({
  title = '',
  search = false,
  searchFields = [],
  filterText = '',
  pagination = false,
  pagingCtx = { curPage: 0, paginationParts: '' },
  handler = null,
  asHeader = true,
  footerIcons = null,
}) => {
  const parts = pagingCtx.paginationParts;
  let searchPart = true;
  let titlePart = true;
  let arrowsPart = true;
  if (typeof parts === 'string') {
    searchPart = parts === '';
    titlePart = parts === '';
    arrowsPart = true;
  }
  const count = searchPart + titlePart + arrowsPart;
  const header = (
    <div className="tablebar-container">
      <div
        style={{ display: 'grid', gridTemplateColumns: count === 1 ? '1fr' : count === 2 ? '1fr 1fr' : '3fr 7fr 3fr' }}
      >
        {searchPart && (
          <Search enabled={search} searchFields={searchFields} searchText={filterText} handler={handler} />
        )}
        {titlePart && <Title title={title} />}
        <Pagination enabled={pagination} handler={handler} pagingCtx={pagingCtx} />
      </div>
    </div>
  );
  const footer = <TableFooterRow searchFields={searchFields} footerIcons={footerIcons} />;
  return asHeader ? header : footer;
};

//-----------------------------------------------------------------------
const Title = ({ title }) => {
  return <div className="at-title">{title && typeof title === 'string' ? title.replace('%20', ' ') : title}</div>;
};

//-----------------------------------------------------------------
const TableFooterRow = ({ searchFields, footerIcons }) => {
  const style1 = {
    alignSelf: 'start',
    justifySelf: 'end',
    display: 'flex',
  };

  return (
    <div key="footer-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr' }}>
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
      <div style={{ justifySelf: 'center' }}></div>
      <div style={style1}>
        {footerIcons.map((a, index) => {
          const icon = a.replace('footer-', '').split('/')[0];
          return getIcon(index, icon, false, true, 18);
        })}
      </div>
    </div>
  );
};
