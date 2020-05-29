import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import Mousetrap from 'mousetrap';

import { PageHeader, PageFooter, PageContent } from 'page-parts';
import GlobalContext, { defaultToggles, togglesReducer, statusDefault, statusReducer } from 'store';
import { theMenu, menusReducer } from 'pages';
import { stateFromStorage } from 'components/utils';

// page-related - for searching do not remove
// auto-generate: imports
import { dashboardDefault, dashboardReducer } from 'pages/Dashboard/Dashboard';
import { collectionsDefault, collectionsReducer } from 'pages/Collections/Collections';
import { monitorsDefault, monitorsReducer } from 'pages/Monitors/Monitors';
import { tagsDefault, tagsReducer } from 'pages/Tags/Tags';
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
  panel: defaultToggles,
  status: statusDefault,
  menu: theMenu,
  dashboard: dashboardDefault,
  collections: collectionsDefault,
  monitors: monitorsDefault,
  explorer: explorerDefault,
  names: namesDefault,
  tags: tagsDefault,
  signatures: signaturesDefault,
  digests: digestsDefault,
  caches: cachesDefault,
  other: otherDefault,
  settings: settingsDefault,
  support: supportDefault,
};

//-----------------------------------------------------
function App() {
  const [panelState, panelDispatch] = useReducer(togglesReducer, stateFromStorage('panelState', defaultData['panel']));
  const [statusState, statusDispatch] = useReducer(statusReducer, defaultData['status']);
  const [menusState, menusDispatch] = useReducer(menusReducer, defaultData['menu']);
  // auto-generate: reducers
  const [dashboardState, dashboardDispatch] = useReducer(dashboardReducer, defaultData['dashboard']);
  const [collectionsState, collectionsDispatch] = useReducer(collectionsReducer, defaultData['collections']);
  const [monitorsState, monitorsDispatch] = useReducer(monitorsReducer, defaultData['monitors']);
  const [tagsState, tagsDispatch] = useReducer(tagsReducer, defaultData['tags']);
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
    collections: { collections: collectionsState, dispatch: collectionsDispatch },
    monitors: { monitors: monitorsState, dispatch: monitorsDispatch },
    tags: { tags: tagsState, dispatch: tagsDispatch },
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

  const insideElectron = /electron/i.test(navigator.userAgent);
  const electronIndexLoaded = [/^file:\/\//, /index.html/]
        .every((regexp) => regexp.test(window.location));

  if (insideElectron && electronIndexLoaded) {
    return (
      <Redirect to="/dashboard" />
    );
  }

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
  Mousetrap.bind(['s d'], function () {
    window.location = '/dashboard';
  });
  Mousetrap.bind(['s c'], function () {
    window.location = '/collections';
  });
  Mousetrap.bind(['s m'], function () {
    window.location = '/monitors';
  });
  Mousetrap.bind(['s e'], function () {
    window.location = '/explorer';
  });
  Mousetrap.bind(['s n'], function () {
    window.location = '/names';
  });
  Mousetrap.bind(['s t'], function () {
    window.location = '/tags';
  });
  Mousetrap.bind(['s g'], function () {
    window.location = '/signatures';
  });
  Mousetrap.bind(['s i'], function () {
    window.location = '/digests';
  });
  Mousetrap.bind(['s h'], function () {
    window.location = '/caches';
  });
  Mousetrap.bind(['s o'], function () {
    window.location = '/other';
  });
  Mousetrap.bind(['s s'], function () {
    window.location = '/settings';
  });
  Mousetrap.bind(['s u'], function () {
    window.location = '/support';
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
//https://itnext.io/usefetch-react-custom-hook-for-fetch-api-with-suspense-and-concurrent-mode-in-mind-1d3ba9250e0

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
