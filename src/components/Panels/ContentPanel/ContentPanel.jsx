import React from 'react';
import PropTypes from 'prop-types';

import { usePanels } from 'store';
import { Panel } from 'components/';
import { currentPage } from 'components/utils';
import { thePages } from 'pages';
import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = currentPage();
  const title = page + (subpage ? ' : ' + subpage : '');
  const expanded = usePanels().state.content;
  return (
    <Panel title={title} options={{ topIcon: <></>, type: 'content', expanded: usePanels().state.content }}>
      {expanded
        ?
          <div style={{ margin: '2px 30px 2px 10px', padding: '5px' }}><InnerPage /></div>
        :
          <></>
      }
    </Panel>
  );
};

//----------------------------------------------------------------------
const InnerPage = () => {
  const { page, subpage } = currentPage();
  const ret = thePages[page + '/' + subpage];
  // console.log('menuKey: ', page + '/' + subpage, 'menuValue: ', ret);
  return (ret ? ret.component : <div className="warning">Missing Inner Page</div>);
}
