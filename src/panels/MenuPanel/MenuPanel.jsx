import React from 'react';

import { useToggles } from 'store';
import { useMenus } from 'pages';
import { Panel, Menu } from 'components/';

import './MenuPanel.css';

//----------------------------------------------------------------------
export const MenuPanel = () => {
  const expanded = useToggles().state.menu;
  const items = useMenus().menu.items;

  return (
    <Panel title="Menu" type="menu" dir="left" expanded={expanded}>
      {<Menu menu={items} expanded={expanded} />}
    </Panel>
  );
};
