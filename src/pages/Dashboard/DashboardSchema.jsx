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
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Route',
    selector: 'route',
    type: 'string',
  },
  {
    name: 'Count',
    selector: 'count',
    type: 'uint64',
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Custom',
    selector: 'custom',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string',
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
];
// auto-generate: schema
  