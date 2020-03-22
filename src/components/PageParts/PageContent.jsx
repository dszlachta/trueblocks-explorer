import React from 'react';
import { usePanels } from 'store';
import { PanelMenu, PanelContent, PanelStatus, PanelHelp } from 'components/Panels';
import './PageContent.css';

//----------------------------------------------------------------------
const PageContent = () => {
  return (
    <div className={'page-content shape_' + usePanelBits()}>
      <PanelMenu />
      <PanelStatus />
      <PanelContent />
      <PanelHelp />
    </div>
  );
};
export default PageContent;

//----------------------------------------------------------------------
const usePanelBits = () => {
  const panelState = usePanels().state;
  let ret = '';
  ret += panelState.menu ? '1' : '0';
  ret += panelState.content ? '1' : '0';
  ret += panelState.status ? '1' : '0';
  ret += panelState.help ? '1' : '0';
  return ret;
};
