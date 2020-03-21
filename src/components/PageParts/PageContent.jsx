import React, { Fragment, useContext } from 'react';
import GlobalContext from 'store';
import { Panel, useExpanded } from 'components/Panels';
import { PanelMenu } from 'components/Panels';
import { PanelStatus } from 'components/Panels';
import { PanelHelp } from 'components/Panels';
import './PageContent.css';

const usePanelBits = () => {
  const { state } = useContext(GlobalContext).panels;
  const panelState = state; // so we can find it
  let ret = '';
  ret += panelState.menu ? '1' : '0';
  ret += panelState.content ? '1' : '0';
  ret += panelState.status ? '1' : '0';
  ret += panelState.help ? '1' : '0';
  return ret;
};

//----------------------------------------------------------------------
const PageContent = () => {
  return (
    <div className={'page-content shape_' + usePanelBits()}>
      <PanelMenu />
      <PanelStatus />
      <Content />
      <PanelHelp />
    </div>
  );
};
export default PageContent;

//----------------------------------------------------------------------
export const Content = () => {
  const n = useExpanded('content') ? 100 : 10;
  const content = (
    <Fragment>
      {Array(n)
        .fill()
        .map((_, i) => (
          <div>{i * i}</div>
        ))}
    </Fragment>
  );
  return (
    <Panel title={window.location.pathname} type="content" collapseLeft={true} noIcon>
      {content}
    </Panel>
  );
};
