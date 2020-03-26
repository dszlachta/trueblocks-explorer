import React from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'components/';
import './Card.css';

//------------------------------------------------------------------------------
export const Card = ({ title, headerLink, headerClass = 'card-header', topIcon, iconTray, children }) => {
  return (
    <div className="card">
      <Panel
        title={title}
        options={{
          headerClass: headerClass,
          headerLink: headerLink,
          topIcon: topIcon,
          iconTray: iconTray,
          type: "monitor",
          expanded: true,
        }} >
        {children}
      </Panel>
    </div>
  );
}
