import React from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'components/';
import './Group.css';

export const Group = ({ title, children }) => {
  return (
    <div className="group">
      <Panel title={'[ ' + title + ' ]'} options={{ headerClass: "group-header", type: "group", expanded: true, topIcon: <></> }}>
        {children}
      </Panel>
    </div>
  );
}
