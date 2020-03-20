import React from 'react';
import './PageHeader.css';
import logo from 'assets/img/logo.png';

function pad2(n) {
  if (n > 9)
    return n;
  return '0' + n;
}
function formatDate(givenDate) {
  const mos = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dys = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const moName = mos[givenDate.getUTCMonth()];
  const daName = dys[givenDate.getUTCDay()];
  const date = daName + ', ' + moName + ' ' + givenDate.getUTCDate() + ', ' + givenDate.getUTCFullYear();
  const time = pad2(givenDate.getUTCHours()) + ":" + pad2(givenDate.getUTCMinutes()) + ":" + pad2(givenDate.getUTCSeconds());
  return date + ' ' + time + ' UTC';
}

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="left-header">
        <img className="logo" alt={logo} src={logo} />
        <div>TrueBlocks Account Explorer</div>
      </div>
      <div className="right-top">{formatDate(new Date())}</div>
      <div className="right-bottom" style={{border: '1px dashed lightyellow'}}> </div>
    </div>
  );
};

export default PageHeader;
