import React from 'react';

//----------------------------------------------------------------------
const GlobalContext = React.createContext({
  panels: {
    state: {},
    dispatch: () => {}
  },
  status: {
    providerVersion: 'whatever',
    lastBlock: 12,
    apiVersion: 'whenever'
  }
});

export default GlobalContext;
