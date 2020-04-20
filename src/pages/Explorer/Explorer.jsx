import React, { useContext, useEffect, useState } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';
import { currentPage, getServerData } from 'components/utils';

import { ObjectTable } from 'components';

import { ExplorerBlocks } from './ExplorerBlocks';
import { ExplorerTransactions } from './ExplorerTransactions';
import { transactionsSchema } from './ExplorerTransactions';
import { receiptsSchema } from './ExplorerReceipts';
import { logsSchema } from './ExplorerLogs';
import { tracesSchema } from './ExplorerTraces';
import { dispatch } from 'd3';

//----------------------------------------------------------------------
export const Explorer = () => {
  switch (currentPage().subpage) {
    case 'blocks':
      return <ExplorerBlocks />;
    case 'transactions':
      return <ExplorerTransactions />;
    default:
      break;
  }
  return <div>{'Actual Explorer Page: ' + currentPage().page + ' ' + currentPage().subpage}</div>;
};

//----------------------------------------------------------------------
export const explorerDefault = [];

//----------------------------------------------------------------------
export const explorerReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('otherState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useExplorer = () => {
  return useContext(GlobalContext).explorer;
};

// auto-generate: schema
export const explorerSchema = [
  {
    name: 'ABIs',
    selector: 'abis',
    type: 'CAbi',
  },
  {
    name: 'Blocks',
    selector: 'blocks',
    type: 'CBlock',
  },
  {
    name: 'Functions',
    selector: 'functions',
    type: 'CFunction',
  },
  {
    name: 'Logs',
    selector: 'logs',
    type: 'CLogEntry',
  },
  {
    name: 'Parameters',
    selector: 'parameters',
    type: 'CParameter',
  },
  {
    name: 'Receipts',
    selector: 'receipts',
    type: 'CReceipt',
  },
  {
    name: 'Trace Actions',
    selector: 'traceActions',
    type: 'CTraceAction',
  },
  {
    name: 'Trace Results',
    selector: 'traceResults',
    type: 'CTraceResult',
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTrace',
  },
  {
    name: 'Transactions',
    selector: 'transactions',
    type: 'CTransaction',
  },
];
// auto-generate: schema
