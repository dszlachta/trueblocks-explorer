import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobals, useStatus, useLoading } from 'store';
import logo from 'assets/img/logo.png';
import './PageHeader.css';

//-----------------------------------------------------
const PageHeader = () => {
  return (
    <div className="page-header">
      <PageHeaderLeft />
      <PageHeaderUpperRight />
      <PageHeaderLowerRight />
    </div>
  );
};
export default PageHeader;

//-----------------------------------------------------
const PageHeaderLeft = () => {
  return (
    <div className="left-header">
      <img className="logo" alt={logo} src={logo} />
      <div>{useLoading().state ? "loading" : "TrueBlocks Account Explorer"}</div>
    </div>
  );
}

//-----------------------------------------------------
const PageHeaderUpperRight = () => {
  const {state } = useStatus();
  console.log(useGlobals());
  // if (useGlobals().loading)
  //   return <></>;
  return (
    <div className="right-top">
      <Pill text="api" status={state.data[0].trueblocks_version !== ''} decorate={true} route="/settings/api" />
      <Pill text="node" status={state.data[0].client_version !== ''} decorate={true} route="/settings/node" />
      <Pill text="scraping" status={state.data[0].is_scraping} decorate={false} route="/settings/scraping" />
      <Pill text="sharing" status={false} decorate={false} route="/settings/sharing" />
    </div>
  );
}

//-----------------------------------------------------
const Pill = ({ text, status, decorate, route }) => {
  if (route !== undefined && route !== '') {
    return (
      <Link to={route}>
        <div className={"pill " + (status ? "okay" : "warning") + (!status && !decorate ? " strikeout" : "")}>
          {text + (decorate ? (status ? " ok" : "") : "")}
        </div>
      </Link>
    );
  }

  return (
    <div className={"pill " + (status ? "okay" : "warning") + (!status && !decorate ? " strikeout" : "")}>
      {text + (decorate ? (status ? " ok" : "") : "")}
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
  return (
    <div className="right-bottom">
      <div>
        {meta.client > 0 ? <div>{stats} {formatDate(new Date())}</div> : formatDate(new Date())}
      </div>
    </div>
  );
}

//-----------------------------------------------------
function max(a, b) { return a > b ? a : b }
function pad2(n) {
  if (n > 9)
    return n;
  return '0' + n;
}
function formatDate(givenDate) {
  const mos = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dys = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const moName = mos[givenDate.getUTCMonth()];
  const daName = dys[givenDate.getUTCDay()];
  const date = daName + ', ' + moName + ' ' + givenDate.getUTCDate() + ', ' + givenDate.getUTCFullYear();
  const time = pad2(givenDate.getUTCHours()) + ":" + pad2(givenDate.getUTCMinutes()) + ":" + pad2(givenDate.getUTCSeconds());
  return date + ' ' + time + ' UTC';
}
