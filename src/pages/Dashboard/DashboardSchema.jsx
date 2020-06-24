/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from 'pages/Dashboard/Dashboard';

//----------------------------------------------------------------------------
// auto-generate: schema
export const dashboardSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 1,
    searchable: true,
  },
  {
    name: 'Route',
    selector: 'route',
    type: 'string',
    width: 1,
  },
  {
    name: 'Count',
    selector: 'count',
    type: 'uint64',
    width: 1,
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    width: 1,
  },
  {
    name: 'Custom',
    selector: 'custom',
    type: 'string',
    width: 1,
    searchable: true,
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string',
    width: 1,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    width: 1,
  },
];
// auto-generate: schema
  