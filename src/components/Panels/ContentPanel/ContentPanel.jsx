import React from 'react';
import PropTypes from 'prop-types';

import { usePage, usePanels } from 'store';
import { Panel } from 'components/';
import { thePages } from 'pages';
import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = usePage();
  const title = page + (subpage ? ' : ' + subpage : '');
  return (
    <Panel title={title} options={{ inCon: <></>, type: 'content', expanded: usePanels().state.content }}>
      <div style={{ margin: '2px 30px 2px 10px', padding: '5px' }}><InnerPage /></div>
    </Panel>
  );
};

//----------------------------------------------------------------------
const InnerPage = () => {
  const { page, subpage } = usePage();
  const ret = thePages[page + '/' + subpage];
  // console.log('menuKey: ', page + '/' + subpage, 'menuValue: ', ret);
  return (ret ? ret.component : <div className="warning">Missing Inner Page</div>);
}
