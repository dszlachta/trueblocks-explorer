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
  pagingCtx = { curPage: 0 },
  handler = null,
  asHeader = true,
  footerIcons = null,
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
  const style2 = { alignSelf: 'start' };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
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
        {footerIcons.map((a) => {
          const icon = a.replace('footer-', '').split('/')[0];
          return getIcon(icon, false, true, 18);
        })}
      </div>
    </div>
  );
};
