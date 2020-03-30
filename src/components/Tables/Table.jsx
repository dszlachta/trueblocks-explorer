import React from 'react';

import "./Table.css"

//----------------------------------------------------
export const TableColumn = ({ editable = false, options = defColumnOptions, children }) => {

  let cn = 'table-column ' + options.innerClassName + (editable ? ' editable-col' : '');
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
  innerClassName: 'inner-col',
  padCols: true,
}

//---------------------------------------------------------------
export const defaultTableOptions = {
  countArrays: true,
  idField: 'id',
  padCols: true,
}
