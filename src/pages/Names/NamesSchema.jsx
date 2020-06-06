/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue, useFieldValue } from './Names';

//----------------------------------------------------------------------------
// auto-generate: schema
export const namesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
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
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    width: 2,
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
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    width: 2,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'First Appearance',
    selector: 'firstAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'isMonitored',
    selector: 'monitored',
    type: 'bool',
    width: 2,
    isPill: true,
    align: 'center',
    onDisplay: useFieldValue,
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    hidden: true,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
    hidden: true,
  },
];
// auto-generate: schema
