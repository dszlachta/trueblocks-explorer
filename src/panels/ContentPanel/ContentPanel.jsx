import React, { createContext } from 'react';

import { useSystemCheck } from 'store';

import { useToggles } from 'store';
import { thePages } from 'pages';
import { Settings } from 'pages/Settings/Settings';
import { Panel } from 'components/';
import { currentPage } from 'components/utils';

import './ContentPanel.css';

//----------------------------------------------------------------------
export const ContentPanel = () => {
  const { page, subpage } = currentPage();
  let title = decodeURIComponent((page + (subpage ? ' : ' + subpage : '')).replace(/\+/g, '%20'));
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
export var PageContext = createContext({});
export const InnerContent = () => {
  const { page, subpage } = currentPage();
  if (!useSystemCheck('api')) return <Settings />;

  const ret = thePages[page + '/' + subpage];
  return (
    <PageContext.Provider value={[]}>
      {ret ? ret.component : <div className="warning">Missing Inner Content</div>}
    </PageContext.Provider>
  );
};
