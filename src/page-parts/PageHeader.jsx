import React from 'react';

import { Link } from 'react-router-dom';
import { useStatusData, useStatusMeta } from 'store';
import { fmtNum } from 'components/utils';

import logo from 'assets/img/logo.png';
import './PageHeader.css';

//-----------------------------------------------------
export const PageHeader = () => {
  return (
    <div className="page-header">
      <PageHeaderLeft />
      <PageHeaderUpperRight />
      <PageHeaderLowerRight />
    </div>
  );
};

//-----------------------------------------------------
const PageHeaderLeft = () => {
  return (
    <div className="left-header">
      <Link to="/">
        <img className="logo" alt={logo} src={logo} />
      </Link>
      <div>{'TrueBlocks Account Explorer'}</div>
    </div>
  );
};

const isOkay = (data, name) => {
  let result = false;
  let errMsg = '';
  switch (name) {
    case 'trueblocks':
      result = !data.is_testing && data.trueblocks_version !== '';
      errMsg = result ? 'X' : 'Y';
      break;
    case 'node':
      result = data.client_version !== '';
      errMsg = result ? 'Z' : 'Q';
      break;
    case 'scraper':
      result = data.is_scraping;
      errMsg = result ? 'A' : 'B';
      break;
    case 'sharing':
      result = false;
      errMsg = result ? 'PP' : 'DD';
      break;
    default:
      break;
  }
  return [result, errMsg];
};

//-----------------------------------------------------
const PageHeaderUpperRight = () => {
  const data = useStatusData();
  const [api, apiMsg] = isOkay(data, 'trueblocks');
  const [node, nodeMsg] = isOkay(data, 'node');
  const [scraper, scraperMsg] = isOkay(data, 'scraper');
  const [sharing, sharingMsg] = isOkay(data, 'sharing');

  return (
    <div className="right-top">
      <Pill text="api" status={api} errMsg={apiMsg} decorate={true} route="/settings/api" />
      <Pill text="node" status={node} errMsg={nodeMsg} decorate={true} route="/settings/node" />
      <Pill text="scraper" status={scraper} errMsg={scraperMsg} decorate={true} route="/settings/scraper" />
      <Pill text="sharing" status={sharing} errMsg={sharingMsg} decorate={true} route="/settings/sharing" />
    </div>
  );
};

//-----------------------------------------------------
const Pill = ({ text, status, errMsg = 'unavailable', decorate, route }) => {
  if (route !== undefined && route !== '') {
    return (
      <Link to={route}>
        <div className={'pill ' + (status ? 'okay' : 'warning') + (!status && !decorate ? ' strikeout' : '')}>
          {text + ' ' + (decorate ? (status ? 'ok' : ' : ' + errMsg) : '')}
        </div>
      </Link>
    );
  }

  return (
    <div className={'pill ' + (status ? 'okay' : 'warning') + (!status && !decorate ? ' strikeout' : '')}>
      {text + (decorate ? (status ? ' ok' : ' unavailable') : '')}
    </div>
  );
};

//-----------------------------------------------------
const PageHeaderLowerRight = () => {
  const meta = useStatusMeta();
  const f = meta.finalized;
  const fd = meta.client - f;
  const s = meta.staging;
  const sd = meta.client - s;
  const u = max(meta.unripe, meta.ripe);
  const ud = meta.client - u;
  const stats = (
    <span>
      {f} ({fmtNum(fd)}) / {s} ({fmtNum(sd)}) / {u} ({fmtNum(ud)}) / {meta.client} -{' '}
    </span>
  );

  let secs = 0;
  const nowStr = new Date().toISOString();
  // console.log('nowStr: ', nowStr);
  const nowDate = str2Date(nowStr);
  // console.log('nowDate: ', nowDate);
  const nowSecs = nowDate.getTime(); //date2Secs(nowDate);
  // console.log('nowSecs: ', nowSecs);
  // const newDate = new Date(nowSecs);
  // console.log('newDate: ', newDate);

  const data = useStatusData();
  let thenStr = 0;
  let thenSecs = 0;
  // console.log(status.data[0]);
  if (data.date) {
    thenStr = data.date.replace(/ UTC/, '.000Z').replace(/ /, 'T');
    // console.log('thenStr: ', thenStr);
    const thenDate = str2Date(thenStr);
    // console.log('thenDate: ', thenDate);
    thenSecs = thenDate.getTime(); //date2Secs(thenDate);
    // console.log('thenSecs: ', thenSecs);
    // const new2Date = new Date(thenSecs);
    // console.log('new2Date: ', new2Date);
    secs = (nowSecs - thenSecs) / 1000;
  }

  return (
    <div className="right-bottom">
      <div>
        {meta.client > 0 ? (
          <div>
            {stats} - {secs} seconds ago
          </div>
        ) : (
          secs
        )}
      </div>
    </div>
  );
};

//-----------------------------------------------------
function max(a, b) {
  return a > b ? a : b;
}

//-----------------------------------------------------
function str2Date(dateTimeIn = '2020-02-02 02:02:02.') {
  dateTimeIn = dateTimeIn.replace(/T/, ' ');
  let dateTime = dateTimeIn.split(' ');
  if (dateTime.length < 1) return new Date();

  var date = dateTime[0].split('-');
  var yyyy = date[0];
  var mm = date[1];
  var dd = date[2];
  //  console.log(yyyy, mm, dd);

  if (dateTime.length < 2) return new Date(yyyy, mm, dd, 0, 0, 0);

  var time = dateTime[1].split(':');
  var h = time[0];
  var m = time[1];
  var x = time[2].split('.'); //get rid of that 00.0;
  var s = x[0];
  //  console.log(h, m, s);

  const ret = new Date(yyyy, mm, dd, h, m, s);
  //  console.log('ret: ', ret);
  return ret;
}

// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }
