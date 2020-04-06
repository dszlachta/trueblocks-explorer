import React from 'react';

import "./Table.css"

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
    </>
  );

}

//---------------------------------------------------------------
export const defColumnOptions = {
  innerClassName: 'object-table-cell-inner',
  padCols: true,
}

//---------------------------------------------------------------
export const defaultTableOptions = {
  countArrays: true,
  idField: 'id',
  padCols: true,
}
