/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from './Monitors';

//----------------------------------------------------------------------------
// auto-generate: schema
export const monitorsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    width: 3,
    editable: true,
    searchable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    width: 6,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 7,
    editable: true,
    searchable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    hidden: true,
    width: 4,
    editable: true,
    align: 'center',
    searchable: true,
  },
  {
    name: 'Source',
    selector: 'source',
    type: 'string',
    hidden: true,
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    hidden: true,
    width: 3,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    hidden: true,
    width: 8,
    editable: true,
    searchable: true,
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
    hidden: true,
    width: 2,
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
    hidden: true,
    width: 2,
  },
  {
    name: 'Count',
    selector: 'nAppearances',
    type: 'blknum',
    width: 2,
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
    hidden: true,
    width: 2,
  },
  {
    name: 'First Block',
    selector: 'firstAppearance',
    type: 'blknum',
    width: 2,
  },
  {
    name: 'Last Block',
    selector: 'latestAppearance',
    type: 'blknum',
    width: 2,
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
    width: 2,
  },
  {
    name: 'Monitor Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    width: 2,
  },
  {
    name: 'Tx Cache Size',
    selector: 'sizeInBytes2',
    type: 'filesize',
    width: 2,
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
    hidden: true,
    width: 2,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
    hidden: true,
  },
];
// auto-generate: schema
