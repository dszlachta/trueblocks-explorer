import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { usePanels } from 'store';
import { Panel } from 'components/';
import { currentPage, fetchFromServer, handleClick } from 'components/utils';

import HelpCircle from 'assets/icons/help-circle';
import './HelpPanel.css';

//----------------------------------------------------------------------
export const HelpPanel = () => {
  const dispatch = usePanels().dispatch;
  const expanded = usePanels().state.help;
  const [help, setHelp] = useState('');

  const { page, subpage } = currentPage();
  useEffect(() => {
    const url = 'http://localhost:8080/help/';
    const helpURL = url + page + (subpage !== '' ? '/' + subpage : '') + '.md';
    fetchFromServer(helpURL, setHelp, setHelp);
  }, [page, subpage]);

  const action = { type: 'help' };
  const helpIcon = <HelpCircle fill="forestgreen" color="#333" onClick={(e) => handleClick(e, dispatch, action)} />;
  return (
    <Panel title="Help" topIcon={helpIcon} type="help" expanded={expanded}>
      {expanded ? (
        <>
          <ReactMarkdown source={help} />
          <h4>Other</h4>
          <ul>
            <li>
              <a href="http://localhost:8090/docs" target="_blank" rel="noopener noreferrer">
                API Docs
              </a>
            </li>
          </ul>
        </> //
      ) : (
        <></> //
      )}
    </Panel>
  );
};
