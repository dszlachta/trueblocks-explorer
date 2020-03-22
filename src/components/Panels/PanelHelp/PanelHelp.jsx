import React from 'react';
import { usePanels } from 'store';
import { Panel } from 'components/Panels';
import './PanelHelp.css';

//----------------------------------------------------------------------
export const PanelHelp = () => {
  const content = usePanels().state.help ? 'Expanded Help' : '';
  return (
    <Panel title="Help" type="help">
      {content}
    </Panel>
  );
};
