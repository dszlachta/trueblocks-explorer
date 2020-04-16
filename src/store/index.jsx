import React from 'react';

import { panelDefault, panelReducer, usePanels } from './panel_store';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './status_store';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export { panelDefault, panelReducer, usePanels, statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta };

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
  if (!record || record === undefined) return '';
  if (!column.function) return record[column.selector];
  return column.function(record);
}
