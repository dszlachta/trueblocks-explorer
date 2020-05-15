/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal } from 'components';
import { getServerData, sortArray, sortStrings, handleClick, useArrowKeys, notEmpty } from 'components/utils';
import { calcValue } from 'store';

import { useStatus, LOADING, NOT_LOADING, useMonitorMap } from 'store/status_store';
import { useExplorer } from './Explorer';

// auto-generate: page-settings
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const ExplorerLogs = () => {
  const { explorer, dispatch } = useExplorer();
  const [current, setCurrent] = useState('latest');
  const mocked = useStatus().state.mocked;

  const logsHandler = useCallback(
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

  useArrowKeys(logsHandler, [dispatch, explorer.blockNumber, explorer.transactionIndex, logsHandler]);

  const url = 'http://localhost:8080/logs';
  let query = 'transactions=' + current + '&verbose=10';
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
            columns={logsSchema}
            data={item}
            title={'Log ' + getFieldValue(item, 'id')}
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
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const logsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    copyable: true,
    searchable: true,
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
    searchable: true,
  },
  {
    name: 'Data',
    selector: 'data',
    type: 'string',
  },
  {
    name: 'Log Index',
    selector: 'logIndex',
    type: 'blknum',
  },
  {
    name: 'Removed',
    selector: 'removed',
    type: 'bool',
  },
  {
    name: 'Topics',
    selector: 'topics',
    type: 'CTopicArray',
    searchable: true,
  },
  {
    name: 'Articulated Log',
    selector: 'articulatedLog',
    type: 'CFunction',
    searchable: true,
  },
  {
    name: 'Compressed Log',
    selector: 'compressedLog',
    type: 'string',
  },
  {
    name: 'Transaction Hash',
    selector: 'transactionHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Tx Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'Tx Log Index',
    selector: 'transactionLogIndex',
    type: 'blknum',
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    searchable: true,
  },
];
// auto-generate: schema
