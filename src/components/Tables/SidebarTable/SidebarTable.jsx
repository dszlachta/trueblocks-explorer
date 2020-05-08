import React, { useState, useEffect } from 'react';

import { DataTable, ObjectTable } from 'components';
import { getPrimaryKey, calcValue } from 'store';

import './SidebarTable.css';

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

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const sidebarHandler = (action) => {
    console.log(action);
    const record_id = action.record_id;
    let record = data.filter((record) => {
      return record_id && calcValue(record, idCol) === record_id;
    });
    if (record) record = record[0];
    switch (action.type) {
      case 'row-changed':
        if (record) setSelectedRow(record);
        return;
      default:
        return;
    }
  };

  return (
    <div className="sidebar-table">
      <div className="st-left">
        <DataTable
          name={'appearancesTable'}
          data={data}
          columns={columns}
          title={'Account: '}
          search={true}
          searchFields={searchFields}
          pagination={true}
          paginationParts="title arrows"
          recordIcons={recordIcons}
          parentHandler={sidebarHandler}
        />
      </div>
      <div className="st-right">
        <div className="at-title" style={{ textAlign: 'center' }}>
          Transaction Detail
        </div>
        <ObjectTable data={selectedRow} columns={columns} showHidden={true} />
      </div>
    </div>
  );
};
