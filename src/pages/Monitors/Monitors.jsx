import React from 'react';

import { currentPage } from 'components/utils';

export const Monitors = () => {
  return <div>{'Actual Monitors Page: ' + currentPage().page + ' ' + currentPage().subpage}</div>;
};

// auto-generate: schema
export const monitorsSchema = [
  {
    name: 'Block Number',
    selector: 'blocknumber',
    type: 'number'
  },
  {
    name: 'Trans Idx',
    selector: 'transactionindex',
    type: 'number'
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string'
  },
  {
    name: 'TimeStamp',
    selector: 'timestamp',
    type: 'timestamp'
  },
  {
    name: 'From',
    selector: 'from',
    type: 'string'
  },
  {
    name: 'To',
    selector: 'to',
    type: 'string'
  },
  {
    name: 'Ether',
    selector: 'ether',
    type: 'string'
  },
  {
    name: 'EthGasPrice',
    selector: 'ethergasprice',
    type: 'number'
  },
  {
    name: 'GasUsed',
    selector: 'gasused',
    type: 'number'
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'string'
  },
  {
    name: 'isError',
    selector: 'iserror',
    type: 'bool'
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'string'
  },
  {
    name: 'CompressedTx',
    selector: 'compressedtx',
    type: 'object'
  }
];
// auto-generate: schema
