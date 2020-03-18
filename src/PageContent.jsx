import React, { useState, useContext } from 'react';
import "./PageContent.css";

const PageContent = () => {
  return (
    <div className="page-content">
      <MenuPanel />
      <Status />
      <Content />
      <Help />
    </div >
  );
}

export default PageContent;

const MenuPanel = () => {
  return <div className="menu">menu</div>
}

const Status = () => {
  return <div className="status"><div>status</div></div>
}

const Help = () => {
  return <div className="help">help</div>
}

const Content = () => {
  const [big, setBig] = useState(false);
  if (!big) {
    return (<div className="content">
      <button onClick={() => setBig(true)}>big</button>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </div>);
  }
  return <div className="content">
    <div>page-content</div>
    <button onClick={() => setBig(false)}>small</button>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </div>
}