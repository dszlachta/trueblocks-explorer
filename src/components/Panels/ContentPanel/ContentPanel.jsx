import React from 'react';
import PropTypes from 'prop-types';

import { usePanels } from 'store';
import { Panel } from 'components/';
import { currentPage } from 'components/utils';
import { InnerPage } from 'pages';
import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = currentPage();
  const title = page + (subpage ? ' : ' + subpage : '');
  const expanded = usePanels().state.content;
  return (
    <Panel
      title={title.replace('%20', ' ')}
      options={{
        topIcon: <></>, //
        type: 'content',
        expanded: usePanels().state.content,
      }}
    >
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
