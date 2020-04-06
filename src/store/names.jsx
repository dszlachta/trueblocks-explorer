import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext, { isVerbose } from "store";
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
  // localStorage.setItem('signaturesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useNames = () => {
  return useContext(GlobalContext).names;
}

//----------------------------------------------------------------------------
export const groupsSchema = [
  {
    name: 'Group',
    selector: 'group',
    sortable: true
  },
];

//----------------------------------------------------------------------------
export const namesSchema = [
  {
    name: 'Group',
    selector: 'group',
    sortable: true
  },
  {
    name: 'Address',
    selector: 'address',
    sortable: true
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    sortable: true
  },
  {
    name: 'Source',
    selector: 'source',
    sortable: true
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    sortable: true
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true
  },
]
