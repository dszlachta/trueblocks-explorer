import React, { Fragment, useState } from 'react';

import { Tablebar } from 'components';
import { formatFieldByType, handleClick } from 'components/utils';
import { calcValue, getPrimaryKey } from 'store';

import './ObjectTable.css';

//-----------------------------------------------------------------
export const ObjectTable = ({
  data,
  columns,
  title = '',
  search = false,
  searchFields = [],
  pagination = false,
  paginationParts = '',
  showHidden = false,
  handler = null,
  cn = null,
}) => {
  const [filterText] = useState('');

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const id = calcValue(data, idCol);

  const tableBar = (title !== '' || pagination) && (
    <Tablebar
      title={title}
      search={search}
      filterText={filterText}
      searchFields={searchFields}
      pagination={pagination}
      pagingCtx={{ curPage: 0, paginationParts: paginationParts }}
      handler={handler}
    />
  );

  let debug = false;
  return (
    <div className={(cn ? cn : 'ot') + '-container'}>
      {debug && <pre>{JSON.stringify(columns, null, 2)}</pre>}
      {tableBar}
      <div className={'at-body ' + (cn ? cn : 'ot') + '-body'}>
        {columns.map((column, index) => {
          if (!showHidden && column.hidden) return null;

          const value = calcValue(data, column);
          if (!showHidden && value === '') return null;

          const fieldName = column.selector; //column.name || column.selector;
          const fieldType = column.type || 'string';
          const formatted = formatFieldByType(fieldType, value, column.decimals);
          const key = id + '_' + column.selector;

          return (
            <div key={key} className={'at-row ' + (cn ? cn : 'ot') + '-row'}>
              <ObjectTableSider cn={cn}>{fieldName + ':'}</ObjectTableSider>
              <ObjectTableColumn cn={cn} column={column}>
                <div>{formatted}</div>
              </ObjectTableColumn>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//-----------------------------------------------------------------
const ObjectTableSider = ({ cn, children }) => {
  return (
    <Fragment>
      <div className={'at-header-base at-sider ' + (cn ? cn : 'ot') + '-sider'}>{children}</div>
    </Fragment>
  );
};

//-----------------------------------------------------------------
export const ObjectTableColumn = ({ cn, column, children }) => {
  const { align, editable } = column;
  let ccn = (cn ? cn : 'ot') + '-cell' + (editable ? ' editable' : '') + (align === 'wordwrap' ? ' ' : ' nowrap');
  if (column.cn) ccn += ' ' + column.cn;
  return (
    <div style={{ overflow: 'none' }} className={ccn} align="left">
      {children}
    </div>
  );
};
