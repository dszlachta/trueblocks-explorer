import React, { useState, useEffect } from 'react';

import { DataTable, ObjectTable } from 'components';
import { stateFromStorage } from 'components/utils';
import { getPrimaryKey, calcValue } from 'store';

import './SidebarTable.css';
import { handleClick } from 'components/utils';

export const SidebarTable = ({
  name,
  data,
  columns,
  title,
  search,
  searchFields,
  pagination,
  recordIcons,
  parentHandler,
}) => {
  const [selectedRow, setSelectedRow] = useState({});
  const [showHidden, setShowHidden] = useState(Number(stateFromStorage('sideTableDetail', 0)));

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const sidebarHandler = (action) => {
    //console.log('sidebarHandler: ', action);
    const record_id = action.record_id;
    let record = data.filter((record) => {
      return record_id && calcValue(record, idCol) === record_id;
    });
    if (record) record = record[0];
    switch (action.type) {
      case 'row-changed':
        if (record) setSelectedRow(record);
        if (parentHandler) parentHandler(action);
        return;
      case 'toggle-detail':
        setShowHidden(!showHidden);
        localStorage.setItem('sideTableDetail', showHidden ? 0 : 1);
        break;
      default:
        if (parentHandler) parentHandler(action);
        break;
    }
  };

  return (
    <div className="sidebar-table">
      <div className="st-left">
        <DataTable
          name={name}
          data={data}
          columns={columns}
          title={title}
          search={search}
          searchFields={searchFields}
          pagination={pagination}
          paginationParts=""
          recordIcons={recordIcons}
          parentHandler={sidebarHandler}
        />
      </div>
      <div className="st-right">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr 1fr' }}>
          <div></div>
          <div className="at-title" style={{ textAlign: 'center' }}>
            Transaction Detail
          </div>
          <div onClick={(e) => handleClick(e, sidebarHandler, { type: 'toggle-detail' })}>
            {'detail: ' + (showHidden ? 'shown' : 'hidden')}
          </div>
        </div>
        <ObjectTable
          name={name}
          cn="st"
          data={selectedRow}
          columns={columns}
          showDetail={true}
          showHidden={showHidden}
        />
      </div>
    </div>
  );
};
