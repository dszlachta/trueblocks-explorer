import React, { useState } from 'react';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import { usePanels, usePage } from 'store';
import { Panel } from 'components/Panels';
import './PanelHelp.css';

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
export const PanelHelp = () => {
  const expanded = usePanels().state.help;
  const [help, setHelp] = useState('');
  setter = setHelp;
  const { page, subpage } = usePage();
  const helpURL = "http://localhost:8080/help/" + page + (subpage !== '' ? "/" + subpage : '') + ".md";
  useSWR(helpURL, fetcher);

  return (
    <Panel title={"Help"} type="help">
      {expanded ? <ReactMarkdown source={help} /> : <></>}
    </Panel>
  );
};
