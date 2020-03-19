import React, { useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'assets/icons/chevrons'
import "./Panel.css";

export const panelStateDefault = {
  menu: true,
  content: true,
  status: true,
  help: true
}
export const panelReducer = (state, action) => {
  let retState = state;
  switch (action.type) {
    case 'menu': retState = { ...state, menu: !state.menu }; break;
    case 'content': retState = { ...state, content: !state.content }; break;
    case 'status': retState = { ...state, status: !state.status }; break;
    case 'help': retState = { ...state, help: !state.help }; break;
    case 'reset': retState = panelStateDefault; break;
    default: break;
  }
  localStorage.setItem('panelState', JSON.stringify(retState));
  return retState;
}
export const PanelContext = React.createContext({ panelState: {}, togglePanel: () => { } })

const titleStyle = {
  color: '#4c7c9c',
  fontSize: '1.6em',
  fontWeight: '300',
  textTransform: 'capitalize',
  borderBottom: '1px solid #777',
  marginTop: '2px',
  marginBottom: '8px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'space-between',
}

const Panel = ({ title, type, collapseLeft, children }) => {
  const { panelState, togglePanel } = useContext(PanelContext);
  let expanded = true;
  switch (type) {
    case 'menu': expanded = panelState.menu; break;
    case 'content': expanded = panelState.content; break;
    case 'status': expanded = panelState.status; break;
    case 'help': expanded = panelState.help; break;
    default: break;
  }
  let icon;
  if (collapseLeft)
    icon = expanded ? <ChevronLeft onClick={() => togglePanel({ type: type })} /> : <ChevronRight onClick={() => togglePanel({ type: type })} />;
  else
    icon = expanded ? <ChevronRight onClick={() => togglePanel({ type: type })} /> : <ChevronLeft onClick={() => togglePanel({ type: type })} />;
  const getTitle = () => {
    if (title === '')
      return <></>;

    if (!expanded)
      return <div style={titleStyle}><div>{icon}</div></div>;

    return (
      <div style={titleStyle}><div>{title}</div><div>{icon}</div></div>
    );
  }
  return (
    <div key={type} className={type}>
      {getTitle()}
      <div>{children}</div>
    </div>
  )
}

export default Panel;

