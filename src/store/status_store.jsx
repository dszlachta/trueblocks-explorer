import { useContext } from 'react';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const statusDefault = {
  data: [
    {
      trueblocks_version: '',
      client_version: '',
      scraper_version: '',
    },
  ],
  meta: {
    ripe: 0,
    unripe: 0,
    staging: 0,
    finalized: 0,
    client: 0,
  },
  loading: true,
};

//----------------------------------------------------------------------
export const statusReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'success':
      return { ...action.payload, loading: false };
    case 'fail':
      return { ...statusDefault, loading: false };
    default:
      return state;
  }
};

//----------------------------------------------------------------------
export const useStatus = () => {
  return useContext(GlobalContext).status;
};
export const useStatusData = () => {
  const { state } = useStatus();
  if (!state) {
    return statusDefault.data[0];
  }
  if (!state || !state.data) {
    return statusDefault.data[0];
  }
  if (!state || !state.data || !state.data[0]) {
    return statusDefault.data[0];
  }
  if (!state || !state.data || !state.data[0] || state.error) {
    return statusDefault.data[0];
  }
  return state.data[0];
};
export const useStatusMeta = () => {
  const { state } = useStatus();
  if (!state || !state.data || !state.data[0] || state.error) return statusDefault.meta;
  return state.meta;
};
