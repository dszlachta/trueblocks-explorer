/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */

import { getFieldValue } from 'pages/Explorer/ExplorerTraces'

//----------------------------------------------------------------------------
// auto-generate: schema
export const tracesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'blockHash',
    selector: 'blockHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'blockNumber',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'subtraces',
    selector: 'subtraces',
    type: 'uint64',
  },
  {
    name: 'traceAddress',
    selector: 'traceAddress',
    type: 'CStringArray',
    searchable: true,
  },
  {
    name: 'transactionHash',
    selector: 'transactionHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'transactionIndex',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'type',
    selector: 'type',
    type: 'string',
    searchable: true,
  },
  {
    name: 'error',
    selector: 'error',
    type: 'string',
  },
  {
    name: 'articulatedTrace',
    selector: 'articulatedTrace',
    type: 'CFunction',
    searchable: true,
  },
  {
    name: 'compressedTrace',
    selector: 'compressedTrace',
    type: 'string',
  },
  {
    name: 'action',
    selector: 'action',
    type: 'CTraceAction',
  },
  {
    name: 'result',
    selector: 'result',
    type: 'CTraceResult',
  },
];
// auto-generate: schema
  