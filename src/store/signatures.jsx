import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const signaturesDefault = [];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
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
export const useSignatures = () => {
  return useContext(GlobalContext).signatures;
};

//----------------------------------------------------------------------------
export const signaturesSchema = [
  {
    width: 2,
    name: 'Encoding',
    selector: 'encoding',
    sortable: true,
  },
  {
    width: 1,
    name: 'Type',
    selector: 'type',
    sortable: true,
  },
  {
    width: 2,
    name: 'Name',
    // cn: 'special',
    selector: 'name',
    sortable: true,
  },
  {
    width: 1,
    name: 'Signature',
    selector: 'signature',
    sortable: true,
  },
  {
    width: 1,
    name: 'Input Names',
    selector: 'input_names',
    sortable: true,
  },
  {
    width: 1,
    // cn: 'special',
    name: 'Output Names',
    selector: 'output_names',
    sortable: true,
  },
];
