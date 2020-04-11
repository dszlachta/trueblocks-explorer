import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const digestsDefault = [];

//----------------------------------------------------------------------
export const digestsReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('digestsState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useDigests = () => {
  return useContext(GlobalContext).digests;
};

//----------------------------------------------------------------------------
export const digestsSchema = [
  {
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Block Range',
    selector: 'blockRange',
    type: 'string',
    function: (rec) => {
      return rec.filename.replace('.bin', '');
    },
    align: 'center',
  },
  {
    name: 'Block Span',
    selector: 'blockSpan',
    type: 'number',
    function: (rec) => {
      return rec.latestAppearance - rec.firstAppearance + 1;
    },
    decimals: 0,
  },
  {
    name: 'Seconds',
    selector: 'seconds',
    type: 'number',
    function: (rec) => {
      return rec.latestTs - rec.firstTs + 1;
    },
    decimals: 0,
  },
  {
    name: 'Start Block',
    selector: 'firstAppearance',
    type: 'number',
    hidden: true,
  },
  {
    name: 'End Block',
    selector: 'latestAppearance',
    type: 'number',
    hidden: true,
  },
  {
    name: 'Addresses',
    selector: 'nAddresses',
    type: 'number',
  },
  {
    name: 'Appearances',
    selector: 'nAppearances',
    type: 'number',
    cn: 'apps',
  },
  {
    name: 'Apps/Address',
    selector: 'function',
    type: 'number',
    function: (record) => {
      return record.nAddresses === 0 ? '-' : record.nAppearances / record.nAddresses;
    },
    decimals: 5,
  },
  {
    name: 'Apps/Block',
    selector: 'function',
    type: 'number',
    function: (record) => {
      const n = record.latestAppearance - record.firstAppearance + 1;
      return n === 0 ? '-' : record.nAppearances / n;
    },
    decimals: 5,
  },
  {
    name: 'Start TS',
    selector: 'firstTs',
    type: 'timestamp',
    hidden: true,
  },
  {
    name: 'End TS',
    selector: 'latestTs',
    type: 'timestamp',
    hidden: true,
  },
  {
    name: 'Filename',
    selector: 'filename',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Chunk Size',
    selector: 'indexSizeBytes',
    type: 'filesize',
  },
  {
    name: 'Bloom Size',
    selector: 'bloomSizeBytes',
    type: 'filesize',
  },
  {
    name: 'Chunk Hash',
    selector: 'index_hash',
    type: 'shorthash',
    cn: 'hashes',
    align: 'center',
  },
  {
    name: 'Bloom Hash',
    selector: 'bloom_hash',
    type: 'shorthash',
    cn: 'hashes',
    align: 'center',
  },
];
