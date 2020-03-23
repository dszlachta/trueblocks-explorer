import React from 'react';
import useSWR from 'swr';
import { Panel } from 'components/Panels';
import { useStatus, statusDefault } from 'store';
import './StatusPanel.css';

const fetcher = url => fetch(url).then(r => r.json())
//----------------------------------------------------------------------
export const StatusPanel = () => {
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
    <Panel title="Status" type="status">
      {error && <div className="warning">Error: Is the API running?</div>}
      <pre>{content}</pre>
    </Panel>
  );
  //  return <div>{JSON.stringify(data)}</div>

  // const isLoading = useLoading().state;
  // const loadingDispatch = useLoading().dispatch;
  // const { state, dispatch } = useStatus();
  // const expanded = usePanels().status;
  // console.log('status: ', state);
  // // useEffect(() => {
  // //   const interval = setInterval(
  // //     () => {
  // //       // console.log('status: ', state.data[0])
  // //       dispatch({ type: 'toggle_api' })
  // //       // console.log('status: ', state.data[0])
  // //     }, 1000
  // //   );
  // //   return () => {
  // //     clearInterval(interval);
  // //   };
  // // }, []);
  // //const [lastRefresh, setLastRefresh] = useState(0);
  // const needsRefresh = true; //usePanels().state.status; //(status.state.meta.client > lastRefresh + 1);
  // useEffect(() => {
  //   if (needsRefresh) {
  //     loadingDispatch({ type: 'on' })
  //     fetch('http://localhost:8080/status')
  //       .then((response) => { return response.json(); })
  //       .then((json) => {
  //         const action = { type: 'success', payload: json };
  //         dispatch(action);
  //       })
  //       .catch((response) => { });
  //   }
  //   loadingDispatch({ type: 'off' })
  // }, [isLoading, expanded, JSON.stringify(state)]);
};
