import React from 'react';
import PropTypes from 'prop-types';

import { panelDefault, panelReducer, usePanels } from './panel_store';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './status_store';
import { menusDefault, menusReducer, useMenus } from './menus_store';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export {
  panelDefault,
  panelReducer,
  usePanels,
  statusDefault,
  statusReducer,
  useStatus,
  useStatusData,
  useStatusMeta,
  menusDefault,
  menusReducer,
  useMenus,
};

//----------------------------------------------------------------------
export function isVerbose() {
  return false;
}
export const debug = true;
