import React, { useContext } from "react";
import { ChevronLeft, ChevronRight } from "assets/icons/chevrons";
import "./Panel.css";

//----------------------------------------------------------------------
const Panel = ({ title, type, collapseLeft, children }) => {
  return (
    <div key={type} className={type}>
      <PanelHeader title={title} type={type} collapseLeft={collapseLeft} />
      {children}
    </div>
  );
};
export default Panel;

//----------------------------------------------------------------------
const ExpandIcon = ({ type, collapseLeft }) => {
  const toggleAction = { type: type };
  const { togglePanel } = useContext(PanelContext);
  const leftIcon = <ChevronLeft onClick={() => togglePanel(toggleAction)} />;
  const rightIcon = <ChevronRight onClick={() => togglePanel(toggleAction)} />;

  const expanded = useExpanded(type);
  if (collapseLeft) return expanded ? leftIcon : rightIcon;
  return expanded ? rightIcon : leftIcon;
};

//----------------------------------------------------------------------
const PanelHeader = ({ title, type, collapseLeft }) => {
  return (
    <div className="panel-header">
      <div>{useExpanded(type) ? title : ""}</div>
      <div style={{ justifySelf: "right" }}>
        <ExpandIcon type={type} collapseLeft={collapseLeft} />
      </div>
    </div>
  );
};

//----------------------------------------------------------------------
export const panelStateDefault = {
  menu: true,
  content: true,
  status: true,
  help: true
};

//----------------------------------------------------------------------
export const panelReducer = (state, action) => {
  let retState = state;
  switch (action.type) {
    case "menu":
      retState = { ...state, menu: !state.menu };
      break;
    case "content":
      retState = { ...state, content: !state.content };
      break;
    case "status":
      retState = { ...state, status: !state.status };
      break;
    case "help":
      retState = { ...state, help: !state.help };
      break;
    case "reset":
      retState = panelStateDefault;
      break;
    default:
      break;
  }
  localStorage.setItem("panelState", JSON.stringify(retState));
  return retState;
};

//----------------------------------------------------------------------
export const PanelContext = React.createContext({
  panelState: {},
  togglePanel: () => {}
});

//----------------------------------------------------------------------
export const useExpanded = type => {
  const { panelState } = useContext(PanelContext);
  switch (type) {
    case "menu":
      return panelState.menu;
    case "content":
      return panelState.content;
    case "status":
      return panelState.status;
    case "help":
      return panelState.help;
    default:
      return true;
  }
};
