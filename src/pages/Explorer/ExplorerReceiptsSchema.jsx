/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */

import { getFieldValue } from 'pages/Explorer/ExplorerReceipts'

//----------------------------------------------------------------------------
// auto-generate: schema
export const receiptsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
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
    name: 'Contract Address',
    selector: 'contractAddress',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Cumulative Gas',
    selector: 'cumulativeGasUsed',
    type: 'wei',
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
    searchable: true,
  },
  {
    name: 'Logs',
    selector: 'logs',
    type: 'CLogEntryArray',
  },
  {
    name: 'Logs Bloom',
    selector: 'logsBloom',
    type: 'string',
  },
  {
    name: 'Root',
    selector: 'root',
    type: 'bytes32',
  },
  {
    name: 'Status',
    selector: 'status',
    type: 'uint32',
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Transaction Hash',
    selector: 'transactionHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Transaction Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
];
// auto-generate: schema
  