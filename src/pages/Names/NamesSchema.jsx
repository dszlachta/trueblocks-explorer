/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue, useFieldValue } from 'pages/Names/Names';

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
    width: 4,
    editable: true,
    onDisplay: getFieldValue,
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
    onDisplay: getFieldValue,
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
    type: 'blknum',
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
  },
  {
    name: 'First Appearance',
    selector: 'firstAppearance',
    type: 'blknum',
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
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
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
  