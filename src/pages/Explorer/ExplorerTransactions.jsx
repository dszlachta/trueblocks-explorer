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
export const ExplorerTransactions = () => {
  const { explorer, dispatch } = useExplorer();
  const [current, setCurrent] = useState('latest');

  const clickHandler = useCallback(
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

  useArrowKeys(clickHandler, [dispatch, explorer.blockNumber, explorer.transactionIndex, clickHandler]);

  let query = 'transactions=' + current + '&verbose=10&force';
  const url = 'http://localhost:8080/transactions';
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
          columns={transactionsSchema}
          data={item}
          title={'Transaction ' + getFieldValue(item, 'id')}
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
      return record.blockNumber + '.' + record.transactionIndex;
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const transactionsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
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
  },
  {
    name: 'Tx Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'Nonce',
    selector: 'nonce',
    type: 'uint64',
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    searchable: true,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'wei',
  },
  {
    name: 'Gas',
    selector: 'gas',
    type: 'gas',
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'gas',
  },
  {
    name: 'Input',
    selector: 'input',
    type: 'string',
  },
  {
    name: 'isError',
    selector: 'isError',
    type: 'uint64',
  },
  {
    name: 'isInternal',
    selector: 'isInternal',
    type: 'uint64',
  },
  {
    name: 'Receipt',
    selector: 'receipt',
    type: 'CReceipt',
  },
  {
    name: 'Articulated Tx',
    selector: 'articulatedTx',
    type: 'CFunction',
    searchable: true,
  },
  {
    name: 'Compressed Tx',
    selector: 'compressedTx',
    type: 'string',
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
  },
];
// auto-generate: schema
