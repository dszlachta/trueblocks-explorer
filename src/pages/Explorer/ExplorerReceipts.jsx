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
export const ExplorerReceipts = () => {
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

  let query = 'transactions=' + current + '&verbose=10';
  const url = 'http://localhost:8080/receipts';
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
          columns={receiptsSchema}
          data={item}
          title={'Receipt ' + getFieldValue(item, 'id')}
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
export const receiptsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
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
    name: 'Contract Address',
    selector: 'contractAddress',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Cumulative Gas',
    selector: 'cumulativeGasUsed',
    type: 'wei',
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
    searchable: true,
  },
  {
    name: 'Logs',
    selector: 'logs',
    type: 'CLogEntryArray',
  },
  {
    name: 'Logs Bloom',
    selector: 'logsBloom',
    type: 'string',
  },
  {
    name: 'Root',
    selector: 'root',
    type: 'bytes32',
  },
  {
    name: 'Status',
    selector: 'status',
    type: 'uint32',
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Transaction Hash',
    selector: 'transactionHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Transaction Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
];
// auto-generate: schema
