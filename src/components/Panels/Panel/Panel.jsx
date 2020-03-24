import React from 'react';
import { usePanels } from 'store';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import HelpCircle from 'assets/icons/help-circle';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, type, collapseLeft, noIcon, headCn='', children }) => {
  return (
    <div key={type} className={type}>
      <PanelHeader title={title} type={type} collapseLeft={collapseLeft} noIcon={noIcon} headCn={headCn}/>
      {children}
    </div>
  );
};

//----------------------------------------------------------------------
const ExpandIcon = ({ type, collapseLeft }) => {
  const panels = usePanels();
  const toggleAction = { type: type };
  const leftIcon = <ChevronLeft onClick={() => panels.dispatch(toggleAction)} />;
  const rightIcon = <ChevronRight onClick={() => panels.dispatch(toggleAction)} />;
  const helpIcon = <HelpCircle fill="green" color="#333" onClick={() => panels.dispatch(toggleAction)} />;

  const expanded = isExpanded(panels.state, type);
  if (type === 'help') return helpIcon;
  if (collapseLeft) return expanded ? leftIcon : rightIcon;
  return expanded ? rightIcon : leftIcon;
};

//----------------------------------------------------------------------
const PanelHeader = ({ title, type, collapseLeft, noIcon, headCn }) => {
  return (
    <div className={headCn !== '' ? headCn : "panel-header"} style={{ align: 'right' }}>
      <div>{isExpanded(usePanels().state, type) ? title : ''}</div>
      {!noIcon ? (
        <div className="panel-icon">
          <ExpandIcon type={type} collapseLeft={collapseLeft} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
const isExpanded = (panelState, type) => {
  switch (type) {
    case 'menu':
      return panelState.menu;
    case 'content':
      return panelState.content;
    case 'status':
      return panelState.status;
    case 'help':
      return panelState.help;
    default:
      return true;
  }
};
