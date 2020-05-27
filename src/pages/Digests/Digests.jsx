/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { useEffect, useState, useCallback, useContext } from 'react';

import GlobalContext, { useStatusMeta } from 'store';

import { DataTable } from 'components';
import { getServerData, currentPage, sortArray } from 'components/utils';

import { useStatus, LOADING, NOT_LOADING } from 'store/status_store';
import { GridTable, ChartTable } from 'components';

// EXISTING_CODE
// EXISTING_CODE

import './Digests.css';

//---------------------------------------------------------------------------
export const Digests = () => {
  const { digests, dispatch } = useDigests();

  //const [filtered, setFiltered] = useState(digestsDefault);
  //const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('digestsTag'));
  //const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [start, setStart] = useState(0);
  const [source] = useState(currentPage().subpage);
  const [query] = useState('modes=index&details&verbose=10');

  // prettier-ignore
  const digestsHandler = useCallback(
    (action) => {
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('digestsTag', action.payload);
          break;
        // EXISTING_CODE
        // EXISTING_CODE
        default:
          break;
      }
    },
    []
  );

  useEffect(() => {
    statusDispatch(LOADING);
    getServerData('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'success', payload: theData.data[0].caches[0].items });
      statusDispatch(NOT_LOADING);
    });
  }, [source, query, dispatch]);

  // EXISTING_CODE
  // EXISTING_CODE

  useEffect(() => {}, [start]);

  const meta = useStatusMeta();
  const largest = meta.client === 'n/a' ? meta.unripe : meta.client;
  const status = { max: largest, completed: meta.finalized };

  let filtered = curTag === 'graph-view' ? digests.filter((digest) => digest.firstAppearance >= start) : digests;

  let view = undefined;
  if (curTag === 'data-view') {
    view = (
      <DataTable
        tableName={'digestsTable'}
        data={filtered}
        columns={digestsSchema}
        title="Digests"
        search={false}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        parentHandler={digestsHandler}
      />
    );
    //
  } else if (curTag === 'graph-view') {
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
    // prettier-ignore
    view = (
      <GridTable
        data={filtered}
        columns={digestsSchema}
        title="Grid View"
        meta={status}
        pagination={true}
      />
    );
    //
  }

  return (
    <div>
      <button onClick={() => digestsHandler({ type: 'set-tags', payload: 'grid-view' })}>grid view</button>
      <button onClick={() => digestsHandler({ type: 'set-tags', payload: 'data-view' })}>table view</button>
      <button onClick={() => digestsHandler({ type: 'set-tags', payload: 'graph-view' })}>graph view</button>
      <button onClick={() => setStart((start + 3000000) % 9000000)}>ignore ddos</button>
      {view}
    </div>
  );
};

// auto-generate: page-settings
// auto-generate: page-settings

//----------------------------------------------------------------------
function refreshData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const digestsDefault = [];

//----------------------------------------------------------------------
export const digestsReducer = (state, action) => {
  let ret = state;
  switch (action.type.toLowerCase()) {
    /*
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
    */
    case 'success':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  return ret;
};

//----------------------------------------------------------------------
export const useDigests = () => {
  return useContext(GlobalContext).digests;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  if (!record) return '';
  // EXISTING_CODE
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
  // EXISTING_CODE
  return record[fieldName];
}

// EXISTING_CODE
const recordIconList = [];
const defaultSort = [];
const defaultSearch = [];
// EXISTING_CODE

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
    domain: true,
    range: true,
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

//-----------------------------------------------------
export function pad2(n) {
  const str = JSON.stringify(n);
  if (str.length >= 2) return str;
  const fix = Array(2 - str.length)
    .fill()
    .map((_, idx) => idx);
  return fix.reduce((s, i) => {
    return '0' + s;
  }, str);
}
