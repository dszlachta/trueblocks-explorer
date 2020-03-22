import React, { Fragment } from 'react';
import { usePanels } from 'store';
import { Panel } from 'components/Panels';
import './PanelContent.css';

//----------------------------------------------------------------------
export const PanelContent = () => {
  const n = usePanels().state.content ? 100 : 10;
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

