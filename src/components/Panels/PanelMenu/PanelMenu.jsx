import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'components/Panels';
import './PanelMenu.css';

//----------------------------------------------------------------------
export const PanelMenu = () => {
  const style = {
    textDecoration: 'none'
  }
  return (
    <Panel title="Menu" type="menu" collapseLeft={true}>
      <ul>
        <li><Link to="/"><span style={{ style }}>Home</span></Link></li>
        <li><Link to="/users"><span style={{ style }}>Users</span></Link></li>
        <li><Link to="/contact"><span style={{ style }}>Contact</span></Link></li>
      </ul>
    </Panel>
  );
};
