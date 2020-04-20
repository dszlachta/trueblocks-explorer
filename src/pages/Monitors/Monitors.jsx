import React from 'react';

import { currentPage } from 'components/utils';

export const Monitors = () => {
  return <div>{'Actual Monitors Page: ' + currentPage().page + ' ' + currentPage().subpage}</div>;
};

//----------------------------------------------------------------------
export const monitorsDefault = [];

//----------------------------------------------------------------------
export const monitorsReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('otherState', JSON.stringify(ret));
  return ret;
};

// auto-generate: schema
export const monitorsSchema = [
  {
    name: 'Block Number',
    selector: 'blocknumber',
    type: 'blknum',
  },
  {
    name: 'Trans Idx',
    selector: 'transactionindex',
    type: 'blknum',
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string',
  },
  {
    name: 'TimeStamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
  {
    name: 'From',
    selector: 'from',
    type: 'string',
  },
  {
    name: 'To',
    selector: 'to',
    type: 'string',
  },
  {
    name: 'Ether',
    selector: 'ether',
    type: 'string',
  },
  {
    name: 'EthGasPrice',
    selector: 'ethergasprice',
    type: 'gas',
  },
  {
    name: 'GasUsed',
    selector: 'gasused',
    type: 'gas',
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'string',
  },
  {
    name: 'isError',
    selector: 'iserror',
    type: 'bool',
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'string',
  },
  {
    name: 'CompressedTx',
    selector: 'compressedTx',
    type: 'string',
  },
];
// auto-generate: schema
