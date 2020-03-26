import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { usePanels, handleClick } from 'store';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, options, children }) => {
  const { headerLink = '', headerClass = '' } = options;
  let header = <PanelHeader title={title} headerClass={headerClass} options={options} />;
  if (headerLink !== '') {
    header = <Link to={headerLink}><PanelHeader title={title} headerClass={headerClass} options={options} /></Link>;
  }
  let iconTray = <></>;
  if (options.iconTray) {
    iconTray = options.iconTray.map((icon) => {
      return <div>{icon}</div>
    })
    iconTray = <div className="icon-tray">{iconTray}</div>;
  }
  return (
    <div key={options.type} className={options.type}>
      {header}
      {children}
      {iconTray}
    </div>
  );
};

//----------------------------------------------------------------------
const PanelHeader = ({ title, headerClass, options }) => {
  const showIcon = !options.headerClass || !options.headerClass.includes('center');
  const icon = (showIcon ? <div className="panel-icon">{options.topIcon ? options.topIcon : <ExpandIcon options={options} />}</div> : <></>);
  return (
    <div className={headerClass !== '' ? headerClass : "panel-header"}>
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
