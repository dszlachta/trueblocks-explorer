import React from 'react';
import useSWR from 'swr';
import { Panel } from 'components/';
import { useStatus, statusDefault } from 'store';
import './StatusPanel.css';
import { usePanels } from 'store';

//----------------------------------------------------------------------
const fetcher = url => fetch(url).then((r) => {
  return r.json()
});

//----------------------------------------------------------------------
export const StatusPanel = () => {
  //sleep(500);
  const { dispatch } = useStatus();
//  const { data, error } = useSWR("http://localhost:8080/status", fetcher, { refreshInterval: 7 });
  const { data, error } = useSWR("http://localhost:8080/status", fetcher);
  let content = '';
  if (error) {
    content = statusDefault;
  } else {
    if (!data)
      content = 'loading...'
    else {
      delete data['types'];
      content = data;
      dispatch({'type':'success','payload':data})
    }
  }
  content = JSON.stringify(content, null, 2);
  return (
    <Panel title="Status" options={{ type: 'status', expanded: usePanels().state.status }}>
      {error && <div className="warning">Error: Is the API running?</div>}
      <pre>{content}</pre>
    </Panel>
  );
};

// function sleep(ms) {
//   var start = new Date().getTime(), expire = start + ms;
//   while (new Date().getTime() < expire) { }
//   return;
// }