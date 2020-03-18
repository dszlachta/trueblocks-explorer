import React, { useState, useContext } from 'react';
import "./PageContent.css";

const PageContent = () => {
  return (
    <div className="page-content">
      <div>page-contents</div>
      {/* <PageSider />
      < Status />
      < Jinky />
      < Help /> */}
    </div >
  );
}

export default PageContent;

















const PageSider = () => {
  return <div className="page-sider">page-sider</div>
}

const Status = () => {
  return <div className="status"><div>Status</div></div>
}

const Help = () => {
  return <div className="help">Help</div>
}

const Jinky = () => {
  const [big, setBig] = useState(false);
  if (!big) {
    return (<div className="jinky">
      <button onClick={() => setBig(true)}>big</button>
      <div>Jinky</div>
      <div>Jinky</div>
      <div>Jinky</div>
      <div>Jinky</div>
      <div>Jinky</div>
      <div>Jinky</div>
      <div>Jinky</div>
      <div>Jinky</div>
    </div>);
  }
  return <div className="jinky">
    <div>page-content</div>
    <button onClick={() => setBig(false)}>small</button>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
    <div>Jinky</div>
  </div>
}