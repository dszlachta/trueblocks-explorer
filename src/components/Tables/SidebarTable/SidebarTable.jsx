import React, { useState } from 'react';

import { DataTable, ObjectTable } from 'components';
import { stateFromStorage } from 'components/utils';
import { getPrimaryKey, calcValue } from 'store';
import { getIcon } from 'pages/utils';

import './SidebarTable.css';
import { handleClick } from 'components/utils';

export const SidebarTable = ({
  tableName,
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
  const [detailLevel, setDetailLevel] = useState(Number(stateFromStorage('sideTableDetail', 0)));

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const sidebarHandler = (action) => {
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
        setDetailLevel((detailLevel + 1) % 3);
        localStorage.setItem('sideTableDetail', detailLevel);
        if (parentHandler) parentHandler(action);
        break;
      case 'interact':
        alert('Interact with the contract ' + JSON.stringify(action.payload));
        break;
      default:
        if (parentHandler) parentHandler(action);
        break;
    }
  };

  function imageExists(image_url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status !== 404;
  }

  let imageUrl = 'http://localhost:3002/assets/icons/' + selectedRow.to + '.png';
  const exists = imageExists(imageUrl);
  imageUrl = exists ? imageUrl : 'http://localhost:3002/assets/icons/blank.png';
  let interact = exists ? getIcon('y', 'interactwith', true, true, 24) : <></>;
  const detailIcon = getIcon('x', (detailLevel === 0 ? 'toggleleft' : (detailLevel === 1 ? 'togglecenter' : 'toggleright')), true, true, 24);

  return (
    <div className="sidebar-table">
      <div className="st-left">
        <DataTable
          tableName={tableName}
          data={data}
          columns={columns}
          title={title}
          search={search}
          searchFields={searchFields}
          pagination={pagination}
          paginationParts=""
          recordIcons={recordIcons}
          showHidden={Number(stateFromStorage('showHidden', false))}
          detailLevel={detailLevel}
          parentHandler={sidebarHandler}
        />
      </div>
      <div></div>
      <div className="st-right">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr 1fr', alignItems: 'end' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img height="50" alt={selectedRow.to} src={imageUrl} />
            <div onClick={(e) => handleClick(e, sidebarHandler, { type: 'interact', payload: selectedRow['toName'] })}>
              {interact}
            </div>
          </div>
          <div className="at-title" style={{ textAlign: 'center' }}>
            Transaction Detail
          </div>
          <div
            style={{ textAlign: 'right', paddingRight: '8px', alignItems: 'end' }}
            onClick={(e) => handleClick(e, sidebarHandler, { type: 'toggle-detail' })}
          >
            <div>{detailIcon}</div>
          </div>
        </div>
        <ObjectTable
          tableName={tableName}
          cn="st"
          data={selectedRow}
          columns={columns}
          showHidden={Number(stateFromStorage('showHidden', false))}
          detailLevel={detailLevel}
        />
      </div>
    </div>
  );
};
