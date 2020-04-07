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
    name: 'Type',
    selector: 'type',
  },
  {
    name: 'Path',
    selector: 'path',
  },
  {
    name: 'nFiles',
    selector: 'nFiles',
  },
  {
    name: 'nFolders',
    selector: 'nFolders',
  },
  {
    name: 'sizeInBytes',
    selector: 'sizeInBytes',
  },
  {
    name: 'isValid',
    selector: 'is_valid',
  },
];
