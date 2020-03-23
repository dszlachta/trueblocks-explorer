import React, { useState } from 'react';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import { usePanels, usePage } from 'store';
import { Panel } from 'components/Panels';
import './PanelHelp.css';

let setter = null;
const fetcher = (url) => {
  fetch(url)
    .then((r) => {
      const html = r.text().then((txt) => { setter(txt) });
      return html;
    })
}

//----------------------------------------------------------------------
export const PanelHelp = () => {
  const expanded = usePanels().state.help;
  const [help, setHelp] = useState('x');
  setter = setHelp;
  const { page, subpage } = usePage();
  const helpURL = "http://localhost:8080/help/" + page + (subpage !== '' ? "_" + subpage : '') + ".md";
  useSWR(helpURL, fetcher);

  return (
    <Panel title={"Help"} type="help">
      {expanded ? <ReactMarkdown source={help} /> : <></>}
    </Panel>
  );
};
