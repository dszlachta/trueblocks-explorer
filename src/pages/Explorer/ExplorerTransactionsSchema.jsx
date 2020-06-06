/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */

import { getFieldValue } from './ExplorerTransactions'

//----------------------------------------------------------------------------
// auto-generate: schema
export const transactionsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'Tx Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'Nonce',
    selector: 'nonce',
    type: 'uint64',
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    searchable: true,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'wei',
  },
  {
    name: 'Gas',
    selector: 'gas',
    type: 'gas',
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'gas',
  },
  {
    name: 'Input',
    selector: 'input',
    type: 'string',
  },
  {
    name: 'isError',
    selector: 'isError',
    type: 'uint64',
  },
  {
    name: 'isInternal',
    selector: 'isInternal',
    type: 'uint64',
  },
  {
    name: 'Receipt',
    selector: 'receipt',
    type: 'CReceipt',
  },
  {
    name: 'Articulated Tx',
    selector: 'articulatedTx',
    type: 'CFunction',
    searchable: true,
  },
  {
    name: 'Compressed Tx',
    selector: 'compressedTx',
    type: 'string',
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
  },
];
// auto-generate: schema
