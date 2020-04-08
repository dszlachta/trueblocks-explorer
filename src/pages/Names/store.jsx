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
    width: 3,
    name: 'Group',
    selector: 'group',
    type: 'string',
  },
  {
    width: 6,
    name: 'Address',
    selector: 'address',
    type: 'address',
  },
  {
    width: 4,
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    width: 2,
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    align: 'center',
  },
  {
    width: 4,
    name: 'Source',
    selector: 'source',
    type: 'string',
  },
  {
    width: 2,
    name: 'Decimals',
    selector: 'decimals',
    type: 'number',
    align: 'center',
    hideZero: true,
  },
  {
    width: 4,
    name: 'Description',
    selector: 'description',
    type: 'string',
  },
];
