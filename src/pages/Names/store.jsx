import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext, { isVerbose } from 'store';
import { notEmpty } from 'components/utils';

//----------------------------------------------------------------------
export const namesDefault = [];

//----------------------------------------------------------------------
export const namesReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('namesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useNames = () => {
  return useContext(GlobalContext).names;
};

//----------------------------------------------------------------------------
export const groupsSchema = [
  {
    name: 'Group',
    selector: 'group',
  },
];

//----------------------------------------------------------------------------
export const namesSchema = [
  {
    name: 'Group',
    selector: 'group',
  },
  {
    name: 'Address',
    selector: 'address',
  },
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Symbol',
    selector: 'symbol',
  },
  {
    name: 'Source',
    selector: 'source',
  },
  {
    name: 'Decimals',
    selector: 'decimals',
  },
  {
    name: 'Description',
    selector: 'description',
  },
];
