import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { PageHeader, PageFooter, PageContent } from 'page-parts';
import GlobalContext, {
  panelDefault, panelReducer,
  dashboardDefault, dashboardReducer,
  projectsDefault, projectsReducer,
  statusDefault, statusReducer,
} from 'store';
import 'App.css';

//-----------------------------------------------------
function App() {
  const [panelState, panelDispatch] = useReducer(panelReducer, stateFromStorage('panelState', panelDefault));
  const [dashboardState, dashboardDispatch] = useReducer(dashboardReducer, dashboardDefault);
  const [projectsState, projectsDispatch] = useReducer(projectsReducer, projectsDefault);
  const [statusState, statusDispatch] = useReducer(statusReducer, statusDefault);

  const theGlobalState = {
    panels: { state: panelState, dispatch: panelDispatch },
    dashboard: { state: dashboardState, dispatch: dashboardDispatch },
    projects: { state: projectsState, dispatch: projectsDispatch },
    status: { state: statusState, dispatch: statusDispatch },
  };

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
  if (storage === null)
    return defaultState;
  return JSON.parse(storage)
}

// https://bashooka.com/coding/react-i con-co mponents/
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
