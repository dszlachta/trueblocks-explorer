import React, { useEffect, useState } from 'react';
import Mousetrap from 'mousetrap';

import { useExplorer } from './Explorer';
import { ObjectTable } from 'components';
import { getServerData } from 'components/utils';

//----------------------------------------------------------------------
export const ExplorerBlocks = () => {
  const [schema] = useState(blocksSchema);
  const [block, setBlock] = useState(-1);
  const { explorer, dispatch } = useExplorer();
  const [fetching, setFetch] = useState(false);

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
    Mousetrap.bind(['e 0'], function () {
      setBlock(1);
    });
    Mousetrap.bind(['e n'], function () {
      setBlock(explorer.blockNumber + 1);
    });
    Mousetrap.bind(['e p'], function () {
      setBlock(explorer.blockNumber - 1);
    });
    Mousetrap.bind(['e >'], function () {
      setBlock(0);
    });
    return () => {
      Mousetrap.unbind(['e 0']);
      Mousetrap.unbind(['e n']);
      Mousetrap.unbind(['e p']);
      Mousetrap.unbind(['e >']);
    };
  }, [dispatch, explorer.blockNumber]);

  if (fetching) return <pre>fetching...</pre>;
  return (
    <div>
      <pre>{query}</pre>
      <ObjectTable
        columns={schema}
        data={explorer}
        title={'Block ' + explorer.blockNumber}
        search={false}
        compact={true}
        paginate={true}
      />
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
    name: 'Finalzied',
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
