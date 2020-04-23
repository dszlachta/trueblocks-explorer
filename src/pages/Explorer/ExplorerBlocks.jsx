import React, { useEffect, useState, useCallback } from 'react';
import Mousetrap from 'mousetrap';

import { useExplorer } from './Explorer';
import { ObjectTable } from 'components';
import { getServerData, handleClick } from 'components/utils';

//----------------------------------------------------------------------
export const ExplorerBlocks = () => {
  const [schema] = useState(blocksSchema);
  const [block, setBlock] = useState(-1);
  const { explorer, dispatch } = useExplorer();
  const [fetching, setFetch] = useState(false);

  const handleNavigate = useCallback(
    (action) => {
      console.log(action);
      switch (action.type) {
        case 'first':
          setBlock(1);
          break;
        case 'last':
          setBlock(-1);
          break;
        case 'previous':
          setBlock(explorer.blockNumber - 1);
          break;
        case 'next':
          setBlock(explorer.blockNumber + 1);
          break;
        default:
          break;
      }
    },
    [explorer.blockNumber]
  );

  let query = 'hashes_only&blocks=' + (block === -1 ? 'latest' : block);
  query += '&verbose=10';
  const url = 'http://localhost:8080/blocks';
  useEffect(() => {
    setFetch(true);
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData[0] });
    });
    setFetch(false);
  }, [query, dispatch, block]);

  useEffect(() => {
    Mousetrap.bind(['meta+shift+home'], (e) => handleClick(null, handleNavigate, { type: 'first' }));
    Mousetrap.bind(['meta+shift+end'], (e) => handleClick(null, handleNavigate, { type: 'last' }));
    Mousetrap.bind(['home'], (e) => handleClick(null, handleNavigate, { type: 'first' }));
    Mousetrap.bind(['end'], (e) => handleClick(null, handleNavigate, { type: 'last' }));
    Mousetrap.bind(['up'], (e) => handleClick(null, handleNavigate, { type: 'previous' }));
    Mousetrap.bind(['left'], (e) => handleClick(null, handleNavigate, { type: 'previous' }));
    Mousetrap.bind(['down'], (e) => handleClick(null, handleNavigate, { type: 'next' }));
    Mousetrap.bind(['right'], (e) => handleClick(null, handleNavigate, { type: 'next' }));
    return () => {
      Mousetrap.unbind(['meta+shift+home']);
      Mousetrap.unbind(['meta+shift+end']);
      Mousetrap.unbind(['home']);
      Mousetrap.unbind(['end']);
      Mousetrap.unbind(['up']);
      Mousetrap.unbind(['left']);
      Mousetrap.unbind(['down']);
      Mousetrap.unbind(['right']);
    };
  }, [dispatch, explorer.blockNumber, handleNavigate]);

  if (fetching) return <pre>fetching...</pre>;
  return (
    <div>
      <pre>{query}</pre>
      <ObjectTable columns={schema} data={explorer} title={'Block ' + explorer.blockNumber} search={false} />
    </div>
  );
};

//----------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  console.log('fieldName: ', fieldName);
  switch (fieldName) {
    case 'id':
      console.log('ret: ', record.blockNumber);
      return record.blockNumber;
    default:
      break;
  }
}

// auto-generate: schema
export const blocksSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
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
  },
  {
    name: 'Parent Hash',
    selector: 'parentHash',
    type: 'hash',
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
  },
  {
    name: 'Light',
    selector: 'light',
    type: 'bool',
  },
];
// auto-generate: schema
