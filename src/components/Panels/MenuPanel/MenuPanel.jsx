import React from 'react';

import { usePanels } from 'store';
import { useMenus } from 'pages';
import { Panel, Menu } from 'components/';
import './MenuPanel.css';

//----------------------------------------------------------------------
export const MenuPanel = () => {
  return (
    <Panel title="Menu" type="menu" dir="left" expanded={usePanels().state.menu}>
      {<Menu menu={useMenus().menu.items} />}
    </Panel>
  );
};
