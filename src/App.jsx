import React, { useReducer } from 'react';
import PageHeader from 'components/Panels/PageHeader';
import PageFooter from 'components/Panels/PageFooter';
import PageContent from 'components/Panels/PageContent';
import { panelStateDefault, panelReducer, PanelContext } from 'components/Panels/Panel';
import 'App.css';

function App() {
  const panelStorage = localStorage.getItem('panelState');
  const panelDefault = panelStorage === null ? panelStateDefault : JSON.parse(panelStorage);
  const [panelState, togglePanel] = useReducer(panelReducer, panelDefault);
  return (
    <PanelContext.Provider value={{ panelState: panelState, togglePanel: togglePanel }}>
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
