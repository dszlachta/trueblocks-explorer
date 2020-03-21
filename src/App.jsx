import React, { useReducer } from 'react';
import GlobalContext from 'store';
import PageHeader from 'components/PageParts/PageHeader';
import PageFooter from 'components/PageParts/PageFooter';
import PageContent from 'components/PageParts/PageContent';
import { panelStateDefault, panelReducer } from 'components/Panels';
import { statusDefault, statusReducer } from 'components/Panels';
import 'App.css';

function App() {
  const panelStorage = localStorage.getItem('panelState');
  const panelDefault = panelStorage === null ? panelStateDefault : JSON.parse(panelStorage);
  const [panelState, panelDispatch] = useReducer(panelReducer, panelDefault);
  const [statusState, statusDispatch] = useReducer(statusReducer, statusDefault);

  const theGlobalState = {
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

// https://bashooka.com/coding/react-icon-components/
