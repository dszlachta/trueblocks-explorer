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
    name: 'type',
    selector: 'type',
  },
  {
    name: 'nAddresses',
    selector: 'nAddresses',
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
  },
  {
    name: 'firstAppearance',
    selector: 'firstAppearance',
  },
  {
    name: 'latestAppearance',
    selector: 'latestAppearance',
  },
  {
    name: 'firstTs',
    selector: 'firstTs',
  },
  {
    name: 'lastestTs',
    selector: 'lastestTs',
  },
  {
    name: 'filename',
    selector: 'filename',
  },
  {
    name: 'indexSizeBytes',
    selector: 'indexSizeBytes',
  },
  {
    name: 'index_hash',
    selector: 'index_hash',
  },
  {
    name: 'bloomSizeBytes',
    selector: 'bloomSizeBytes',
  },
  {
    name: 'bloom_hash',
    selector: 'bloom_hash',
  },
];
