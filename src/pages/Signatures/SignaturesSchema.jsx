/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from './Signatures';

//----------------------------------------------------------------------------
// auto-generate: schema
export const signaturesSchema = [
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
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
    width: 1,
    searchable: true,
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    width: 1,
    isPill: true,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 2,
    searchable: true,
  },
  {
    name: 'Signature',
    selector: 'signature',
    type: 'string',
    hidden: true,
    width: 2,
  },
  {
    name: 'Input Names',
    selector: 'inputs',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Output Names',
    selector: 'outputs',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Signature',
    selector: 'function',
    type: 'string',
    width: 6,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
    hidden: true,
  },
];
// auto-generate: schema
