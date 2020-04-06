import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';

import { usePanels } from 'store';
import { Panel } from 'components/';
import { currentPage, getHelpMarkdown, handleClick } from 'components/utils';

import HelpCircle from 'assets/icons/help-circle';
import './HelpPanel.css';

//----------------------------------------------------------------------
export const HelpPanel = () => {
  const dispatch = usePanels().dispatch;
  const expanded = usePanels().state.help;
  const [help, setHelp] = useState('');
  //setter = setHelp;
  const { page, subpage } = currentPage();
  const helpURL = 'http://localhost:8080/help/' + page + (subpage !== '' ? '/' + subpage : '') + '.md';
  useSWR(helpURL, getHelpMarkdown(helpURL, setHelp));
//'#### Error\nFailed to load: **' + url.replace(/http:\/\/localhost:8080\/help\//, '') + '**'
  const action = { type: 'help' };
  const helpIcon = <HelpCircle fill="forestgreen" color="#333" onClick={(e) => handleClick(e, dispatch, action)} />;
  return (
    <Panel title="Help" options={{ type: 'help', expanded: expanded, topIcon: helpIcon }}>
      {expanded
        ?
        <>
          <ReactMarkdown source={help} /><h4>Other</h4>
          <ul>
            <li>
              <a href="http://localhost:8090/docs" target="_blank" rel="noopener noreferrer">
                API Docs
                </a>
            </li>
          </ul>
        </>
        :
        <></>
      }
    </Panel>
  );
};
