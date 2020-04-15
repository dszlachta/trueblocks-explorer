import React from 'react';

import { usePanels } from 'store';
import { Panel } from 'components/';
import { currentPage, stateFromStorage } from 'components/utils';
import { InnerPage } from 'pages';
import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = currentPage();
  let title = page + (subpage ? ' : ' + subpage : '');
  const expanded = usePanels().state.content;
  return (
    <Panel title={title.replace('%20', ' ')} type="content" expanded={usePanels().state.content}>
      {expanded ? (
        <div style={{ margin: '2px 30px 2px 10px', padding: '5px' }}>
          <InnerPage />
        </div>
      ) : (
        <></>
      )}
    </Panel>
  );
};
