import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Mousetrap from 'mousetrap';

import { PageHeader, PageFooter, PageContent } from 'page-parts';
import GlobalContext, { panelDefault, panelReducer, statusDefault, statusReducer } from 'store';
import { theMenu, menusReducer } from 'pages';

// page-related - for searching do not remove
import { dashboardDefault, dashboardReducer } from 'pages/Dashboard';
import { projectsDefault, projectsReducer } from 'pages/Projects/store';
import { namesDefault, namesReducer } from 'pages/Names/store';
import { signaturesDefault, signaturesReducer } from 'pages/Signatures';
import { digestsDefault, digestsReducer } from 'pages/Digests/store';
import { cachesDefault, cachesReducer } from 'pages/Caches/store';
import { stateFromStorage } from 'components/utils';

import 'App.css';

//-----------------------------------------------------
function App() {
  const [panelState, panelDispatch] = useReducer(panelReducer, stateFromStorage('panelState', panelDefault));
  // page-related - for searching do not remove
  const [dashboardState, dashboardDispatch] = useReducer(dashboardReducer, dashboardDefault);
  const [projectsState, projectsDispatch] = useReducer(
    projectsReducer,
    stateFromStorage('projectsState', projectsDefault)
  );
  const [namesState, namesDispatch] = useReducer(namesReducer, namesDefault);
  const [signaturesState, signaturesDispatch] = useReducer(signaturesReducer, signaturesDefault);
  const [digestsState, digestsDispatch] = useReducer(digestsReducer, digestsDefault);
  const [cachesState, cachesDispatch] = useReducer(cachesReducer, cachesDefault);
  const [statusState, statusDispatch] = useReducer(statusReducer, statusDefault);
  const [menusState, menusDispatch] = useReducer(menusReducer, theMenu);

  // page-related - for searching do not remove
  const theGlobalState = {
    panels: { state: panelState, dispatch: panelDispatch },
    dashboard: { dashboards: dashboardState, dispatch: dashboardDispatch },
    projects: { state: projectsState, dispatch: projectsDispatch },
    names: { state: namesState, dispatch: namesDispatch },
    signatures: { state: signaturesState, dispatch: signaturesDispatch },
    digests: { state: digestsState, dispatch: digestsDispatch },
    caches: { caches: cachesState, dispatch: cachesDispatch },
    status: { state: statusState, dispatch: statusDispatch },
    menus: { state: menusState, dispatch: menusDispatch },
  };

  mapHotKeys(panelDispatch);

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

//------------------------------------------------------
const mapHotKeys = (panelDispatch) => {
  Mousetrap.bind(['alt+0'], function () {
    window.location = '/dashboard';
  });
  Mousetrap.bind(['alt+1'], function () {
    window.location = '/projects';
  });
  Mousetrap.bind(['alt+2'], function () {
    window.location = '/monitors';
  });
  Mousetrap.bind(['alt+3'], function () {
    window.location = '/explorer';
  });
  Mousetrap.bind(['alt+4'], function () {
    window.location = '/names';
  });
  Mousetrap.bind(['alt+5'], function () {
    window.location = '/signatures';
  });
  Mousetrap.bind(['alt+6'], function () {
    window.location = '/digests';
  });
  Mousetrap.bind(['alt+7'], function () {
    window.location = '/caches';
  });
  Mousetrap.bind(['alt+8'], function () {
    window.location = '/settings';
  });
  Mousetrap.bind(['alt+9'], function () {
    window.location = '/support/keys';
  });
  Mousetrap.bind(['q l'], function () {
    panelDispatch({ type: 'collapse' });
  });
  Mousetrap.bind(['q a'], function () {
    panelDispatch({ type: 'expand' });
  });
  Mousetrap.bind(['q h'], function () {
    panelDispatch({ type: 'help' });
  });
  Mousetrap.bind(['q m'], function () {
    panelDispatch({ type: 'menu' });
  });
  Mousetrap.bind(['q c'], function () {
    panelDispatch({ type: 'content' });
  });
  Mousetrap.bind(['q s'], function () {
    panelDispatch({ type: 'status' });
  });
};

// https://bashooka.com/coding/react-i con-co mponents/
// https://datatables.net/
// https://github.com/ccampbell/mousetrap
// https://blog.logrocket.com/how-react-hooks-can-replace-react-router/
// https://jaredpalmer.com/formik/docs/overview
// https://github.com/jbetancur/react-data-table-component
// https://jbetancur.github.io/react-data-table-component/?path=/story/general--kitchen-sink

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
