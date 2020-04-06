//-----------------------------------------------------
export const stateFromStorage = (key, defaultState) => {
  const storage = localStorage.getItem(key);
  if (storage === null) return defaultState;
  return JSON.parse(storage);
};

//----------------------------------------------------------------------
export const handleClick = (e, dispatch, action = {}) => {
  e.preventDefault();
  dispatch(action);
};

//----------------------------------------------------------------------
export const getHelpMarkdown = (url, onSuccess, onFail) => {
  fetch(url)
    .then((r) => {
      if (r.status !== 200) throw new Error('fetch to ' + url + ' failed.');
      return r.text();
    })
    .then((t) => {
      if (onSuccess)
        onSuccess(t);
    })
    .catch((err) => {
      if (onFail) {
        onFail(err.name + ": " + err.message);
      } else if (onSuccess) {
        onSuccess(err.name + ": " + err.message);
      }
    });
};

//----------------------------------------------------------------------------
export async function getServerData(route, query) {
  const url = route + "?" + query;
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
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
  if (parts.length < 3 || parts[2] === '') parts[2] = '';
  return { page: parts[1], subpage: parts[2], params: params };
};

//---------------------------------------------------------------
export const formatFieldByType = (type, value, countArrays) => {
  //console.log('formatFieldByType: ', type, value);
  switch (type) {
    case 'object':
      if (typeof value === 'object') value = JSON.stringify(value, null, 2);
      break;
    case 'array':
      if (countArrays) {
        value = countArrayItems(value);
      } else {
        value = JSON.stringify(value);
      }
      break;
    case 'bool':
      value = value ? 'true' : 'false';
      break;
    case 'filesize':
      value = humanFileSize(value, true);
      break;
    case 'number':
      value = fmtNum(value);
      break;
    case 'string':
    default:
      break;
  }
  //console.log('out: ', type, value);
  return value;
};

//---------------------------------------------------------------
const countArrayItems = (array) => {
  let count = 0;
  Object.keys(array).map((v) => {
    count++;
    return true;
  });
  return count;
};

//----------------------------------------------------------------------------
//https://flaviocopes.com/react-hook-useeffect/
export const sortArray = (array, fieldArray, orderArray) => {
  array.sort(function (a, b) {
    const aValue = fieldArray
      .map((f) => {
        return a[f];
      })
      .join(',');
    const bValue = fieldArray
      .map((f) => {
        return b[f];
      })
      .join(',');
    if (orderArray[0]) {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return bValue > aValue ? 1 : bValue < aValue ? -1 : 0;
    }
  });
  return array;
};

//----------------------------------------------------------------------------
export const humanFileSize = (numInBytes) => {
  numInBytes = fmtNum(numInBytes).replace(/[,.]/g, ''); // clean it
  if (numInBytes === 0) return '0 B';
  // return numInBytes;
  const si = true;
  var thresh = si ? 1000 : 1024;
  if (Math.abs(numInBytes) < thresh) {
    return numInBytes + ' B';
  }
  var units = si
    ? ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
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
