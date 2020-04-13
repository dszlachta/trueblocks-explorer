import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { currentPage, getServerData1 } from 'components/utils';

import './Caches.css';

//---------------------------------------------------------------------------
export function Caches() {
  const { caches, dispatch } = useCaches();
  const [types, setTypes] = useState(['all']);
  const [verbose, setVerbose] = useState(10);
  const [details, setDetails] = useState(true);
  const [depth, setDepth] = useState(0);
  const [modes, setModes] = useState(['abis', 'caches']);

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
  }, [query]);

  const typeOpts = ['blocks', 'transactions', 'traces', 'slurps', 'prices', 'all'];
  return (
    <div>
      <div>{query}</div>
      <select
        onChange={(e) => {
          setTypes([e.target.value]);
          if (e.target.value !== 'all') setDepth(depth + 1);
          else setDepth(0);
        }}
        value={types}
      >
        types:{' '}
        {typeOpts.map((opt) => {
          return <option>{opt}</option>;
        })}
      </select>
      <select onChange={(e) => setVerbose([e.target.value])} value={verbose}>
        verbose:
        <option>{3}</option>
        <option>{10}</option>
      </select>
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
export const cachesSchema = [
  {
    width: 1,
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
  },
  {
    width: 2,
    name: 'Location',
    selector: 'path',
    type: 'string',
  },
  {
    width: 1,
    name: '# Folders',
    selector: 'nFolders',
    type: 'number',
  },
  {
    width: 1,
    name: '# Files',
    selector: 'nFiles',
    type: 'number',
  },
  {
    width: 1,
    name: 'Total Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    width: 1,
    name: 'Average Size',
    selector: 'sizeInBytes/nFiles',
    type: 'filesize-calc',
  },
  {
    width: 1,
    name: 'Valid',
    selector: 'is_valid',
    type: 'bool',
    hidden: true,
  },
];
