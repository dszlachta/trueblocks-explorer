import React from 'react';
import PropTypes from 'prop-types';

import { panelDefault, panelReducer, usePanels } from './panel_store';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './status_store';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export { panelDefault, panelReducer, usePanels, statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta };

//----------------------------------------------------------------------
export function isVerbose() {
  return false;
}
export const debug = true;

//-----------------------------------------------------------------
export function calcValue(record, column) {
  if (!column.function) return record[column.selector];
  return column.function(record);
}
