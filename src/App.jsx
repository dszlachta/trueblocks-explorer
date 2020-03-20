import React, { useReducer } from 'react';
import PageHeader from 'page-parts/PageHeader';
import PageFooter from 'page-parts/PageFooter';
import PageContent from 'page-parts/PageContent';
import { panelStateDefault, panelReducer, PanelContext } from 'page-parts/Panel';
import "App.css"

function App() {
  const panelStorage = localStorage.getItem('panelState');
  const panelDefault = panelStorage === null ? panelStateDefault : JSON.parse(panelStorage);
  const [panelState, togglePanel] = useReducer(panelReducer, panelDefault);
  return (
    <PanelContext.Provider value={{ panelState: panelState, togglePanel: togglePanel }} >
      <div className="whole-page">
        <PageHeader />
        <PageContent />
        <PageFooter />
      </div >
    </PanelContext.Provider>
  );
}

export default App;


// https://bashooka.com/coding/react-icon-components/