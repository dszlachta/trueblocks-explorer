import React, { Fragment } from 'react';

import { Editable } from 'components';
import { formatFieldByType } from 'components/utils';
import { calcValue, getPrimaryKey } from 'store';

import './ObjectTable.css';

//       if (silentWhenEmpty && (value === '' || value === 0)) {
//         return <div key={key}></div>;
//       }

//-----------------------------------------------------------------
export const ObjectTable = ({
  data,
  columns,
  noSider = false,
  compact = false,
  silentWhenEmpty = false,
  showHidden = false,
}) => {
  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;
  const id = calcValue(data, idCol);
  if (!id && !idCol.function) return <div className="warning">The id column does not have an accessor function</div>;

  return (
    <div className="at-body">
      {columns.map((column, index) => {
        const value = calcValue(data, column);

        if (column.hidden && !showHidden) return null;
        if (value === '' && silentWhenEmpty) return null;

        const cn = 'at-row ' + (noSider ? 'ot-row-nosider' : 'ot-row' + (compact ? '-compact' : ''));
        const name = column.name || column.selector;
        const type = column.type || 'string';
        const displayName = compact ? name : name.substr(0, 8);
        const fmtValue = formatFieldByType(type, value, false);
        return (
          <div key={id + '_' + column.selector} className={cn}>
            {noSider ? null : <ObjectTableSider>{displayName}:</ObjectTableSider>}
            {noSider || compact ? null : <div></div>}
            <TableColumn editable={column.editable} noSider={noSider} compact={compact}>
              <Editable
                editable={column.editable}
                fieldValue={fmtValue}
                fieldName={column.selector}
                placeholder={column.selector}
                onValidate={column.onValidate}
              />
            </TableColumn>
          </div>
        );
      })}
    </div>
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
