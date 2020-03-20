import React, { useContext } from 'react';
import { Panel, PanelContext, useExpanded } from 'components/Panel';
import Status from 'components/Status/Status';
import './PageContent.css';

const usePanelBits = () => {
  const { panelState } = useContext(PanelContext);
  let ret = '';
  ret += panelState.menu ? '1' : '0';
  ret += panelState.content ? '1' : '0';
  ret += panelState.status ? '1' : '0';
  ret += panelState.help ? '1' : '0';
  return ret;
};

//----------------------------------------------------------------------
const PageContent = () => {
  const shape = 'shape_' + usePanelBits();
  return (
    <div className={'page-content ' + shape}>
      <Menu />
      <Status />
      <Content />
      <Help />
    </div>
  );
};
export default PageContent;

//----------------------------------------------------------------------
export const Menu = () => {
  const content = useExpanded('menu') ? 'Expanded Menu' : 'Collapsed Menu';
  return (
    <Panel title="Menu" type="menu" collapseLeft={true}>
      {content}
    </Panel>
  );
};

//----------------------------------------------------------------------
export const Content = () => {
  const n = useExpanded('content') ? 100 : 10;
  const content = (
    <>
      {Array(n)
        .fill()
        .map((_, i) => (
          <div>{i * i}</div>
        ))}
    </>
  );
  return (
    <Panel title="Content" type="content" collapseLeft={true} noIcon>
      {content}
    </Panel>
  );
};

//----------------------------------------------------------------------
export const Help = () => {
  const content = useExpanded('help') ? 'Expanded Help' : '';
  return (
    <Panel title="Help" type="help">
      {content}
    </Panel>
  );
};
