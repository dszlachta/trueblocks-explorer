import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import { usePanels, usePage, handleClick } from 'store';
import { Panel } from 'components/';
import HelpCircle from 'assets/icons/help-circle';
import './HelpPanel.css';

let setter = null;
const fetcher = (url) => {
  fetch(url)
    .then((r) => { if (r.status !== 200) throw new Error(); return r.text(); })
    .then((t) => { setter(t) })
    .catch ((e) => {
      return setter('#### Error\nFailed to load: **' + url.replace(/http:\/\/localhost:8080\/help\//, '') + "**");
    });
}

//----------------------------------------------------------------------
export const HelpPanel = () => {
  const dispatch = usePanels().dispatch;
  const expanded = usePanels().state.help;
  const [help, setHelp] = useState('');
  setter = setHelp;
  const { page, subpage } = usePage();
  const helpURL = "http://localhost:8080/help/" + page + (subpage !== '' ? "/" + subpage : '') + ".md";
  useSWR(helpURL, fetcher);

  const action = { type: 'help' }
  const helpIcon = <HelpCircle fill="green" color="#333" onClick={(e) => handleClick(e, dispatch, action)} />;
  return (
    <Panel title="Help" options={{ type: 'help', expanded: expanded, inCon: helpIcon }}>
      {expanded ? <ReactMarkdown source={help} /> : <></>}
    </Panel>
  );
};
