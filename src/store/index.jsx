import React from 'react';
import PropTypes from 'prop-types';

import { panelDefault, panelReducer, usePanels } from './store_panel';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './store_status';
import { menusDefault, menusReducer, useMenus } from './store_menus';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export {
  panelDefault,
  panelReducer,
  usePanels,

  statusDefault,
  statusReducer,
  useStatus, useStatusData, useStatusMeta,

  menusDefault,
  menusReducer,
  useMenus
};

//----------------------------------------------------------------------
export function isVerbose() {
  return false;
}
export const debug = true;