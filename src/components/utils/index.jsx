import React from 'react';

export const Spacer = ({ cols = 1 }) => {
  const wids = Array(cols)
    .fill()
    .map(() => '1fr')
    .join(' ');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: { wids },
      }}
    >
      <br />
    </div>
  );
};

export const systemCheck = (data, name) => {
  if (!data || data.loading) return false;
  let result = false;
  switch (name) {
    case 'api':
      result = !data.is_testing && data.trueblocks_version !== '';
      break;
    case 'node':
      result = data.client_version !== '' && data.client_version !== 'Not running';
      break;
    case 'scraper':
      result = data.is_scraping;
      break;
    case 'sharing':
      result = false;
      break;
    case 'system':
      result = systemCheck(data, 'api') && systemCheck(data, 'node');
      break;
    default:
      break;
  }
  return result;
};

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

/**
 *
 * stateFromStorage
 * retreive from local storage with a default
 *
 * @param {key} the key to retreive from local storage
 * @param {defaultState} the value to return if key is not in local storage
 */
export const stateFromStorage = (key, defaultState, asString = false) => {
  const storage = localStorage.getItem(key);
  if (storage === null) return defaultState;
  if (asString) return storage;
  return JSON.parse(storage);
};

//----------------------------------------------------------------------
export const handleClick = (e, dispatch, action = {}) => {
  if (e) e.preventDefault();
  if (dispatch) dispatch(action);
};

//----------------------------------------------------------------------
export const fetchFromServer = (url, onSuccess, onFail) => {
  fetch(url)
    .then((res) => {
      if (res.status !== 200) throw new Error('fetch to ' + url + ' failed.');
      return res.text();
    })
    .then((txt) => {
      if (onSuccess) onSuccess(txt);
    })
    .catch((err) => {
      if (onFail) {
        onFail(err.name + ': ' + err.message);
      }
    });
};

//----------------------------------------------------------------------------
export async function getServerData(route, query) {
  const url = route + '?' + query;
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

//----------------------------------------------------------------------------
export async function getServerData1(route, query) {
  const url = route + '?' + query;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

//----------------------------------------------------------------------------
export const notEmpty = (fieldName, value) => {
  return value === '' ? 'field may not be empty' : '';
};

//----------------------------------------------------------------------
export const dataFetcher = (url) =>
  fetch(url).then((r) => {
    return r.json();
  });

/*
export const Logo = () => (
  <div
    style={{
      margin: "1rem auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
  Centered in window
  </div>
);
*/
//----------------------------------------------------------------------
export const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

//----------------------------------------------------------------------
export const currentPage = () => {
  const parts = window.location.pathname.split('/');
  const query = window.location.search.substr(1).split('&');
  const params = query.map((item) => {
    const p = item.split('=');
    return { name: p[0], value: p[1] };
  });
  if (parts.length < 2 || parts[1] === '') parts[1] = 'dashboard';
  if (parts.length < 3) parts[2] = '';
  return { page: parts[1], subpage: parts[2], params: params };
};

//---------------------------------------------------------------
export const formatFieldByType = (type, value, decimals = 0) => {
  if (type[0] === 'C') return 'Unknown class: ' + JSON.stringify(value, null, 2);
  switch (type) {
    case 'spacer':
      value = '';
      break;
    case 'function':
      if (typeof value === 'function') value = JSON.stringify(value, null, 2);
      break;
    case 'object':
      if (typeof value === 'object') value = JSON.stringify(value, null, 2);
      break;
    case 'array':
      value = JSON.stringify(value);
      break;
    case 'bool':
      value = value ? 'true' : 'false';
      break;
    case 'filesize':
      value = humanFileSize(value, true);
      break;
    case 'uint64':
      const isZero = value === '0' || value === 0;
      value = isZero ? '-' : fmtNum(value, decimals, decimals === 0 ? '' : ' ');
      break;
    case 'hash':
      value = value ? value.substr(0, 6) + '...' + value.substr(value.length - 4, value.length - 1) : '';
      break;
    case 'timestamp':
    case 'string':
    default:
      break;
  }
  //console.log('out: ', type, value);
  return value;
};

//----------------------------------------------------------------------------
export const sortArray = (array, fArray, dArray) => {
  if (fArray.size === 0) return array;
  if (!array || array.size === 0) return array;
  array.sort(function (a, b) {
    for (var index = 0; index < fArray.length; index++) {
      let aVal = a[fArray[index]];
      let bVal = b[fArray[index]];
      let result = (aVal > bVal ? 1 : aVal < bVal ? -1 : 0) * (dArray[index] ? 1 : -1);
      if (result) return result;
    }
    return 0;
  });
  return array;
};

//----------------------------------------------------------------------------
export const humanFileSize = (numInBytes) => {
  numInBytes = fmtNum(numInBytes).split('.')[0].replace(/[,.]/g, ''); // clean it
  if (numInBytes === 0) return '0 B';
  // return numInBytes;
  const si = true;
  var thresh = si ? 1000 : 1024;
  if (Math.abs(numInBytes) < thresh) {
    return numInBytes + ' bytes';
  }
  var units = si
    ? ['kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  do {
    numInBytes /= thresh;
    ++u;
  } while (Math.abs(numInBytes) >= thresh && u < units.length - 1);
  return numInBytes.toFixed(2) + ' ' + units[u];
};

//----------------------------------------------------------------------------
export const fmtNum = (n, dd = 0, type = '', delim = ',', dec = '.') => {
  if (n === 0) return '0';
  if (!n) return '';
  const number = type === '' ? n.toString() : n.toFixed(dd);
  const prefix = type === '' ? '' : type === '$' ? type + ' ' : '';
  const postfx = type === '' ? '' : type === '$' ? '' : ' ' + type;

  let ret = number.replace('.', dec).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + delim);
  if (!ret.includes(dec)) return prefix + ret + postfx;

  const parts = ret.split(dec);
  parts[1] = dec === '.' ? parts[1].replace(/,/g, '') : parts[1].replace(/\./g, '');
  ret = parts[0] + dec + parts[1];
  return prefix + ret + postfx;
};

/*
TESTING
  const check = (n, expected) => {
    return (
      <div style={{ width: '60%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div>{n}</div>
        <div className={n === expected ? "" : "warning"}>{expected}</div>
      </div>
    );
  }

  <div style={{ margin: '200px', fontSize: '1em' }}>
    {check(fmtNum(0), "0")}
    {check(fmtNum(2665), "2,665")}
    {check(fmtNum(-102665), "-102,665")}
    {check(fmtNum(111102665), "111,102,665")}
    {check(fmtNum(1240.52345), "1,240.52345")}
    {check(fmtNum(1000240.5121909812), "1,000,240.5121909812")}
    {check(fmtNum("100100"), "100,100")}
    {check(fmtNum(1000000000000001), "1,000,000,000,000,001")}
    {check(fmtNum(10000000000000001), "10,000,000,000,000,001")}
    {check(fmtNum(100000000000000001), "100,000,000,000,000,001")}
    {check(fmtNum(1000000000000000001), "1,000,000,000,000,000,001")}
    {check(fmtNum(2665, 0, '$'), "$ 2,665")}
    {check(fmtNum(2665, 2, '$'), "$ 2,665.00")}
    {check(fmtNum(2665.0123, 0, '$'), "$ 2,665")}
    {check(fmtNum(102665, 5, '$'), "$ 102,665.00000")}
    {check(fmtNum(1234567.0123456789, 0, '€', '.', ','), "1.234.567 €")}
    {check(fmtNum(1234567, 2, '€', '.', ','), "1.234.567,00 €")}
    {check(fmtNum(1234567.0123456789, 2, '€', '.', ','), "1.234.567,01 €")}
    {check(fmtNum(1234567.0123456789, 6, '€', '.', ','), "1.234.567,012346 €")}
  </div>
*/
