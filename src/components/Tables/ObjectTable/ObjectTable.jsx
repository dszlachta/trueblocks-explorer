import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import { verbose } from 'store';
import { Editable } from 'components'
import { TableColumn, defaultTableOptions } from '../Table';
import { formatFieldByType } from 'components/utils';

import "../Table.css";
import "./ObjectTable.css";

export const defObjTableOptions = defaultTableOptions;
//---------------------------------------------------------------
export const ObjectTable = ({ data, fields = defaultObjFields, options = defObjTableOptions, updateFunc = null }) => {
  return (
    <div className="object-table">
      {Object.keys(fields).map((fieldName) => {
        const field = fields[fieldName];

        if (field.hidden)
          return true;

        const type = field.type || 'string';
        const value = formatFieldByType(type, data[fieldName], options.countArrays);
        const editable = field.editable;
        const displayName = field.name || fieldName;
        const record_id = data[options.idField]; // may be empty
        return (
          <Fragment key={fieldName}>
            <ObjectTableSider>{displayName}:{editable}</ObjectTableSider>
            <TableColumn editable={editable} options={options}>
              {editable
                ?
                <Editable
                  className='inner-col'
                  record_id={record_id}
                  fieldValue={value}
                  fieldName={fieldName}
                  placeholder={fieldName}
                  onAccept={updateFunc}
                  onValidate={field.onValidate}
                /> :
                <>{ value }</>
              }
            </TableColumn>
          </Fragment>
        );
      })}
    </div>
  );
}

//---------------------------------------------------------------
const ObjectTableSider = ({ children }) => {
  return (
    <>
      <div className="table-sider-col"></div>
      <div className="table-sider-col" align='right'>
        {children}
      </div>
      <div className="table-sider-col"></div>
    </>
  );
}

//---------------------------------------------------------------
export const defaultObjFields = {
  id: { hidden: !verbose },
  deleted: { type: 'bool', hidden: !verbose },
  route: { hidden: !verbose },
  sizeInBytes: { type: 'filesize', name: 'size' },
}
