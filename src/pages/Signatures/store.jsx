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
    width: 1,
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
  },
  {
    width: 1,
    name: 'Type',
    selector: 'type',
    type: 'string',
    pill: true,
  },
  {
    width: 2,
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    width: 1,
    name: 'Signature',
    selector: 'signature',
    type: 'string',
  },
  {
    width: 2,
    name: 'Input Names',
    selector: 'input_names',
    type: 'string',
  },
  {
    width: 2,
    name: 'Output Names',
    selector: 'output_names',
    type: 'string',
  },
];
