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
export const ExplorerBlocks = () => {
  const { explorer, dispatch } = useExplorer();
  const [current, setCurrent] = useState('latest');

  const blocksHandler = useCallback(
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

  useArrowKeys(blocksHandler, [dispatch, explorer.blockNumber, explorer.transactionIndex, blocksHandler]);

  const url = 'http://localhost:8080/blocks';
  let query = 'blocks=' + current + '&hashes_only&verbose=10';
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
          columns={blocksSchema}
          data={item}
          title={'Block ' + getFieldValue(item, 'id')}
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
      return record.blockNumber;
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const blocksSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Parent Hash',
    selector: 'parentHash',
    type: 'hash',
    searchable: true,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
  {
    name: 'Transactions',
    selector: 'transactions',
    type: 'CTransactionArray',
    align: 'wordwrap',
  },
  {
    name: 'Difficulty',
    selector: 'difficulty',
    type: 'uint64',
  },
  {
    name: 'Miner',
    selector: 'miner',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Gas Limit',
    selector: 'gasLimit',
    type: 'gas',
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
  },
  {
    name: 'Price',
    selector: 'price',
    type: 'double',
    decimals: 2,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Light',
    selector: 'light',
    type: 'bool',
  },
];
// auto-generate: schema
