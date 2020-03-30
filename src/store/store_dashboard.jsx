import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext, { verbose } from 'store';
import { dashboardMock } from './store_dashboard_json.jsx';
export { dashboardMock as dashboardDefault };

//----------------------------------------------------------------------
export const dashboardReducer = (state, action) => {
  let ret = state;
  // switch (action.type) {
  //   //case 'start':
  //   //  return {...state};
  //   case 'success':
  //     ret = action.payload;
  //     break;
  //   case 'toggle':
  //     console.log(ret.find(i => i.id === action.id))
  //     ret = toggleProject(ret, action.id);
  //     console.log(ret.find(i => i.id === action.id))
  //     break;
  //   case 'fail':
  //     break;
  //   default:
  //     break;
  // }
  // // write whatever you need to put in localStorage here...
  return ret;
};

//----------------------------------------------------------------------
export const useDashboard = () => {
  return useContext(GlobalContext).dashboard;
}
