import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const statusDefault = {
  data: [{
    trueblocks_version: '',
    client_version: '',
    scraper_version: ''
  }],
  meta: {
    ripe: 0,
    unripe: 0,
    staging: 0,
    finalized: 0,
    client: 0
  }
};

//----------------------------------------------------------------------
export const statusReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    //case 'start':
    //  return {...state};
    case 'success':
      ret = action.payload;
      break;
    case 'toggle_api':
      ret.data[0].trueblocks_version = ret.data[0].trueblocks_version === '' ? 'x' : '';
      break;
    case 'fail':
      break;
    default:
      break;
  }
  // write whatever you need to put in localStorage here...
  return ret;
};

//----------------------------------------------------------------------
export const useStatus = () => {
  return useContext(GlobalContext).status;
}
export const useStatusData = () => {
  const { state } = useStatus();
  if (!state) {
    return statusDefault.data[0];
  }
  if (!state || !state.data) {
    return statusDefault.data[0];
  }
  if (!state || !state.data || !state.data[0]) {
    return statusDefault.data[0];
  }
  if (!state || !state.data || !state.data[0] || state.error) {
    return statusDefault.data[0];
  }
  return state.data[0];
}
export const useStatusMeta = () => {
  const { state } = useStatus();
  if (!state || !state.data || !state.data[0] || state.error)
    return statusDefault.meta;
  return state.meta;
}
