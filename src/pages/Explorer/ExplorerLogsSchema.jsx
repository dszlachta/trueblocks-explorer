/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */

import { getFieldValue } from 'pages/Explorer/ExplorerLogs'

//----------------------------------------------------------------------------
// auto-generate: schema
export const logsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
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
    searchable: true,
  },
  {
    name: 'Data',
    selector: 'data',
    type: 'string',
  },
  {
    name: 'Log Index',
    selector: 'logIndex',
    type: 'blknum',
  },
  {
    name: 'Removed',
    selector: 'removed',
    type: 'bool',
  },
  {
    name: 'Topics',
    selector: 'topics',
    type: 'CTopicArray',
    searchable: true,
  },
  {
    name: 'Articulated Log',
    selector: 'articulatedLog',
    type: 'CFunction',
    searchable: true,
  },
  {
    name: 'Compressed Log',
    selector: 'compressedLog',
    type: 'string',
  },
  {
    name: 'Transaction Hash',
    selector: 'transactionHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Tx Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'Tx Log Index',
    selector: 'transactionLogIndex',
    type: 'blknum',
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    searchable: true,
  },
];
// auto-generate: schema
  