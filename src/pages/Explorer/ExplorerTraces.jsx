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

import { useExplorer } from './Explorer';

// auto-generate: page-settings
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const ExplorerTraces = () => {
  const { explorer, dispatch } = useExplorer();
  const [current, setCurrent] = useState('latest');

  const tracesHandler = useCallback(
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
          setCurrent(getFieldValue(explorer, "id") + '.prev');
          break;
        case 'down':
        case 'right':
          setCurrent(getFieldValue(explorer, "id") + '.next');
          break;
        default:
          break;
      }
    },
    [explorer.blockNumber, explorer.transactionIndex]
  );

  useArrowKeys(tracesHandler, [dispatch, explorer.blockNumber, explorer.transactionIndex, tracesHandler]);

  let query = 'transactions=' + current + '&verbose=10';
  const url = 'http://localhost:8080/traces';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
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
        <ObjectTable
          columns={tracesSchema}
          data={item}
          title={'Trace ' + getFieldValue(item, 'id')}
          search={false}
        />
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
export const tracesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'blockHash',
    selector: 'blockHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'blockNumber',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'subtraces',
    selector: 'subtraces',
    type: 'uint64',
  },
  {
    name: 'traceAddress',
    selector: 'traceAddress',
    type: 'CStringArray',
    searchable: true,
  },
  {
    name: 'transactionHash',
    selector: 'transactionHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'transactionIndex',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'type',
    selector: 'type',
    type: 'string',
    searchable: true,
  },
  {
    name: 'error',
    selector: 'error',
    type: 'string',
  },
  {
    name: 'articulatedTrace',
    selector: 'articulatedTrace',
    type: 'CFunction',
    searchable: true,
  },
  {
    name: 'compressedTrace',
    selector: 'compressedTrace',
    type: 'string',
  },
  {
    name: 'action',
    selector: 'action',
    type: 'CTraceAction',
  },
  {
    name: 'result',
    selector: 'result',
    type: 'CTraceResult',
  },
];
// auto-generate: schema
