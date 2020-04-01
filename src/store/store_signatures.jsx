import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const signaturesDefault = [
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  }
];

export const known = [
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  }
];

export const regular = [
  {
    name: 'data2_add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'data2_allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'data2_approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
  //console.log(action);
  let ret = state;
  switch (action.type) {
    case 'data':
      //ret = action.payload;
      break;
    default:
      // do nothing
  }
  // TODO(tjayrush): this does not write to the back end
  // localStorage.setItem('signaturesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useSignatures = () => {
  return useContext(GlobalContext).signatures;
};

//----------------------------------------------------------------------------
export const signatureSchema = [
  {
    name: 'Encoding',
    selector: 'encoding',
    sortable: true
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: 'Type',
    selector: 'type',
    sortable: true
  },
  {
    name: 'Signature',
    selector: 'signature',
    sortable: true
  },
  // {
  //   name: 'Inputs',
  //   selector: 'inputs',
  //   sortable: true
  // },
  {
    name: 'Input Names',
    selector: 'input_names',
    sortable: true
  },
  // {
  //   name: 'Outputs',
  //   selector: 'outputs',
  //   sortable: true
  // },
  {
    name: 'Output Names',
    selector: 'output_names',
    sortable: true
  }
];
