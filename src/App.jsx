import React, { useReducer } from 'react';
import { PageHeader, PageFooter, PageContent } from 'components/PageParts';
import GlobalContext, {
  loadingReducer,
  panelDefault, panelReducer,
  statusDefault, statusReducer
} from 'store';
import 'App.css';

//-----------------------------------------------------
function App() {
  const [loadingState, loadingDispatch] = useReducer(loadingReducer, false);
  const [panelState, panelDispatch] = useReducer(panelReducer, stateFromStorage('panelState', panelDefault));
  const [statusState, statusDispatch] = useReducer(statusReducer, statusDefault);  // status is delivered from backend, no local storage

  const theGlobalState = {
    loading: { state: loadingState, dispatch: loadingDispatch },
    panels: { state: panelState, dispatch: panelDispatch },
    status: { state: statusState, dispatch: statusDispatch }
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

// https://bashooka.com/coding/react-icon-components/
