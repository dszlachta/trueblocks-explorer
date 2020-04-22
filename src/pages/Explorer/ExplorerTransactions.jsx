import React, { useEffect, useState } from 'react';
import Mousetrap from 'mousetrap';

import { useExplorer } from './Explorer';
import { ObjectTable } from 'components';
import { getServerData } from 'components/utils';

//----------------------------------------------------------------------
export const ExplorerTransactions = () => {
  const [schema] = useState(transactionsSchema);
  const [current, setCurrent] = useState('');
  const { explorer, dispatch } = useExplorer();
  const [fetching, setFetch] = useState(false);

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
    Mousetrap.bind(['e >'], function () {
      const p = 'latest';
      setCurrent(p);
    });
    Mousetrap.bind(['e n'], function () {
      const p = explorer.blockNumber + '.' + explorer.transactionIndex + '.next';
      setCurrent(p);
    });
    Mousetrap.bind(['e p'], function () {
      const p = explorer.blockNumber + '.' + explorer.transactionIndex + '.prev';
      setCurrent(p);
    });
    Mousetrap.bind(['e <'], function () {
      const p = explorer.blockNumber - 1 + '.0';
      setCurrent(p);
    });
    return () => {
      Mousetrap.unbind(['e >']);
      Mousetrap.unbind(['e n']);
      Mousetrap.unbind(['e p']);
      Mousetrap.unbind(['e <']);
    };
  }, [dispatch, explorer.blockNumber, explorer.transactionIndex]);

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
        pagination={true}
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
