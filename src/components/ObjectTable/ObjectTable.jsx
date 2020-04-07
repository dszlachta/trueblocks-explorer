import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { isVerbose } from 'store';
import { Editable } from 'components';
import { formatFieldByType } from 'components/utils';

import './ObjectTable.css';

//---------------------------------------------------------------
export const ObjectTable = ({
  data,
  fields = defaultObjFields,
  options = defObjTableOptions,
  updateFunc = null,
  fieldList,
}) => {
  return (
    <div className="object-table">
      {Object.keys(fields).map((fieldName) => {
        const field = fields[fieldName];

        if (field.hidden) return true;

        const type = field.type || 'string';
        const value = formatFieldByType(type, data[fieldName], options.countArrays);
        const editable = field.editable;
        const displayName = field.name || fieldName;
        const record_id = data[options.idField]; // may be empty
        return (
          <Fragment key={fieldName}>
            <ObjectTableSider>
              {displayName}:{editable}
            </ObjectTableSider>
            <TableColumn editable={editable} options={options}>
              {editable ? (
                <Editable
                  className="object-table-cell-inner"
                  record_id={record_id}
                  fieldValue={value}
                  fieldName={fieldName}
                  placeholder={fieldName}
                  onAccept={updateFunc}
                  onValidate={field.onValidate}
                />
              ) : (
                <>{value}</>
              )}
            </TableColumn>
          </Fragment>
        );
      })}
    </div>
  );
};

//---------------------------------------------------------------
export const ObjectTable2 = ({ data, fieldList }) => {
  return (
    <div className="object-table">
      {fieldList.map((field) => {
        const fieldName = field.selector;
        if (field.hidden) return true;

        const type = field.type || 'string';
        const value = formatFieldByType(type, data[fieldName], false); //options.countArrays);
        const editable = field.editable;
        const displayName = field.name || fieldName;
        const record_id = 0; //data[options.idField]; // may be empty

        return (
          <Fragment key={fieldName}>
            <ObjectTableSider>
              {displayName}:{editable}
            </ObjectTableSider>
            <TableColumn editable={editable}>
              {' '}
              {/*options={options}>*/}
              {editable ? (
                <Editable
                  className="object-table-cell-inner"
                  record_id={record_id}
                  fieldValue={value}
                  fieldName={fieldName}
                  placeholder={fieldName}
                  // onAccept={updateFunc}
                  onValidate={field.onValidate}
                />
              ) : (
                <>{value}</>
              )}
            </TableColumn>
          </Fragment>
        );
      })}
    </div>
  );
};

//---------------------------------------------------------------
const ObjectTableSider = ({ children }) => {
  return (
    <>
      <div className="object-table-sider"></div>
      <div className="object-table-sider" align="right">
        {children}
      </div>
      <div className="object-table-sider"></div>
    </> //
  );
};

//---------------------------------------------------------------
export const defaultObjFields = {
  id: { hidden: !isVerbose() },
  deleted: { type: 'bool', hidden: !isVerbose() },
  route: { hidden: !isVerbose() },
};
//sizeInBytes: { type: 'filesize', name: 'size' },

//----------------------------------------------------
export const TableColumn = ({ editable = false, options = defColumnOptions, children }) => {
  let cn = 'table-column ' + options.innerClassName + (editable ? ' object-table-cell-editable' : '');
  return (
    <>
      {options.padCols ? <div className="table-column"></div> : <></>}
      <div className={cn} align="left">
        {children}
      </div>
      {options.padCols ? <div className="table-column"></div> : <></>}
    </> //
  );
};

//---------------------------------------------------------------
export const defColumnOptions = {
  innerClassName: 'object-table-cell-inner',
  padCols: true,
};

//---------------------------------------------------------------
export const defaultTableOptions = {
  countArrays: true,
  idField: 'id',
  padCols: true,
};

export const defObjTableOptions = defaultTableOptions;
