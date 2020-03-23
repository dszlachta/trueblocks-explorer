import React from 'react';

import { usePage } from 'store';
import { thePages } from 'components/Pages';
import { Panel } from 'components/Panels';
import './PanelContent.css';

//----------------------------------------------------------------------
export const PanelContent = () => {
  const { page, subpage } = usePage();
  return (
    <Panel title={page + (subpage ? ' : ' + subpage : '')} type="content" collapseLeft={true} noIcon>
      <InnerPage />
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
