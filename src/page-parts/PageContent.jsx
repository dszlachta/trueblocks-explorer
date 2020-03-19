import React, { useContext } from 'react';
import Panel, { PanelContext } from 'page-parts/Panel';
import "./PageContent.css";

const PageContent = () => {
  return (
    <div className="page-content">
      <Menu />
      <Status />
      <Content />
      <Help />
    </div >
  );
}
export default PageContent;

export const Menu = () => {
  const { panelState } = useContext(PanelContext);
  const text = (panelState.menu ? "Expanded Menu" : "Collapsed Menu")
  return <Panel title="Menu" type="menu" collapseLeft={true}>{text}</Panel >;
}

export const Status = () => {
  const { panelState } = useContext(PanelContext);
  const text = (panelState.status ? "Expanded Status" : "Collapsed Status")
  return <Panel title="Status" type="status">{text}</Panel>;
}

export const Help = () => {
  const { panelState } = useContext(PanelContext);
  const text = (panelState.help ? "Expanded Help" : "Collapsed Help")
  return <Panel title="Help" type="help">{text}</Panel>;
}

export const Content = () => {
  const { panelState } = useContext(PanelContext);
  const n = (panelState.content ? 100 : 10);
  const text = <>{Array(n).fill().map((_, i) => <div>{i * i}</div>)}</>
  return <Panel title="Content" type="content" collapseLeft={true}>{text}</Panel >;
}
