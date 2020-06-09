/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from 'pages/Settings/SettingsSystems';

export const settingsSchema = [{ name: 'Id', selector: 'id' }];

//------------------------------------------------------------------------------
// auto-generate: schema
export const schemasSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    name: 'Selector',
    selector: 'selector',
    type: 'string',
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
  },
  {
    name: 'Width',
    selector: 'width',
    type: 'uint64',
    align: 'center',
  },
  {
    name: 'Class Name',
    selector: 'cn',
    type: 'string',
    align: 'center',
  },
  {
    name: 'Alignment',
    selector: 'align',
    type: 'string',
    align: 'center',
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    align: 'center',
  },
  {
    name: 'Editable',
    selector: 'editable',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Hidden',
    selector: 'hidden',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Detail',
    selector: 'detail',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'HideEmpty',
    selector: 'hide_empty',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'isPill',
    selector: 'isPill',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Export',
    selector: 'export',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Sortable',
    selector: 'sortable',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Chart',
    selector: 'chart',
    type: 'string',
    align: 'center',
  },
  {
    name: 'underField',
    selector: 'underField',
    type: 'string',
  },
  {
    name: 'onDisplay',
    selector: 'onDisplay',
    type: 'function',
  },
  {
    name: 'onAccept',
    selector: 'onAccept',
    type: 'function',
  },
  {
    name: 'onValidate',
    selector: 'onValidate',
    type: 'function',
  },
];
// auto-generate: schema
