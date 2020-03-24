import { useContext } from 'react';
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
