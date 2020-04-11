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
  options = {
    countArrays: true,
    idField: 'id',
  },
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
              <Editable
                editable={editable}
                record_id={record_id}
                fieldValue={value}
                fieldName={fieldName}
                placeholder={fieldName}
                onValidate={field.onValidate}
              />
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
        const displayName = (field.name || fieldName).substr(0, 5);
        const record_id = 0; //data[options.idField]; // may be empty

        const found = columns.filter((item) => item.selector === 'id');
        const id = found && found.function ? found.function(data) : '';
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
                onValidate={field.onValidate}
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
export const defaultObjFields = {
  id: { hidden: !isVerbose() },
  deleted: { type: 'bool', hidden: !isVerbose() },
  route: { hidden: !isVerbose() },
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
