import React from 'react';
import PropTypes from 'prop-types';

import { panelDefault, panelReducer, usePanels } from './store_panel';
import { statusDefault, statusReducer, useStatus, useStatusData, useStatusMeta } from './store_status';
import { projectsDefault, projectsReducer, useProjects } from './store_projects';
import { dashboardDefault, dashboardReducer, useDashboard } from './store_dashboard';
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
  useStatus,
  useStatusData,
  useStatusMeta,
  projectsDefault,
  projectsReducer,
  useProjects,
  dashboardDefault,
  dashboardReducer,
  useDashboard,
  menusDefault,
  menusReducer,
  useMenus
};

//----------------------------------------------------------------------
export const usePage = () => {
  const parts = window.location.pathname.split('/');
  const query = window.location.search.substr(1).split('&');
  const params = query.map((item) => {
    const p = item.split('=');
    return { name: p[0], value: p[1] };
  });
  if (parts.length < 2 || parts[1] === '') parts[1] = 'dashboard';
  if (parts.length < 3 || parts[2] === '') parts[2] = '';
  return { page: parts[1], subpage: parts[2], params: params };
};

//----------------------------------------------------------------------
export const useMocks = () => {
  return false;
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
