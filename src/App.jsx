import React, { useReducer } from 'react';
import Mousetrap from 'mousetrap';

import { PageHeader, PageFooter, PageContent } from 'page-parts';
import GlobalContext, { panelDefault, panelReducer, statusDefault, statusReducer } from 'store';
import { theMenu, menusReducer } from 'pages';
import { stateFromStorage } from 'components/utils';

// page-related - for searching do not remove
// auto-generate: imports
import { dashboardDefault, dashboardReducer } from 'pages/Dashboard/Dashboard';
import { projectsDefault, projectsReducer } from 'pages/Projects/Projects';
import { monitorsDefault, monitorsReducer } from 'pages/Monitors/Monitors';
import { explorerDefault, explorerReducer } from 'pages/Explorer/Explorer';
import { namesDefault, namesReducer } from 'pages/Names/Names';
import { signaturesDefault, signaturesReducer } from 'pages/Signatures/Signatures';
import { digestsDefault, digestsReducer } from 'pages/Digests/Digests';
import { cachesDefault, cachesReducer } from 'pages/Caches/Caches';
import { otherDefault, otherReducer } from 'pages/Other/Other';
import { settingsDefault, settingsReducer } from 'pages/Settings/Settings';
import { supportDefault, supportReducer } from 'pages/Support/Support';
// auto-generate: imports

import 'App.css';

//-----------------------------------------------------
// only here to make auto code generation easier
const defaultData = {
  panel: panelDefault,
  status: statusDefault,
  menu: theMenu,
  dashboard: dashboardDefault,
  projects: stateFromStorage('projectsState', projectsDefault),
  monitors: monitorsDefault,
  explorer: explorerDefault,
  names: namesDefault,
  signatures: signaturesDefault,
  digests: digestsDefault,
  caches: cachesDefault,
  other: otherDefault,
  settings: settingsDefault,
  support: supportDefault,
};

//-----------------------------------------------------
function App() {
  const [panelState, panelDispatch] = useReducer(panelReducer, stateFromStorage('panelState', defaultData['panel']));
  const [statusState, statusDispatch] = useReducer(statusReducer, defaultData['status']);
  const [menusState, menusDispatch] = useReducer(menusReducer, defaultData['menu']);
  // auto-generate: reducers
  const [dashboardState, dashboardDispatch] = useReducer(dashboardReducer, defaultData['dashboard']);
  const [projectsState, projectsDispatch] = useReducer(projectsReducer, defaultData['projects']);
  const [monitorsState, monitorsDispatch] = useReducer(monitorsReducer, defaultData['monitors']);
  const [explorerState, explorerDispatch] = useReducer(explorerReducer, defaultData['explorer']);
  const [namesState, namesDispatch] = useReducer(namesReducer, defaultData['names']);
  const [signaturesState, signaturesDispatch] = useReducer(signaturesReducer, defaultData['signatures']);
  const [digestsState, digestsDispatch] = useReducer(digestsReducer, defaultData['digests']);
  const [cachesState, cachesDispatch] = useReducer(cachesReducer, defaultData['caches']);
  const [otherState, otherDispatch] = useReducer(otherReducer, defaultData['other']);
  const [settingsState, settingsDispatch] = useReducer(settingsReducer, defaultData['settings']);
  const [supportState, supportDispatch] = useReducer(supportReducer, defaultData['support']);
  // auto-generate: reducers

  const theGlobalState = {
    panels: { state: panelState, dispatch: panelDispatch },
    status: { state: statusState, dispatch: statusDispatch },
    menus: { menu: menusState, dispatch: menusDispatch },
    // auto-generate: state
    dashboard: { dashboard: dashboardState, dispatch: dashboardDispatch },
    projects: { projects: projectsState, dispatch: projectsDispatch },
    monitors: { monitors: monitorsState, dispatch: monitorsDispatch },
    explorer: { explorer: explorerState, dispatch: explorerDispatch },
    names: { names: namesState, dispatch: namesDispatch },
    signatures: { signatures: signaturesState, dispatch: signaturesDispatch },
    digests: { digests: digestsState, dispatch: digestsDispatch },
    caches: { caches: cachesState, dispatch: cachesDispatch },
    other: { other: otherState, dispatch: otherDispatch },
    settings: { settings: settingsState, dispatch: settingsDispatch },
    support: { support: supportState, dispatch: supportDispatch },
    // auto-generate: state
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
  Mousetrap.bind(['e b'], function () {
    window.location = '/explorer/blocks';
  });
  Mousetrap.bind(['e t'], function () {
    window.location = '/explorer/transactions';
  });
  Mousetrap.bind(['e r'], function () {
    window.location = '/explorer/receipts';
  });
  Mousetrap.bind(['e l'], function () {
    window.location = '/explorer/logs';
  });
  Mousetrap.bind(['e c'], function () {
    window.location = '/explorer/traces';
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
//https://flaviocopes.com/react-hook-useeffect/

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
