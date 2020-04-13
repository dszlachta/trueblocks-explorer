import React, { Fragment } from 'react';

import { Editable } from 'components';
import { formatFieldByType } from 'components/utils';
import { calcValue } from 'store';

import './ObjectTable.css';

//-----------------------------------------------------------------
export const ObjectTable = ({ data, columns }) => {
  return (
    <div className="at-body ">
      {columns.map((column) => {
        const fieldName = column.selector;
        if (column.hidden) return true;

        const type = column.type || 'string';
        const vally = calcValue(data, column);
        const value = formatFieldByType(type, vally, false);
        const editable = column.editable;
        const displayName = (column.name || fieldName).substr(0, 5);
        const record_id = 0;

        const idCol = columns.filter((item) => item.selector === 'id');
        const id = idCol && idCol.function ? idCol.function(data) : '';
        return (
          <div key={fieldName + id + Math.random()} className="at-row ot-row">
            <ObjectTableSider>
              {displayName}:{editable}
            </ObjectTableSider>
            <div></div>
            <TableColumn editable={editable}>
              <Editable
                editable={editable}
                record_id={record_id}
                fieldValue={value}
                fieldName={fieldName}
                placeholder={fieldName}
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
export const TableColumn = ({ editable = false, children }) => {
  let cn = 'ot-cell' + (editable ? ' editable' : '');
  return (
    <div className={cn} align="left">
      {children}
    </div>
  );
};
