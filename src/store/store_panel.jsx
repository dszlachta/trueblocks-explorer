import { useContext } from 'react';
import GlobalContext from 'store';

//----------------------------------------------------------------------
export const panelDefault = {
  menu: false,
  content: true,
  status: true,
  help: false
};

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

