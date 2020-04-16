import React, { Fragment } from 'react';

import { Editable } from 'components';
import { formatFieldByType } from 'components/utils';
import { calcValue } from 'store';

import './ObjectTable.css';

//-----------------------------------------------------------------
export const ObjectTable = ({ data, columns, noSider = false, compact = false, silentWhenEmpty = false }) => {
  return <div className="at-body">X</div>;

  // return (
  //   <div className="at-body">
  //     {columns.map((column) => {
  //       const fieldName = column.selector;
  //       if (column.hidden) return true;
  //       const type = column.type || 'string';
  //       const vally = calcValue(data, column);
  //       const value = formatFieldByType(type, vally, false);
  //       const editable = column.editable;
  //       let displayName = (column.name || fieldName).substr(0, 8);
  //       if (compact) displayName = column.name || fieldName;
  //       const record_id = 0;
  //       const idCol = columns.filter((item) => item.selector === 'id');
  //       const id = idCol && idCol.function ? (data ? idCol.function(data) : '') : '';
  //       const cn = 'at-row ' + (noSider ? 'ot-row-nosider' : 'ot-row' + (compact ? '-compact' : ''));
  //       const key = fieldName + id + Math.random();
  //       if (!value) {
  //         return <div key={key}></div>;
  //       }
  //       if (silentWhenEmpty && (value === '' || value === 0)) {
  //         return <div key={key}></div>;
  //       }
  //       return (
  //         <div key={key} className={cn}>
  //           {noSider ? <Fragment></Fragment> : <ObjectTableSider>{displayName}:</ObjectTableSider>}
  //           {noSider || compact ? <Fragment></Fragment> : <div></div>}
  //           <TableColumn editable={editable} noSider={noSider} compact={compact}>
  //             <Editable
  //               editable={editable}
  //               record_id={record_id}
  //               fieldValue={value}
  //               fieldName={fieldName}
  //               placeholder={fieldName}
  //               onValidate={column.onValidate}
  //             />
  //           </TableColumn>
  //         </div>
  //       );
  //     })}
  //   </div> //
  // );
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
