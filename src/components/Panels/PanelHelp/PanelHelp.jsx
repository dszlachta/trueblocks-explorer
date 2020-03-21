import React from 'react';
import { Panel, useExpanded } from 'components/Panels';
import './PanelHelp.css';

//----------------------------------------------------------------------
export const PanelHelp = () => {
  const content = useExpanded('help') ? 'Expanded Help' : '';
  return (
    <Panel title="Help" type="help">
      {content}
    </Panel>
  );
};
