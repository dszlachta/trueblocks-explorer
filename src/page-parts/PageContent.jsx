import React from 'react';

import { usePanels } from 'store';
import { MenuPanel, ContentPanel, StatusPanel, HelpPanel } from 'components/';
import './PageContent.css';

//----------------------------------------------------------------------
export const PageContent = () => {
  return (
    <div className={'page-content shape_' + usePanelBits()}>
      <MenuPanel />
      <StatusPanel />
      <ContentPanel />
      <HelpPanel />
    </div>
  );
};

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
