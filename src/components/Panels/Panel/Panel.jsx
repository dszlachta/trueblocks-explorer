import React from 'react';
import { Link } from 'react-router-dom';
import { usePanels } from 'store';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, options, children }) => {
  const { headerLink = '', headClass = '' } = options;
  let header = <PanelHeader title={title} headClass={headClass} options={options} />; 
  if (headerLink !== '')
    header = <Link to={headerLink}><PanelHeader title={title} headClass={headClass} options={options} /></Link>; 
  return (
    <div key={options.type} className={options.type}>
      {header}
      {children}
    </div>
  );
};

//----------------------------------------------------------------------
const PanelHeader = ({ title, headClass, options }) => {
  return (
    <div className={headClass !== '' ? headClass : "panel-header"}>
      <div>{options.expanded ? title : ''}</div>
      <div className="panel-icon">
        {options.inCon ? options.inCon : <ExpandIcon options={options} />}
      </div>
    </div>
  );
};

//----------------------------------------------------------------------
const ExpandIcon = ({ options }) => {
  const panels = usePanels();
  const leftIcon = <ChevronLeft onClick={() => panels.dispatch({ type: options.type })} />;
  const rightIcon = <ChevronRight onClick={() => panels.dispatch({ type: options.type })} />;

  if (options.dir === 'left') return options.expanded ? leftIcon : rightIcon;
  return options.expanded ? rightIcon : leftIcon;
};
