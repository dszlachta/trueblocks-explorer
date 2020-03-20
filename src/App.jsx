import React, { useReducer } from 'react';
import PageHeader from 'components/Panels/PageHeader';
import PageFooter from 'components/Panels/PageFooter';
import PageContent from 'components/Panels/PageContent';
import { panelStateDefault, panelReducer, PanelContext } from 'components/Panels/Panel';
import 'App.css';

const axios = require('axios').default;

function App() {
  const panelStorage = localStorage.getItem('panelState');
  const panelDefault = panelStorage === null ? panelStateDefault : JSON.parse(panelStorage);
  const [panelState, dispatch2Panel] = useReducer(panelReducer, panelDefault);
  return (
    <PanelContext.Provider value={{ panelState: panelState, dispatch2Panel: dispatch2Panel }}>
      <div className="whole-page">
        <PageHeader />
        <PageContent />
        <PageFooter />
      </div>
    </PanelContext.Provider>
  );
}

export default App;

// https://bashooka.com/coding/react-icon-components/
