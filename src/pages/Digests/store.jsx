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
  },
  {
    name: '# Addresses',
    selector: 'nAddresses',
    type: 'number',
  },
  {
    name: '# Appearances',
    selector: 'nAppearances',
    type: 'number',
    cn: 'apps',
  },
  {
    name: 'Start Block',
    selector: 'firstAppearance',
    type: 'number',
  },
  {
    name: 'Start TS',
    selector: 'firstTs',
    type: 'timestamp',
  },
  {
    name: 'End Block',
    selector: 'latestAppearance',
    type: 'number',
  },
  {
    name: 'End TS',
    selector: 'lastestTs',
    type: 'timestamp',
  },
  {
    name: 'Filename',
    selector: 'filename',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Index Size',
    selector: 'indexSizeBytes',
    type: 'filesize',
  },
  {
    name: 'Index Hash',
    selector: 'index_hash',
    type: 'hash',
    cn: 'hashes',
    align: 'center',
  },
  {
    name: 'Bloom Size',
    selector: 'bloomSizeBytes',
    type: 'filesize',
  },
  {
    name: 'Bloom Hash',
    selector: 'bloom_hash',
    type: 'hash',
    cn: 'hashes',
    align: 'center',
  },
];
