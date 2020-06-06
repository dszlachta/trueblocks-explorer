/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from './Caches';

//----------------------------------------------------------------------------
// auto-generate: schema
export const cachesSchema = [
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
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    width: 1,
    searchable: true,
  },
  {
    name: 'Location',
    selector: 'path',
    type: 'string',
    width: 2,
    searchable: true,
  },
  {
    name: '# Folders',
    selector: 'nFolders',
    type: 'uint64',
    width: 1,
  },
  {
    name: '# Files',
    selector: 'nFiles',
    type: 'uint64',
    width: 1,
  },
  {
    name: 'Total Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    width: 1,
  },
  {
    name: 'Average Size',
    selector: 'bytesPerFile',
    type: 'filesize',
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'perFolder',
    selector: 'perFolder',
    type: 'double',
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Valid',
    selector: 'is_valid',
    type: 'bool',
    hidden: true,
    width: 1,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
    hidden: true,
  },
];
// auto-generate: schema
