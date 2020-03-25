import React from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'components/';
import './Group.css';

export const Group = ({ title, children }) => {
  return (
    <div className="group">
      <Panel title={'[ ' + title + ' ]'} options={{ headClass: "group-header", type: "group", expanded: true, inCon: <></> }}>
        {children}
      </Panel>
    </div>
  );
}
