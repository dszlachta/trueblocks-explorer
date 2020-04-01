import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext, { isVerbose } from 'store';
import { dashboardConfig } from './store_dashboard_json.jsx';
export { dashboardConfig as dashboardDefault };

//----------------------------------------------------------------------
export const dashboardReducer = (state, action) => {
  return state;  // There are no actions that change the dashboard state
};

//----------------------------------------------------------------------
export const useDashboard = () => {
  return useContext(GlobalContext).dashboard;
}

//----------------------------------------------------------------------
export const dashboardSchema = {
  id: { hidden: !isVerbose() },
  name: { hidden: !isVerbose() },
  route: { hidden: !isVerbose() },
  count: { type: 'number' },
  sizeInBytes: { name: 'size', type: 'filesize' },
  custom: { name: 'shared' },
  date: { type: 'date' },
  timestamp: {}
};