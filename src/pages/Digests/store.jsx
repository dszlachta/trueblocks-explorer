import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import GlobalContext from 'store';

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
export const digestsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    function: (rec) => {
      return rec.filename.replace('.bin', '');
    },
    hidden: true,
    range: false,
    domain: false,
  },
  {
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    hidden: true,
    range: false,
    domain: false,
  },
  {
    name: 'Block Range',
    selector: 'blockRange',
    type: 'string',
    function: (rec) => {
      return rec.filename.replace('.bin', '');
    },
    align: 'center',
    range: false,
    domain: false,
  },
  {
    name: 'Block Span',
    selector: 'blockSpan',
    type: 'number',
    function: (rec) => {
      return rec.latestAppearance - rec.firstAppearance + 1;
    },
    decimals: 0,
    range: true,
    domain: true,
  },
  {
    name: 'Duration',
    selector: 'duration',
    type: 'number',
    function: (rec) => {
      let s = rec.latestTs - rec.firstTs + 1;
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
    },
    decimals: 0,
    range: false,
    domain: false,
  },
  {
    name: 'Seconds',
    selector: 'seconds',
    type: 'number',
    function: (rec) => {
      return rec.latestTs - rec.firstTs + 1;
    },
    decimals: 0,
    hidden: true,
    range: true,
    domain: true,
  },
  {
    name: 'First Block',
    selector: 'firstAppearance',
    type: 'number',
    hidden: true,
    range: true,
    domain: true,
  },
  {
    name: 'Latest Block',
    selector: 'latestAppearance',
    type: 'number',
    hidden: true,
    range: false,
    domain: false,
  },
  {
    name: 'Address Count',
    selector: 'nAddresses',
    type: 'number',
    range: true,
    domain: true,
  },
  {
    name: 'Appearance Count',
    selector: 'nAppearances',
    type: 'number',
    cn: 'apps',
    range: true,
    domain: true,
  },
  {
    name: 'Apps/Address',
    selector: 'appsPerAddr',
    type: 'number',
    function: (record) => {
      return record.nAddresses === 0 ? '-' : record.nAppearances / record.nAddresses;
    },
    decimals: 5,
    range: true,
    domain: true,
  },
  {
    name: 'Apps/Block',
    selector: 'appsPerBlock',
    type: 'number',
    function: (record) => {
      const n = record.latestAppearance - record.firstAppearance + 1;
      return n === 0 ? '-' : record.nAppearances / n;
    },
    decimals: 5,
    range: true,
    domain: true,
  },
  {
    name: 'First TS',
    selector: 'firstTs',
    type: 'timestamp',
    hidden: true,
    range: true,
    domain: true,
  },
  {
    name: 'Latest TS',
    selector: 'latestTs',
    type: 'timestamp',
    hidden: true,
    range: false,
    domain: false,
  },
  {
    name: 'Filename',
    selector: 'filename',
    type: 'string',
    hidden: true,
    range: false,
    domain: false,
  },
  {
    name: 'Chunk Size',
    selector: 'indexSizeBytes',
    type: 'filesize',
    range: true,
    domain: true,
  },
  {
    name: 'Bloom Size',
    selector: 'bloomSizeBytes',
    type: 'filesize',
    range: true,
    domain: true,
  },
  {
    name: 'Chunk Hash',
    selector: 'index_hash',
    type: 'shorthash',
    align: 'center',
    cn: 'hashes',
    range: false,
    domain: false,
  },
  {
    name: 'Bloom Hash',
    selector: 'bloom_hash',
    type: 'shorthash',
    align: 'center',
    cn: 'hashes',
    range: false,
    domain: false,
  },
];

function pad2(n) {
  const str = JSON.stringify(n);
  const fix = Array(2 - str.length)
    .fill()
    .map((_, idx) => idx);
  return fix.reduce((s, i) => {
    console.log(s);
    return '0' + s;
  }, str);
}
