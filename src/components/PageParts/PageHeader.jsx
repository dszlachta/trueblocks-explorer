import React from 'react';
import { Link } from 'react-router-dom';
import { useStatus, useLoading } from 'store';
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
      <div>{useLoading().state ? "loading" : "TrueBlocks Account Explorer"}</div>
    </div>
  );
}

//-----------------------------------------------------
const PageHeaderUpperRight = () => {
  const {state } = useStatus();
  return (
    <div className="right-top">
      <Pill text="api" status={state.data[0].trueblocks_version !== ''} decorate={true} route="/settings/api" />
      <Pill text="node" status={state.data[0].client_version !== ''} decorate={true} route="/settings/node" />
      <Pill text="scraper" status={state.data[0].is_scraping} decorate={false} route="/settings/scraper" />
      <Pill text="ipfs" status={false} decorate={false} route="/settings/ipfs" />
    </div>
  );
}

//-----------------------------------------------------
const Pill = ({ text, status, decorate, route }) => {
  if (route !== undefined && route !== '') {
    return (
      <Link to={route}>
        <div className={"pill " + (status ? "okay" : "warning") + (!status && !decorate ? " strikeout" : "")}>
          {text + (decorate ? (status ? " ok" : " unavailable") : "")}
        </div>
      </Link>
    );
  }

  return (
    <div className={"pill " + (status ? "okay" : "warning") + (!status && !decorate ? " strikeout" : "")}>
      {text + (decorate ? (status ? " ok" : " unavailable") : "")}
    </div>
  );
}

//-----------------------------------------------------
const PageHeaderLowerRight = () => {
  const status = useStatus().state;
  const meta = status.meta;
  const f = meta.finalized;
  const fd = (meta.client - f);
  const s = meta.staging;
  const sd = (meta.client - s);
  const u = (max(meta.unripe, meta.ripe));
  const ud = (meta.client - u);
  const stats = <span>{f} ({fd}) / {s} ({sd}) / {u} ({ud}) / {meta.client} - </span>

  let secs = 0;
  const nowStr = (new Date()).toISOString();
  // console.log('nowStr: ', nowStr);
  const nowDate = str2Date(nowStr);
  // console.log('nowDate: ', nowDate);
  const nowSecs = nowDate.getTime(); //date2Secs(nowDate);
  // console.log('nowSecs: ', nowSecs);
  // const newDate = new Date(nowSecs);
  // console.log('newDate: ', newDate);

  let thenStr = 0;
  let thenSecs = 0;
  // console.log(status.data[0]);
  if (status.data[0].date) {
    thenStr = status.data[0].date.replace(/ UTC/, ".000Z").replace(/ /, 'T');
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
        {meta.client > 0 ? <div>{stats} - {secs} seconds ago</div> : secs}
      </div>
    </div>
  );
}

//-----------------------------------------------------
function max(a, b) { return a > b ? a : b }

// function pad2(n) {
//   if (n > 9)
//     return n;
//   return '0' + n;
// }

// function formatDate(givenDate) {
//   const mos = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const dys = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const moName = mos[givenDate.getUTCMonth()];
//   const daName = dys[givenDate.getUTCDay()];
//   const date = daName + ', ' + moName + ' ' + givenDate.getUTCDate() + ', ' + givenDate.getUTCFullYear();
//   const time = pad2(givenDate.getUTCHours()) + ":" + pad2(givenDate.getUTCMinutes()) + ":" + pad2(givenDate.getUTCSeconds());
//   return date + ' ' + time + ' UTC';
// }

function str2Date(dateTimeIn) {
  dateTimeIn = dateTimeIn.replace(/T/, " ");
//  console.log('dateTimeIn: ', dateTimeIn);
  let dateTime = dateTimeIn.includes("T") ? dateTimeIn.split("T") : dateTimeIn.split(" ");
//  console.log('dateTime: ', dateTime, 'len: ', dateTime);

  var date = dateTime[0].split("-");
  var yyyy = date[0];
  var mm = date[1];
  var dd = date[2];
//  console.log(yyyy, mm, dd);

  var time = dateTime[1].split(":");
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