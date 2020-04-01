import React from 'react';
import PropTypes from 'prop-types';

import { panelDefault, panelReducer, usePanels } from './store_panel';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './store_status';
import { projectSchema, projectsDefault, projectsReducer, useProjects } from './store_projects';
import { signatureSchema, signaturesDefault, signaturesReducer, useSignatures } from './store_signatures';
import { dashboardSchema, dashboardDefault, dashboardReducer, useDashboard } from './store_dashboard';
import { menusDefault, menusReducer, useMenus } from './store_menus';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export {
  dashboardSchema,
  dashboardDefault,
  dashboardReducer,
  useDashboard,

  projectSchema,
  projectsDefault,
  projectsReducer,
  useProjects,
  
  signatureSchema,
  signaturesDefault,
  signaturesReducer,
  useSignatures,

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
export const handleClick = (e, dispatch, action) => {
  e.preventDefault();
  dispatch(action);
};

//----------------------------------------------------------------------
export const fetchURL = (url, setHelp) => {
  fetch(url)
    .then((r) => {
      if (r.status !== 200) throw new Error();
      return r.text();
    })
    .then((t) => {
      setHelp(t);
    })
    .catch((e) => {
      return setHelp('#### Error\nFailed to load: **' + url.replace(/http:\/\/localhost:8080\/help\//, '') + '**');
    });
};

//----------------------------------------------------------------------
export function isVerbose() {
  return false;
}
export const debug = true;