/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */

import { getFieldValue } from './ExplorerBlocks'

//----------------------------------------------------------------------------
// auto-generate: schema
export const blocksSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Parent Hash',
    selector: 'parentHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
  {
    name: 'Transactions',
    selector: 'transactions',
    type: 'CTransactionArray',
    align: 'wordwrap',
  },
  {
    name: 'Difficulty',
    selector: 'difficulty',
    type: 'uint64',
  },
  {
    name: 'Miner',
    selector: 'miner',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Gas Limit',
    selector: 'gasLimit',
    type: 'gas',
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
  },
  {
    name: 'Price',
    selector: 'price',
    type: 'double',
    decimals: 2,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Light',
    selector: 'light',
    type: 'bool',
  },
];
// auto-generate: schema
