/*
import React, { useEffect, useState, useContext } from 'react';

import { DataTable, GridTable, ChartTable } from 'components';
import { currentPage, getServerData } from 'components/utils';
import GlobalContext, { useStatusMeta } from 'store';

import './Monitors.css';

//---------------------------------------------------------------------------
export const MonitorsView = ({ address }) => {
  const { txHistory, dispatch } = useState({});

  const [tableType, setTableType] = useState(localStorage.getItem('monitorview-table-type'));
  const changeTableType = (newType) => {
    localStorage.setItem('digest-table-type', newType);
    setTableType(newType);
  };

  const [start, setStart] = useState(0);
  const [source] = useState(currentPage().subpage);
  const [query] = useState('modes=index&details&verbose=10');

  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    getServerData('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches[0].items });
    });
    dispatch({ type: 'loading', payload: true });
  }, [source, query, dispatch]);

  useEffect(() => {}, [start]);

  const meta = useStatusMeta();
  const largest = meta.client === 'n/a' ? meta.unripe : meta.client;
  const status = { max: largest, completed: meta.finalized };

  let filtered = txHistory;
  if (tableType === 'graph-view') filtered = txHistory.filter((digest) => digest.firstAppearance >= start);

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
        chartName="txHistory"
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
  return useContext(GlobalContext).txHistory;
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
        (d === 0 && h === 0 ? '' : (d === 0 ? h : p ad2(h)) + 'h ') +
        p ad2(m) +
        'm ' +
        p ad2(s) +
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
  },
  {
    name: 'Bloom Hash',
    selector: 'bloom_hash',
    type: 'hash',
    align: 'center',
    cn: 'hashes',
    searchable: true,
  },
];
// auto-generate: schema

 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick } from 'components/utils';
import { navigate, notEmpty, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';
import { data } from './data';

import './Monitors.css';

//---------------------------------------------------------------------------
export const MonitorsView = ({ address }) => {
  return (
    <div>
      <DataTable
        name={'accountView'}
        data={data}
        columns={viewSchema}
        title={'Transactions for account ' + address + '...'}
        search={true}
        searchFields={['from', 'to', 'hash']}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={null}
      />
    </div>
  );
};

// auto-generate: page-settings
const recordIconList = [
  'ExternalLink',
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'Explorer/None',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['tags', 'address'];
const defaultSearch = ['tags', 'address'];
// auto-generate: page-settings

//----------------------------------------------------------------------
function refreshData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    result = theData.data[0].caches[0].items;
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const monitorsDefault = [];

//----------------------------------------------------------------------
export const monitorsReducer = (state, action) => {
  let ret = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = ret.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          ret = replaceRecord(ret, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  return ret;
};

//----------------------------------------------------------------------
export const useMonitors = () => {
  return useContext(GlobalContext).monitors;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.hash;
    case 'marker':
      return record.blockNumber + '.' + record.transactionIndex;
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
/*
    case 'update':
      record[action.fieldName] = action.value;
      console.log('record: ', record);
      ret = replaceRecord(ret, record, action.id);
      console.log('ret: ', ret.find((p) => p.id === action.id));
*/
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const viewSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
    width: 2,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    searchable: true,
    hidden: true,
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
    searchable: true,
    hidden: true,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Tx Index',
    selector: 'transactionIndex',
    type: 'blknum',
    hidden: true,
    width: 2,
  },
  {
    name: 'Tx Marker',
    selector: 'marker',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Nonce',
    selector: 'nonce',
    type: 'uint64',
    hidden: true,
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
    width: 2,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    searchable: true,
    width: 2,
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
    hidden: true,
  },
  {
    name: 'isError',
    selector: 'isError',
    type: 'uint64',
    hidden: true,
  },
  {
    name: 'isInternal',
    selector: 'isInternal',
    type: 'uint64',
    hidden: true,
  },
  {
    name: 'Receipt',
    selector: 'receipt',
    type: 'CReceipt',
    hidden: true,
  },
  {
    name: 'Articulated Tx',
    selector: 'articulatedTx',
    type: 'CFunction',
    searchable: true,
    hidden: true,
  },
  {
    name: 'Compressed Tx',
    selector: 'compressedTx',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
    hidden: true,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
