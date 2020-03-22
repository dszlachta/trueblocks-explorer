import React, { useEffect } from 'react';
import { Panel } from 'components/Panels';
import { useStatus, useLoading, usePanels } from 'store';
import './PanelStatus.css';

//----------------------------------------------------------------------
export const PanelStatus = () => {
  const isLoading = useLoading().state;
  const loadingDispatch = useLoading().dispatch;
  const { state, dispatch } = useStatus();
  const expanded = usePanels().status;
  console.log('status: ', state);
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => {
  //       // console.log('status: ', state.data[0])
  //       dispatch({ type: 'toggle_api' })
  //       // console.log('status: ', state.data[0])
  //     }, 1000
  //   );
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  //const [lastRefresh, setLastRefresh] = useState(0);
  const needsRefresh = true; //usePanels().state.status; //(status.state.meta.client > lastRefresh + 1);
  useEffect(() => {
    if (needsRefresh) {
      loadingDispatch({ type: 'on' })
      fetch('http://localhost:8080/status')
        .then((response) => { return response.json(); })
        .then((json) => {
          const action = { type: 'success', payload: json };
          dispatch(action);
        })
        .catch((response) => { });
    }
    loadingDispatch({ type: 'off' })
  }, [isLoading, expanded, JSON.stringify(state)]);

  let content = JSON.stringify(state, null, 2);
  return (
    <Panel title="Status" type="status">
      <pre>{content}</pre>
    </Panel>
  );
};
