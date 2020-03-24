import React from 'react';

import { usePage } from 'store';
import { Panel } from 'components/Panels';
import { thePages } from 'components/Pages';
import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = usePage();
  return (
    <Panel title={page + (subpage ? ' : ' + subpage : '')} type="content" collapseLeft={true} noIcon>
      <div style={{ margin: '2px 30px 2px 10px', padding: '5px' }}><InnerPage /></div>
    </Panel>
  );
};

//----------------------------------------------------------------------
const InnerPage = () => {
  const { page, subpage } = usePage();
  const ret = thePages[page + '/' + subpage];
  console.log('menuKey: ', page + '/' + subpage, 'menuValue: ', ret);
  return (ret ? ret.component : <div className="warning">Missing Inner Page</div>);
}
