import React, { useEffect, useState, useCallback } from 'react';
import Mousetrap from 'mousetrap';

import { useExplorer } from './Explorer';
import { ObjectTable } from 'components';
import { getServerData, handleClick } from 'components/utils';

//----------------------------------------------------------------------
export const ExplorerTransactions = () => {
  const [schema] = useState(transactionsSchema);
  const [current, setCurrent] = useState('');
  const { explorer, dispatch } = useExplorer();
  const [fetching, setFetch] = useState(false);

  const handleNavigate = useCallback(
    (action) => {
      console.log(action);
      switch (action.type) {
        case 'first':
          setCurrent('46147.0');
          break;
        case 'last':
          setCurrent('latest');
          break;
        case 'previous':
          setCurrent(explorer.blockNumber + '.' + explorer.transactionIndex + '.prev');
          break;
        case 'next':
          setCurrent(explorer.blockNumber + '.' + explorer.transactionIndex + '.next');
          break;
        default:
          break;
      }
    },
    [explorer.blockNumber, explorer.transactionIndex]
  );

  let query = 'transactions=' + (current === '' ? 'latest' : current);
  query += '&verbose=10&force';
  const url = 'http://localhost:8080/transactions';
  useEffect(() => {
    setFetch(true);
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData[0] });
    });
    setFetch(false);
  }, [query, dispatch, current]);

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
  }, [dispatch, explorer.blockNumber, explorer.transactionIndex, handleNavigate]);

  if (fetching) return <pre>Fetching...</pre>;
  if (explorer.blockNumber === undefined) return <pref>fetching...</pref>;
  return (
    <div>
      <pre>{query}</pre>
      <ObjectTable
        columns={schema}
        data={explorer}
        title={'Transaction ' + explorer.blockNumber + '.' + explorer.transactionIndex}
        search={false}
      />
    </div>
  );
};

function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const transactionsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
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
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
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
