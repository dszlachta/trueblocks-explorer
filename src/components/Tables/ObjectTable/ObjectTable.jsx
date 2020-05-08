import React, { Fragment, useState } from 'react';

import { Editable, Tablebar } from 'components';
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
  asForm = false,
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
    <div className="ot-container">
      {debug && <pre>{JSON.stringify(columns, null, 2)}</pre>}
      {tableBar}
      <div className={'ot-body at-body'}>
        <form>
          {columns.map((column, index) => {
            if (!showHidden && column.hidden) return null;

            const value = calcValue(data, column);
            if (!showHidden && value === '') return null;

            const fieldName = column.name || column.selector;
            const fieldType = column.type || 'string';
            const formatted = formatFieldByType(fieldType, value, column.decimals);
            const key = id + '_' + column.selector;

            return (
              <div key={key} className="at-row ot-row">
                <ObjectTableSider>{fieldName + ':'}</ObjectTableSider>
                <ObjectTableColumn column={column}>
                  {asForm ? (
                    <input
                      type="text"
                      name={column.selector}
                      value={value}
                      size="{value ? value.length + 10 : '100%'}"
                    ></input>
                  ) : (
                    <Editable
                      fieldValue={formatted}
                      editable={column.editable}
                      fieldName={column.selector}
                      placeholder={column.selector}
                      onValidate={column.onValidate}
                      onAccept={column.onAccept}
                    />
                  )}
                </ObjectTableColumn>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

//-----------------------------------------------------------------
const ObjectTableSider = ({ children }) => {
  return (
    <Fragment>
      <div className="at-header-base at-sider">{children}</div>
    </Fragment>
  );
};

//-----------------------------------------------------------------
export const ObjectTableColumn = ({ column, children }) => {
  const { align, editable } = column;
  let cn = 'ot-cell' + (editable ? ' editable' : '') + (align === 'wordwrap' ? ' ' : ' nowrap');
  if (column.cn) cn += ' ' + column.cn;
  let debug = false;
  return (
    <div style={{ overflow: 'none' }} className={cn} align="left">
      {debug && <pre>{JSON.stringify(cn, null, 2)}</pre>}
      {children}
    </div>
  );
};
