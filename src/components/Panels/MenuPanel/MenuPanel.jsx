import React from 'react';
import PropTypes from 'prop-types';

import { usePanels } from 'store';
import { useMenus } from 'pages';
import { Panel, Menu } from 'components/';
import './MenuPanel.css';

//----------------------------------------------------------------------
export const MenuPanel = () => {
  return (
    <Panel title="Menu" options={{ type: 'menu', dir: 'left', expanded: usePanels().state.menu }}>
      {<Menu menu={useMenus().state.items} />}
    </Panel>
  );
};
