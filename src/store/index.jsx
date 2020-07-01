import React from 'react';

import { defaultToggles, togglesReducer, useToggles } from './panel_store';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta, useSystemCheck } from './status_store';

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
  useSystemCheck,
};

//-----------------------------------------------------------------
export function getPrimaryKey(columns) {
  const ret = columns.filter((c) => c.selector === 'id');
  return ret ? ret[0] : ret;
}

//-----------------------------------------------------------------
export function getAltIconKey(columns) {
  const ret = columns.filter((c) => c.selector === 'monitored');
  if (ret) return ret;
  return columns.filter((c) => c.selector === 'deleted');
}

//-----------------------------------------------------------------
export function calcValue(record, column) {
  if (!column) return '';
  if (column.onDisplay) return column.onDisplay(record, column.selector);
  if (!record || record === undefined) return '';
  return record[column.selector];
}

//-----------------------------------------------------------------
export function exportValue(record, column) {
  if (!column) return '';
  if (!record[column.selector] || record[column.selector] === '') return calcValue(record, column);
  return record[column.selector];
}
