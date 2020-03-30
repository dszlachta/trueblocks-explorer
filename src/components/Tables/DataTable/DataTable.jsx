import React, { Fragment } from 'react';

import { verbose } from 'store';
import { Editable } from 'components'
import { TableColumn, defaultTableOptions } from '../Table';
import { formatFieldByType } from 'components/utils';

import "../Table.css";
import "./DataTable.css";

export const defDataTableOptions = { ...defaultTableOptions, padCols: false, innerClassName: 'dt-inner-col' }
//----------------------------------------------------
export const DataTable = ({ data, fields = defaultDataFields, options = defDataTableOptions }) => {

  let cnt = 0;
  return (
    <>
      <div key='dt' className="data-table">

        {Object.keys(fields).map((fieldName) => {
          return (
            <DataTableHeader key={'head-' + fieldName}>{fieldName}</DataTableHeader>
          );
        })}

        {data.map((item) => {
          const record_id = item[options.idField]; // may be empty
          let key = record_id + '_' + (cnt++) + '_';
          return (
            <Fragment key={key}>
              {Object.keys(fields).map((fieldName) => {
                //console.log(`---------- col ${fieldName} ------------`)
                const field = fields[fieldName];
                if (field.hidden)
                  return true;
                const type = field.type || 'string';
                const value = formatFieldByType(type, item[fieldName], false);
                const editable = field.editable;
                const displayName = field.name || fieldName;

                key = key + fieldName + '_';
                return (
                  <TableColumn key={key} options={options} editable={editable}>
                    {
                      editable
                        ?
                        <Editable
                          key={key + 'e'}
                          className='dt-inner-col'
                          record_id={record_id}
                          fieldValue={value}
                          fieldName={fieldName}
                          placeholder={fieldName}
                          onAccept={null}
                          onValidate={field.onValidate}
                        />
                        :
                        <>
                          {value}
                        </>
                    }
                  </TableColumn>
                );
              })}
            </Fragment>
          )
        })}
      </div>
    </>
  );
}

//----------------------------------------------------
const DataTableHeader = ({ children }) => {
  return (
    <div className="dt-header-col">
      {children}
    </div>
  );
}

//---------------------------------------------------------------
export const defaultDataFields = {
  id: { hidden: !verbose },
  sizeInBytes: { type: 'filesize', name: 'size' },
  deleted: { type: 'bool' }
}
