import React, { useContext } from 'react';
import logo from './img/logo.png';
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="left-header">
        <img className="logo" alt={logo} src={logo} />
        <div>TrueBlocks Account Explorer</div>
      </div>
      <div className="right-top">
        fixed width fixed width fixed width fixed width
      </div>
      <div className="right-bottom">
        control is all that matters
      </div>
    </div >
  );
}

export default PageHeader;