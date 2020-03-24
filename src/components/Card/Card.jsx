import React from 'react';
import { Panel } from 'components/';
import './Card.css';

//------------------------------------------------------------------------------
export const Card = ({ title, inCon, headerLink, children }) => {
  return (
    <div className="card">
      <Panel title={title} options={{ headClass: 'card-header', headerLink: headerLink, type: "monitor", expanded: true, inCon: inCon }}>
        {children}
      </Panel>
    </div>
  );
}
