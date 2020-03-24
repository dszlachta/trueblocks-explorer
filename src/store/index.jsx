import React from 'react';
import { panelDefault, panelReducer, usePanels } from './store_panel';
import { statusDefault, statusReducer, useStatus } from './store_status';
import { projectsDefault, projectsReducer, useProjects } from './store_projects';
import { dashboardDefault, dashboardReducer, useDashboard } from './store_dashboard';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

export {
  panelDefault, panelReducer, usePanels,
  statusDefault, statusReducer, useStatus,
  projectsDefault, projectsReducer, useProjects,
  dashboardDefault, dashboardReducer, useDashboard,
};

//----------------------------------------------------------------------
export const usePage = () => {
  const parts = window.location.pathname.split('/');
  if (!parts[1] || parts[1] === '')
    parts[1] = 'dashboard';
  if (!parts[2])
    parts[2] = '';
  return { page: parts[1], subpage: parts[2] };
}

export const useMocks = () => {
  return false;
}