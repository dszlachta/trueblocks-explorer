/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from 'pages/Accounts/Accounts';

//----------------------------------------------------------------------------
// auto-generate: schema
export const accountsSchema = [
  {
    name: 'Basics',
    selector: 'separator0',
    type: 'separator',
  },
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    detail: 1,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Date/Block',
    selector: 'date',
    type: 'string',
    width: 2,
    editable: true,
    chart: 'range',
    underField: 'marker',
    onDisplay: getFieldValue,
  },
  {
    name: 'Marker',
    selector: 'marker',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Stat',
    selector: 'marker2',
    type: 'string',
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    width: 5,
    editable: true,
    chart: 'range',
    searchable: true,
    underField: 'fromName',
    onDisplay: getFieldValue,
  },
  {
    name: 'fromName',
    selector: 'fromName',
    type: 'string',
    detail: 2,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    width: 5,
    editable: true,
    chart: 'range',
    searchable: true,
    underField: 'toName',
    onDisplay: getFieldValue,
  },
  {
    name: 'toName',
    selector: 'toName',
    type: 'string',
    detail: 2,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'wei',
    editable: true,
    chart: 'domain',
    detail: 2,
  },
  {
    name: 'Ether',
    selector: 'ether',
    type: 'double',
    editable: true,
    chart: 'domain',
    detail: 1,
  },
  {
    name: 'Relevant Events',
    selector: 'separator4',
    type: 'separator',
    onDisplay: getFieldValue,
  },
  {
    name: 'Compressed Logs',
    selector: 'compressedLog',
    type: 'string',
    wide: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Input Data',
    selector: 'separator2',
    type: 'separator',
    editable: true,
  },
  {
    name: 'Compressed Tx',
    selector: 'compressedTx',
    type: 'string',
    wide: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Reconcilations',
    selector: 'separator1',
    type: 'separator',
  },
  {
    name: 'Asset',
    selector: 'statements.asset',
    type: 'string',
    width: 1,
    align: 'center',
    onDisplay: getFieldValue,
  },
  {
    name: 'Beg',
    selector: 'statements.begBal',
    type: 'value',
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Beg Diff',
    selector: 'statements.begBalDiff',
    type: 'value',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Total In',
    selector: 'statements.totalin',
    type: 'value',
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Income',
    selector: 'statements.inflow',
    type: 'value',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'I-Income',
    selector: 'statements.intInflow',
    type: 'value',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'S-Income',
    selector: 'statements.selfDestructInflow',
    type: 'value',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'M-Income',
    selector: 'statements.miningInflow',
    type: 'value',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'P-Income',
    selector: 'statements.prefundInflow',
    type: 'value',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Total Out',
    selector: 'statements.totalout',
    type: 'value',
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Spending',
    selector: 'statements.outflow',
    type: 'value',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'I-Spending',
    selector: 'statements.intOutflow',
    type: 'value',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'S-Spending',
    selector: 'statements.selfDestructOutflow',
    type: 'value',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Gas Cost',
    selector: 'statements.gasCostOutflow',
    type: 'value',
    chart: 'domain',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Ending',
    selector: 'statements.endBal',
    type: 'value',
    width: 2,
    chart: 'domain',
    onDisplay: getFieldValue,
  },
  {
    name: 'Calc',
    selector: 'statements.endBalCalc',
    type: 'value',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'End Diff',
    selector: 'statements.endBalDiff',
    type: 'value',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Type',
    selector: 'statements.reconciliationType',
    type: 'string',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Okay',
    selector: 'statements.reconciled',
    type: 'string',
    width: 1,
    align: 'center',
    onDisplay: getFieldValue,
  },
  {
    name: 'Details',
    selector: 'separator5',
    type: 'separator',
    detail: 1,
  },
  {
    name: 'Creations',
    selector: 'creations',
    type: 'string',
    detail: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Gas',
    selector: 'gas',
    type: 'gas',
    editable: true,
    detail: 1,
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
    editable: true,
    chart: 'domain',
    detail: 1,
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'wei',
    editable: true,
    detail: 1,
  },
  {
    name: 'Gas Cost (Eth)',
    selector: 'etherGasCost',
    type: 'ether',
    detail: 2,
  },
  {
    name: 'Age',
    selector: 'age',
    type: 'blknum',
    detail: 1,
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
    editable: true,
    detail: 1,
  },
  {
    name: 'Input',
    selector: 'input',
    type: 'string',
    editable: true,
    detail: 1,
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
    detail: 1,
  },
  {
    name: 'Error',
    selector: 'isError',
    type: 'string',
    isPill: true,
    detail: 1,
  },
  {
    name: 'All Details',
    selector: 'separator6',
    type: 'separator',
    detail: 2,
  },
  {
    name: 'Receipt',
    selector: 'receipt',
    type: 'CReceipt',
    detail: 2,
  },
  {
    name: 'Articulated Tx',
    selector: 'articulatedTx',
    type: 'CFunction',
    detail: 2,
    searchable: true,
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
    detail: 2,
  },
  {
    name: 'Events',
    selector: 'events',
    type: 'string',
    detail: 2,
  },
  {
    name: 'Function',
    selector: 'function',
    type: 'string',
    detail: 2,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
    editable: true,
    detail: 2,
  },
  {
    name: 'Blk',
    selector: 'blockNumber',
    type: 'blknum',
    editable: true,
    detail: 2,
  },
  {
    name: 'Tx',
    selector: 'transactionIndex',
    type: 'string',
    editable: true,
    detail: 2,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    editable: true,
    chart: 'range',
    detail: 2,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    editable: true,
    detail: 2,
    searchable: true,
  },
  {
    name: 'Nonce',
    selector: 'nonce',
    type: 'blknum',
    detail: 2,
  },
  {
    name: 'Internal',
    selector: 'internal',
    type: 'string',
    align: 'center',
    detail: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Date Short',
    selector: 'datesh',
    type: 'string',
    detail: 2,
  },
  {
    name: 'Time',
    selector: 'time',
    type: 'string',
    detail: 2,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
  
