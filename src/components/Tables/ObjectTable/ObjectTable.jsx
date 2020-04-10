import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { isVerbose } from 'store';
import { Editable } from 'components';
import { formatFieldByType } from 'components/utils';

import './ObjectTable.css';

//---------------------------------------------------------------
export const ObjectTable = ({
  data,
  columns = defaultObjFields,
  options = defObjTableOptions,
  updateFunc = null,
  displayFunc = null,
}) => {
  return (
    <div className="old-ot-body">
      {Object.keys(columns).map((fieldName) => {
        const field = columns[fieldName];

        if (field.hidden) return true;

        const type = field.type || 'string';
        const val = displayFunc && displayFunc(data, field);
        let value = val ? val : formatFieldByType(type, data[fieldName], options.countArrays);
        const editable = field.editable;
        const displayName = field.name || fieldName;
        const record_id = data[options.idField]; // may be empty
        return (
          <Fragment key={fieldName}>
            <ObjectTableSider>
              {displayName}:{editable}
            </ObjectTableSider>
            <div></div>
            <TableColumn editable={editable} options={options}>
              {editable ? (
                <Editable
                  className="ot-cell-inner"
                  record_id={record_id}
                  fieldValue={value}
                  fieldName={fieldName}
                  placeholder={fieldName}
                  onAccept={updateFunc}
                  onValidate={field.onValidate}
                />
              ) : (
                <Fragment>{value}</Fragment>
              )}
            </TableColumn>
          </Fragment>
        );
      })}
    </div>
  );
};

/*
 */
//-----------------------------------------------------------------
export const ObjectTable2 = ({ data, columns }) => {
  return (
    <div className="at-body ">
      {columns.map((field) => {
        const fieldName = field.selector;
        if (field.hidden) return true;

        const type = field.type || 'string';
        const value = formatFieldByType(type, data[fieldName], false); //options.countArrays);
        const editable = field.editable;
        const displayName = field.name || fieldName;
        const record_id = 0; //data[options.idField]; // may be empty

        return (
          <div key={fieldName} className="at-row ot-row">
            <ObjectTableSider>
              {displayName}:{editable}
            </ObjectTableSider>
            <div></div>
            <TableColumn editable={editable}>
              {editable ? (
                <Editable
                  record_id={record_id}
                  fieldValue={value}
                  fieldName={fieldName}
                  placeholder={fieldName}
                  onValidate={field.onValidate}
                />
              ) : (
                <Fragment>{value}</Fragment>
              )}
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
export const defaultObjFields = {
  id: { hidden: !isVerbose() },
  deleted: { type: 'bool', hidden: !isVerbose() },
  route: { hidden: !isVerbose() },
};

//-----------------------------------------------------------------
export const TableColumn = ({ editable = false, children }) => {
  let cn = 'ot-column' + (editable ? ' ot-cell-editable' : '');
  return (
    <div className={cn} align="left">
      {children}
    </div>
  );
};

//-----------------------------------------------------------------
export const defaultTableOptions = {
  countArrays: true,
  idField: 'id',
};

export const defObjTableOptions = defaultTableOptions;
