import React, { useContext } from 'react';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({});
export default GlobalContext;

//----------------------------------------------------------------------
export const useGlobals = () => {
  return useContext(GlobalContext);
}

//----------------------------------------------------------------------
export const panelDefault = {
  menu: false,
  content: true,
  status: true,
  help: false
};

//----------------------------------------------------------------------
export const loadingReducer = (state, action) => {
  switch (action.type) {
    case 'on':
      return true;
    case 'off':
      return false;
    default: return state;
  }
}

//----------------------------------------------------------------------
export const useLoading = () => {
  return useContext(GlobalContext).loading;
}

//----------------------------------------------------------------------
export const panelReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'menu':
      ret = { ...state, menu: !state.menu };
      break;
    case 'content':
      ret = { ...state, content: !state.content };
      break;
    case 'status':
      ret = { ...state, status: !state.status };
      break;
    case 'help':
      ret = { ...state, help: !state.help };
      break;
    case 'reset':
      ret = panelDefault;
      break;
    default:
      break;
  }
  localStorage.setItem('panelState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const usePanels = () => {
  return useContext(GlobalContext).panels;
}

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
    case 'start':
      return {...state, loading: true};
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

//----------------------------------------------------------------------
export const usePage = () => {
  const parts = window.location.pathname.split('/');
  if (!parts[1] || parts[1] === '')
    parts[1] = 'dashboard';
  if (!parts[2])
    parts[2] = '';
  return { page: parts[1], subpage: parts[2] };
}