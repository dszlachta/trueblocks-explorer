import React, { useEffect, useState, useContext } from 'react';

import { DataTable, GridTable, ChartTable } from 'components';
import { currentPage, getServerData1, pad2 } from 'components/utils';
import GlobalContext, { useStatusMeta } from 'store';

import './Digests.css';

//---------------------------------------------------------------------------
export const Digests = () => {
  const { digests, dispatch } = useDigests();

  const [tableType, setTableType] = useState(localStorage.getItem('digest-table-type'));
  const [start, setStart] = useState(0);

  const [source] = useState(currentPage().subpage);
  const [query] = useState('modes=index&details&verbose=10');

  const changeTableType = (newType) => {
    localStorage.setItem('digest-table-type', newType);
    setTableType(newType);
  };

  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches[0].items });
    });
    dispatch({ type: 'loading', payload: true });
  }, [source, query, dispatch]);

  useEffect(() => {}, [start]);

  const meta = useStatusMeta();
  const largest = meta.client === 'n/a' ? meta.unripe : meta.client;
  const status = { max: largest, completed: meta.finalized };

  let filtered = digests;
  if (tableType === 'graph-view') filtered = digests.filter((digest) => digest.firstAppearance >= start);

  let view = undefined;
  if (tableType === 'data-view') {
    view = <DataTable data={filtered} columns={digestsSchema} title="Table View" search={false} pagination={true} />;
    //
  } else if (tableType === 'graph-view') {
    view = (
      <ChartTable
        columns={digestsSchema}
        data={filtered}
        title=""
        search={false}
        chartName="digests"
        chartCtx={{ defPair: ['firstTs', 'nAddresses'] }}
        pagination={true}
      />
    );
    //
  } else {
    view = <GridTable data={filtered} columns={digestsSchema} title="Grid View" meta={status} pagination={true} />;
    //
  }

  const next = (start + 3000000) % 9000000;
  return (
    <div>
      <button onClick={() => changeTableType('grid-view')}>grid view</button>
      <button onClick={() => changeTableType('data-view')}>table view</button>
      <button onClick={() => changeTableType('graph-view')}>graph view</button>
      <button onClick={() => setStart(next)}>ignore ddos</button>
      {view}
    </div>
  );
};

//----------------------------------------------------------------------
export const digestsDefault = [];

//----------------------------------------------------------------------
export const digestsReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('digestsState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useDigests = () => {
  return useContext(GlobalContext).digests;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.filename.replace('.bin', '');
    case 'blockRange':
      return record.filename.replace('.bin', '');
    case 'blockSpan':
      return record.latestAppearance - record.firstAppearance + 1;
    case 'duration': {
      let s = record.latestTs - record.firstTs + 1;
      let m = Math.floor(s / 60);
      let h = Math.floor(m / 60);
      const d = Math.floor(h / 24);
      h = h % 24;
      m = m % 60;
      s = s % 60;
      return (
        (d === 0 ? '' : d + 'd ') +
        (d === 0 && h === 0 ? '' : (d === 0 ? h : pad2(h)) + 'h ') +
        pad2(m) +
        'm ' +
        pad2(s) +
        's'
      );
    }
    case 'seconds':
      return record.latestTs - record.firstTs + 1;
    case 'addrsPerBlock': {
      const n = record.latestAppearance - record.firstAppearance + 1;
      return n === 0 ? 0 : record.nAddresses / n;
    }
    case 'appsPerBlock': {
      const n = record.latestAppearance - record.firstAppearance + 1;
      return n === 0 ? 0 : record.nAppearances / n;
    }
    case 'appsPerAddr':
      return record.nAddresses === 0 ? 0 : record.nAppearances / record.nAddresses;
    default:
      break;
  }
}

//----------------------------------------------------------------------------
// auto-generate: schema
export const digestsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Block Range',
    selector: 'blockRange',
    type: 'string',
    hidden: true,
    align: 'center',
    onDisplay: getFieldValue,
  },
  {
    name: 'Block Span',
    selector: 'blockSpan',
    type: 'uint64',
    domain: true,
    range: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Duration',
    selector: 'duration',
    type: 'uint64',
    onDisplay: getFieldValue,
  },
  {
    name: 'Seconds',
    selector: 'seconds',
    type: 'uint64',
    hidden: true,
    domain: true,
    range: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'First Block',
    selector: 'firstAppearance',
    type: 'blknum',
    hidden: true,
    domain: true,
    range: true,
  },
  {
    name: 'Latest Block',
    selector: 'latestAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'nAddrs',
    selector: 'nAddresses',
    type: 'uint64',
    domain: true,
    range: true,
  },
  {
    name: 'nApps',
    selector: 'nAppearances',
    type: 'uint64',
    cn: 'apps',
    domain: true,
    range: true,
  },
  {
    name: 'nAddrs/nBlock',
    selector: 'addrsPerBlock',
    type: 'double',
    decimals: 5,
    domain: true,
    range: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'nApps/nBlock',
    selector: 'appsPerBlock',
    type: 'double',
    decimals: 5,
    domain: true,
    range: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'nApps/nAddress',
    selector: 'appsPerAddr',
    type: 'double',
    decimals: 5,
    domain: true,
    range: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'First TS',
    selector: 'firstTs',
    type: 'timestamp',
    hidden: true,
    domain: true,
    range: true,
  },
  {
    name: 'Latest TS',
    selector: 'latestTs',
    type: 'timestamp',
    hidden: true,
  },
  {
    name: 'Filename',
    selector: 'filename',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Chunk Size',
    selector: 'indexSizeBytes',
    type: 'filesize',
    domain: true,
    range: true,
  },
  {
    name: 'Bloom Size',
    selector: 'bloomSizeBytes',
    type: 'filesize',
    domain: true,
    range: true,
  },
  {
    name: 'Chunk Hash',
    selector: 'index_hash',
    type: 'hash',
    align: 'center',
    cn: 'hashes',
  },
  {
    name: 'Bloom Hash',
    selector: 'bloom_hash',
    type: 'hash',
    align: 'center',
    cn: 'hashes',
  },
];
// auto-generate: schema
