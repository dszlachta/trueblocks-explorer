import React, { useContext } from 'react';
import GlobalContext from 'store';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import HelpCircle from 'assets/icons/help-circle';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, type, collapseLeft, noIcon, className, children }) => {
  return (
    <div key={type} className={type}>
      <PanelHeader title={title} type={type} collapseLeft={collapseLeft} noIcon={noIcon} />
      {children}
    </div>
  );
};

//----------------------------------------------------------------------
const ExpandIcon = ({ type, collapseLeft }) => {
  const toggleAction = { type: type };
  const { dispatch } = useContext(GlobalContext).panels;
  const leftIcon = <ChevronLeft onClick={() => dispatch(toggleAction)} />;
  const rightIcon = <ChevronRight onClick={() => dispatch(toggleAction)} />;
  const helpIcon = <HelpCircle fill="green" color="#333" onClick={() => dispatch(toggleAction)} />;
  const expanded = useExpanded(type);
  if (type === 'help') return helpIcon;
  if (collapseLeft) return expanded ? leftIcon : rightIcon;
  return expanded ? rightIcon : leftIcon;
};

//----------------------------------------------------------------------
const PanelHeader = ({ title, type, collapseLeft, noIcon }) => {
  return (
    <div className="panel-header" style={{ align: 'right' }}>
      <div>{useExpanded(type) ? title : ''}</div>
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
export const panelStateDefault = {
  menu: false,
  content: true,
  status: true,
  help: false
};

//----------------------------------------------------------------------
export const panelReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'menu':
      ret = { ...state, menu: !state.menu };
      break;
    case 'content':
      ret = { ...state, content: !state.content };
      break;
    case 'status':
      ret = { ...state, status: !state.status };
      break;
    case 'help':
      ret = { ...state, help: !state.help };
      break;
    case 'reset':
      ret = panelStateDefault;
      break;
    default:
      break;
  }
  localStorage.setItem('panelState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useExpanded = (type) => {
  const { state } = useContext(GlobalContext).panels;
  const panelState = state; // so we can find it
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
