import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Mousetrap from 'mousetrap';

import { PageHeader, PageFooter, PageContent } from 'page-parts';
import GlobalContext, {
  panelDefault,
  panelReducer,
  dashboardDefault,
  dashboardReducer,
  projectsDefault,
  projectsReducer,
  statusDefault,
  statusReducer,
  menusDefault,
  menusReducer
} from 'store';
import 'App.css';

//-----------------------------------------------------
function App() {
  const [panelState, panelDispatch] = useReducer(panelReducer, stateFromStorage('panelState', panelDefault));
  const [dashboardState, dashboardDispatch] = useReducer(dashboardReducer, dashboardDefault);
  const [projectsState, projectsDispatch] = useReducer(
    projectsReducer,
    stateFromStorage('projectsState', projectsDefault)
  );
  const [statusState, statusDispatch] = useReducer(statusReducer, statusDefault);
  const [menusState, menusDispatch] = useReducer(menusReducer, menusDefault);

  const theGlobalState = {
    panels: { state: panelState, dispatch: panelDispatch },
    dashboard: { state: dashboardState, dispatch: dashboardDispatch },
    projects: { state: projectsState, dispatch: projectsDispatch },
    status: { state: statusState, dispatch: statusDispatch },
    menus: { state: menusState, dispatch: menusDispatch }
  };

  Mousetrap.bind(['command+1'], function() {
    window.location = '/dashboard';
  });
  Mousetrap.bind(['command+2'], function() {
    window.location = '/projects';
  });
  Mousetrap.bind(['command+3'], function() {
    window.location = '/monitors';
  });
  Mousetrap.bind(['command+4'], function() {
    window.location = '/names';
  });
  Mousetrap.bind(['command+5'], function() {
    window.location = '/signatures';
  });
  Mousetrap.bind(['command+6'], function() {
    window.location = '/settings/skins';
  });
  Mousetrap.bind(['command+7'], function() {
    window.location = '/support/keys';
  });
  Mousetrap.bind(['command+8'], function() {
    window.location = '/support/free';
  });
  Mousetrap.bind(['q l'], function() {
    panelDispatch({ type: 'collapse' });
  });
  Mousetrap.bind(['q a'], function() {
    panelDispatch({ type: 'expand' });
  });
  Mousetrap.bind(['q h'], function() {
    panelDispatch({ type: 'help' });
  });
  Mousetrap.bind(['q m'], function() {
    panelDispatch({ type: 'menu' });
  });
  Mousetrap.bind(['q c'], function() {
    panelDispatch({ type: 'content' });
  });
  Mousetrap.bind(['q s'], function() {
    panelDispatch({ type: 'status' });
  });

  return (
    <GlobalContext.Provider value={theGlobalState}>
      <div className="whole-page">
        <PageHeader />
        <PageContent />
        <PageFooter />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;

//-----------------------------------------------------
const stateFromStorage = (key, defaultState) => {
  const storage = localStorage.getItem(key);
  if (storage === null) return defaultState;
  return JSON.parse(storage);
};

// https://bashooka.com/coding/react-i con-co mponents/
// https://datatables.net/
// https://github.com/ccampbell/mousetrap
// https://blog.logrocket.com/how-react-hooks-can-replace-react-router/

// const useMediaQuery = (queryInput) => {
//   const props = {
//     name: 'MuiUseMediaQuery',
//     props: {},
//   };
//   let query = queryInput.replace(/^@media( ?)/m, '');
//   const supportMatchMedia =
//     typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
//   const {
//     matchMedia = supportMatchMedia ? window.matchMedia : null,
//   } = {
//     ...props,
//   };
//   const [match, setMatch] = React.useState(false);
//   React.useEffect(() => {
//     let active = true;
//     if (!supportMatchMedia) {
//       return undefined;
//     }
//     const queryList = matchMedia(query);
//     const updateMatch = () => {
//       if (active) {
//         setMatch(queryList.matches);
//       }
//     };
//     updateMatch();
//     queryList.addListener(updateMatch);
//     return () => {
//       active = false;
//       queryList.removeListener(updateMatch);
//     };
//   }, [query, matchMedia, supportMatchMedia]);
//   return match;
// }
