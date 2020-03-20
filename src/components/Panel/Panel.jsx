import React, { useContext } from 'react';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import HelpCircle from 'assets/icons/help-circle';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, type, collapseLeft, noIcon, children }) => {
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
  const { dispatch2Panel } = useContext(PanelContext);
  const leftIcon = <ChevronLeft onClick={() => dispatch2Panel(toggleAction)} />;
  const rightIcon = <ChevronRight onClick={() => dispatch2Panel(toggleAction)} />;
  const helpIcon = <HelpCircle fill="green" color="#333" onClick={() => dispatch2Panel(toggleAction)} />;
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
  help: false,
};

//----------------------------------------------------------------------
export const panelReducer = (state, action) => {
  let retState = state;
  switch (action.type) {
    case 'menu':
      retState = { ...state, menu: !state.menu };
      break;
    case 'content':
      retState = { ...state, content: !state.content };
      break;
    case 'status':
      retState = { ...state, status: !state.status };
      break;
    case 'help':
      retState = { ...state, help: !state.help };
      break;
    case 'reset':
      retState = panelStateDefault;
      break;
    default:
      break;
  }
  localStorage.setItem('panelState', JSON.stringify(retState));
  return retState;
};

//----------------------------------------------------------------------
export const PanelContext = React.createContext({
  panelState: {},
  dispatch2Panel: () => { }
});

//----------------------------------------------------------------------
export const useExpanded = (type) => {
  const { panelState } = useContext(PanelContext);
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
