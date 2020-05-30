import React from 'react';

import { defaultToggles, togglesReducer, useToggles } from './panel_store';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './status_store';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export {
  defaultToggles,
  togglesReducer,
  useToggles,
  statusDefault,
  statusReducer,
  useStatus,
  useStatusData,
  useStatusMeta,
};

//----------------------------------------------------------------------
//export function isVerbose() {
//  return false;
//}
//export const debug = true;

//-----------------------------------------------------------------
export function getPrimaryKey(columns) {
  const ret = columns.filter((c) => c.selector === 'id');
  return ret ? ret[0] : ret;
}

//-----------------------------------------------------------------
export function calcValue(record, column) {
  if (column.onDisplay) return column.onDisplay(record, column.selector);
  if (!record || record === undefined) return '';
  return record[column.selector];
}
