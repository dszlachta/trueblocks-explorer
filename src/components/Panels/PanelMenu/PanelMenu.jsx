import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'components/Panels';
import './PanelMenu.css';

//----------------------------------------------------------------------
export const PanelMenu = () => {
  return (
    <Panel className="menu" title="Menu" type="menu" collapseLeft={true}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link> <Link to="/contact">Contact</Link>
    </Panel>
  );
};
