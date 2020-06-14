/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useCallback } from 'react';

import { useStatus } from 'store/status_store';
import { ObjectTable } from 'components';
import { getServerData, useArrowKeys } from 'components/utils';

import { useExplorer } from './Explorer';

import { transactionsSchema } from './ExplorerTransactionsSchema';

// auto-generate: page-settings
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const ExplorerTransactions = () => {
  const { explorer, dispatch } = useExplorer();
  const [current, setCurrent] = useState('latest');
  const mocked = useStatus().state.mocked;

  const transactionsHandler = useCallback(
    (action) => {
      switch (action.type) {
        case 'home':
          setCurrent('first');
          break;
        case 'end':
          setCurrent('latest');
          break;
        case 'up':
        case 'left':
          setCurrent(getFieldValue(explorer, 'id') + '.prev');
          break;
        case 'down':
        case 'right':
          setCurrent(getFieldValue(explorer, 'id') + '.next');
          break;
        default:
          break;
      }
    },
    [explorer.blockNumber, explorer.transactionIndex]
  );

  useArrowKeys(transactionsHandler, [dispatch, explorer.blockNumber, explorer.transactionIndex, transactionsHandler]);

  const url = 'http://localhost:8080/transactions';
  let query = 'transactions=' + current + '&force';
  useEffect(() => {
    getServerData(url, query + (mocked ? "&mockData" : "")).then((theData) => {
      let result = theData.data;
      // EXISTING_CODE
      // EXISTING_CODE
      dispatch({ type: 'update', payload: result });
    });
  }, [query, dispatch, current]);

  // prettier-ignore
  const table =
    explorer &&
    explorer.map((item) => {
      return (
        <Fragment>
          {mocked && <span className="warning"><b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b></span>}
          <ObjectTable
            columns={transactionsSchema}
            data={item}
            title={'Transaction ' + getFieldValue(item, 'id')}
            search={false}
          />
        </Fragment>
      );
    });

  return (
    <div>
      <pre>{url + '?' + query}</pre>
      {table}
    </div>
  );
};

//----------------------------------------------------------------------------
export function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '.' + record.transactionIndex;
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE
