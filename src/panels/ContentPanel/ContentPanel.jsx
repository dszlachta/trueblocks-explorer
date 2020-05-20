import React from 'react';

import { useStatusData } from 'store';

import { useToggles } from 'store';
import { thePages } from 'pages';
import { Settings } from 'pages/Settings/Settings';
import { Panel } from 'components/';
import { currentPage, systemCheck } from 'components/utils';

import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = currentPage();
  let title = (page + (subpage ? ' : ' + subpage : '')).replace('%20', ' ');
  const expanded = useToggles().state.content;
  return (
    <Panel title={title} type="content" expanded={expanded}>
      {expanded && (
        <div className="content-container">
          <InnerContent />
        </div>
      )}
    </Panel>
  );
};

//----------------------------------------------------------------------
export const InnerContent = () => {
  const status = useStatusData();
  //  if (!status.loading && (!systemCheck(status, 'api') || !systemCheck(status, 'node'))) return <Settings />;
  if (!systemCheck(status, 'api')) return <Settings />;

  const { page, subpage } = currentPage();
  const ret = thePages[page + '/' + subpage];

  return ret ? ret.component : <div className="warning">Missing Inner Content</div>;
};
