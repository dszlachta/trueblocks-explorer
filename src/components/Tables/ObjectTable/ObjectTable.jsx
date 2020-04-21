import React, { Fragment, useState } from 'react';

import { Editable, Tablebar } from 'components';
import { formatFieldByType } from 'components/utils';
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
  arrowsOnly = false,
  noSider = false,
  compact = false,
  showHidden = false,
  buttonList = [],
  handler = null,
}) => {
  const [filterText] = useState('');

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const id = calcValue(data, idCol);
  const buttons = buttonList && (
    <div>
      {buttonList.map((item) => {
        return (
          <Fragment>
            <button>{item}</button>
            <br />
          </Fragment>
        );
      })}
    </div>
  );

  const showTools = title !== '' || pagination;
  return (
    <Fragment>
      {showTools && (
        <Tablebar
          title={title}
          search={search}
          filterText={filterText}
          searchFields={searchFields}
          pagination={pagination}
          pagingCtx={{ curPage: 0, arrowsOnly: arrowsOnly }}
          handler={handler}
        />
      )}
      <div className="at-body">
        {columns.map((column, index) => {
          const value = calcValue(data, column);

          if (column.hidden && !showHidden) return null;
          if (value === '' && compact) return null;

          const cn = 'at-row ' + (noSider ? 'ot-row-nosider' : 'ot-row' + (compact ? '-compact' : ''));
          const name = column.name || column.selector;
          const type = column.type || 'string';
          const displayName = compact ? name : name.substr(0, 8);
          const fmtValue = formatFieldByType(type, value, column.decimals || 0);
          return (
            <div key={id + '_' + column.selector} className={cn}>
              {noSider ? null : <ObjectTableSider>{displayName}:</ObjectTableSider>}
              {noSider || compact ? null : <div></div>}
              <TableColumn editable={column.editable} noSider={noSider} compact={compact}>
                {column.editable && !column.onAccept && (
                  <div className="warning">Editable field '{column.selector}' does not have an onAccept function</div>
                )}
                <Editable
                  editable={column.editable}
                  fieldValue={fmtValue}
                  fieldName={column.selector}
                  placeholder={column.selector}
                  onValidate={column.onValidate}
                  onAccept={column.onAccept}
                />
              </TableColumn>
            </div>
          );
        })}
      </div>
      {buttons}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const ObjectTableSider = ({ children }) => {
  return (
    <Fragment>
      <div className="base-header at-sider">{children}</div>
    </Fragment>
  );
};

//-----------------------------------------------------------------
export const TableColumn = ({ editable = false, noSider = false, compact, children }) => {
  let cn = (noSider ? 'ot-cell-nosider' : 'ot-cell' + (compact ? '-compact' : '')) + (editable ? ' editable' : '');
  return (
    <div className={cn} align="left">
      {children}
    </div>
  );
};
