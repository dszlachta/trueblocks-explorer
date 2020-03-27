import React from 'react';
import PropTypes from 'prop-types';

import { usePanels, useMenus } from 'store';
import { Panel, Menu } from 'components/';
import './MenuPanel.css';

//----------------------------------------------------------------------
export const MenuPanel = () => {
  const selected = window.location.pathname.replace(/^\/([^/]+).*/, '$1');
  return (
    <Panel title="Menu" options={{ type: 'menu', dir: 'left', expanded: usePanels().state.menu }}>
      {<Menu menu={useMenus().state.items} selected={selected} />}
    </Panel>
  );
};
