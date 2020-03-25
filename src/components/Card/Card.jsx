import React from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'components/';
import './Card.css';

//------------------------------------------------------------------------------
export const Card = ({ title, inCon, headerLink, headClass = 'card-header', children }) => {
  return (
    <div className="card">
      <Panel title={title} options={{ headClass: headClass, headerLink: headerLink, type: "monitor", expanded: true, inCon: inCon }}>
        {children}
      </Panel>
    </div>
  );
}
