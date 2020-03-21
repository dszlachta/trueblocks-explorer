import React, { useState, useContext } from 'react';
import { Panel, useExpanded } from 'components/Panels';
import GlobalContext from 'store';
import './PanelStatus.css';

export const statusDefault = {
  providerVersion: 'whatever',
  lastBlock: 12,
  apiVersion: 'whenever',
  meta: { client: 11 }
};

//----------------------------------------------------------------------
export const PanelStatus = () => {
  const context = useContext(GlobalContext);
  console.log(context);
  console.log('context.status: ', context.status);
  const expanded = useExpanded('status');
  const [lastBlock, setLastRefresh] = useState(0);
  console.log('lastRefresh: ', lastBlock);
  if (context.status.meta.client > lastBlock + 1) {
    // refresh at least every 10 seconds
    console.log('context.status: ', context.status);
    context.status.dispatch({ type: 'start' });
    fetch('http://localhost:8080/status&light')
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((json) => {
        console.log('json: ', json);
        console.log('json.data: ', json);
        context.status.dispatch({ type: 'success', payload: json });
      })
      .catch((response) => {});
    console.log('context.status: ', context.status);
    //    setLastRefresh(context.status.meta.client);
    console.log('context.status: ', context.status);
  }

  if (!expanded) {
    return <Panel title="Status" type="status"></Panel>;
  }

  //context.status.state.state = {};
  const content = JSON.stringify(context.status.state, null, 2);
  return (
    <Panel title="Status" type="status">
      <pre>{content}</pre>
    </Panel>
  );
};

//----------------------------------------------------------------------
export const statusReducer = (state, action) => {
  console.log(action);
  let ret = state;
  switch (action.type) {
    case 'start':
      break;
    case 'success':
      ret = { state: action.payload, dispatch: state.dispatch };
      console.log(ret);
      break;
    case 'fail':
      break;
    default:
      break;
  }
  // write whatever you need to put in localStorage here...
  return ret;
};
