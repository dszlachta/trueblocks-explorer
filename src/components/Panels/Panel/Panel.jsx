import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { usePanels, handleClick } from 'store';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, options, children }) => {
  const { headerLink = '', headClass = '' } = options;
  let header = <PanelHeader title={title} headClass={headClass} options={options} />;
  if (headerLink !== '') {
    header = <Link to={headerLink}><PanelHeader title={title} headClass={headClass} options={options} /></Link>;
  }
  return (
    <div key={options.type} className={options.type}>
      {header}
      {children}
    </div>
  );
};

//----------------------------------------------------------------------
const PanelHeader = ({ title, headClass, options }) => {
  const showIcon = !options.headClass || !options.headClass.includes('center');
  const icon = (showIcon ? <div className="panel-icon">{options.inCon ? options.inCon : <ExpandIcon options={options} />}</div> : <></>);
  return (
    <div className={headClass !== '' ? headClass : "panel-header"}>
      <div>{options.expanded ? title : ''}</div>
      {icon}
    </div>
  );
};

//----------------------------------------------------------------------
const ExpandIcon = ({ options }) => {
  const panels = usePanels();
  const action = { type: options.type };
  const leftIcon = <ChevronLeft onClick={(e) => handleClick(e, panels.dispatch, action)} />;
  const rightIcon = <ChevronRight onClick={(e) => handleClick(e, panels.dispatch, action)} />;

  if (options.dir === 'left') return options.expanded ? leftIcon : rightIcon;
  return options.expanded ? rightIcon : leftIcon;
};
