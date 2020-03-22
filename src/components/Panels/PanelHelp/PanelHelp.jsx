import React, { useState } from 'react';
import useSWR from 'swr';
import { usePanels } from 'store';
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
  const [help, setHelp] = useState('x');
  setter = setHelp;
  const helpURL = "http://localhost:8080/help" + window.location.pathname + ".html";
  const { helpText, error } = useSWR(helpURL, fetcher);

  if (!helpText) {
    return (
      <Panel title="Help" type="help">
        {help}
      </Panel>
    );
  }

  return (
    <Panel title="Help" type="help">
      {'Help for route ' + window.location.pathname}
      <div id="body" dangerouslySetInnerHTML={{ __html: helpText }} />
    </Panel>
  );
};
