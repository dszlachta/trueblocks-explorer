import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import GlobalContext from 'store';

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
