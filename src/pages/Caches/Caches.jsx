import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { getServerData1 } from 'components/utils';

import './Caches.css';

//---------------------------------------------------------------------------
export function Caches() {
  const { caches, dispatch } = useCaches();
  const [types] = useState(['all']);
  const [verbose] = useState(10);
  const [details] = useState(true);
  const [depth] = useState(0);
  const [modes] = useState(['abis', 'caches']);

  //  const source = currentPage().subpage;
  let query = 'modes=' + modes.map((mode) => mode).join('%20');
  query += '&types=' + types.map((type) => type).join('%20');
  query += details ? '&details' : '';
  query += depth ? '&depth=' + depth : '';
  query += verbose ? '&verbose=' + verbose : '';
  useEffect(() => {
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches });
    });
  }, [query, dispatch]);

  return (
    <div>
      <DataTable columns={cachesSchema} data={caches} title="" search={false} />
    </div>
  );
}

//----------------------------------------------------------------------
export const cachesDefault = [];

//----------------------------------------------------------------------
export const cachesReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('cachesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useCaches = () => {
  return useContext(GlobalContext).caches;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.path;
    case 'bytesPerFile':
      return record.nFiles ? record.sizeInBytes / record.nFiles : 0;
    default:
      break;
  }
}

//----------------------------------------------------------------------------
// auto-generate: schema
export const cachesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    width: 1,
  },
  {
    name: 'Location',
    selector: 'path',
    type: 'string',
    width: 2,
  },
  {
    name: '# Folders',
    selector: 'nFolders',
    type: 'uint64',
    width: 1,
  },
  {
    name: '# Files',
    selector: 'nFiles',
    type: 'uint64',
    width: 1,
  },
  {
    name: 'Total Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    width: 1,
  },
  {
    name: 'Average Size',
    selector: 'bytesPerFile',
    type: 'filesize',
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Valid',
    selector: 'is_valid',
    type: 'bool',
    hidden: true,
    width: 1,
  },
];
// auto-generate: schema
