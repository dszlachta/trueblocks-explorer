/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from './SettingsSystems';

//----------------------------------------------------------------------------
// auto-generate: schema
export const systemsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Status',
    selector: 'status',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Subsystem',
    selector: 'which',
    type: 'string',
  },
  {
    name: 'Description',
    selector: 'descr',
    type: 'string',
    hidden: true,
    align: 'wordwrap',
    searchable: true,
  },
  {
    name: 'API Provider',
    selector: 'apiProvider',
    type: 'string',
    editable: true,
  },
  {
    name: 'Host',
    selector: 'host',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Host Env',
    selector: 'environ',
    type: 'string',
  },
  {
    name: 'RPC Provider',
    selector: 'rpcProvider',
    type: 'string',
    editable: true,
  },
  {
    name: 'Trace Provider',
    selector: 'traceProvider',
    type: 'string',
    hidden: true,
    editable: true,
  },
  {
    name: 'Balance Provider',
    selector: 'balanceProvider',
    type: 'string',
    hidden: true,
    editable: true,
  },
  {
    name: 'Cache Path',
    selector: 'cachePath',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Index Path',
    selector: 'indexPath',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Version',
    selector: 'version',
    type: 'string',
    hidden: true,
  },
];
// auto-generate: schema
