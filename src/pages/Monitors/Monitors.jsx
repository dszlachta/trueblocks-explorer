import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { getServerData, sortArray } from 'components/utils';
import './Monitors.css';

export const Monitors = () => {
  const { monitors, dispatch } = useMonitors();

  const query = 'modes=monitors&details&verbose=10';
  const url = 'http://localhost:8080/status';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      //      const d = theData && theData.caches && theData.caches[0] && theData.caches[0].items;
      dispatch({
        type: 'update',
        payload: sortArray(theData[0].caches[0].items, ['group', 'address'], ['asc', 'asc']),
      });
    });
  }, [query, dispatch]);

  const active = monitors.filter((monitor) => {
    return !monitor.deleted;
  });
  const paused = monitors.filter((monitor) => {
    return monitor.deleted;
  });
  return (
    <div>
      <DataTable
        data={active}
        columns={monitorsSchema}
        title="Active Monitors"
        search={true}
        searchFields={['address', 'name', 'group', 'symbol']}
        pagination={true}
      />
      <DataTable
        data={paused}
        columns={monitorsSchema}
        title="Paused Monitors"
        search={true}
        searchFields={['address', 'name', 'group', 'symbol']}
        pagination={true}
      />
    </div>
  );
};

//----------------------------------------------------------------------
export const monitorsDefault = [];

//----------------------------------------------------------------------
export const monitorsReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('otherState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useMonitors = () => {
  return useContext(GlobalContext).monitors;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.address;
    default:
      break;
  }
}

// auto-generate: schema
export const monitorsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Group',
    selector: 'group',
    type: 'string',
    width: 3,
    editable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    width: 6,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 4,
    editable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    width: 2,
    editable: true,
    align: 'center',
  },
  {
    name: 'Source',
    selector: 'source',
    type: 'string',
    hidden: true,
    width: 4,
    editable: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    width: 2,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    width: 4,
    editable: true,
    hidden: true,
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
    type: 'blknum',
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
  },
  {
    name: 'First Appearance',
    selector: 'firstAppearance',
    type: 'blknum',
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
  },
  {
    name: 'File Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
    isPill: true,
    // hidden: true,
  },
];
// auto-generate: schema
