import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'components/Panels';
import './PanelMenu.css';

//----------------------------------------------------------------------
export const PanelMenu = () => {
  return (
    <Panel title="Menu" type="menu" collapseLeft={true}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Panel>
  );
};
