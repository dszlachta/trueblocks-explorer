import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { usePanels } from 'store';
import { handleClick } from 'components/utils';
import ChevronLeft from 'assets/icons/ChevronLeft';
import ChevronRight from 'assets/icons/ChevronRight';
import './Panel.css';

//----------------------------------------------------------------------
export const Panel = ({ title, options, children }) => {
  let { headerLink = '', headerClass = '' } = options;

  let header = <PanelHeader title={title} headerClass={headerClass} options={options} />;
  if (headerLink !== '') {
    header = (
      <Link to={headerLink}>
        <PanelHeader title={title} headerClass={headerClass} options={options} />
      </Link>
    );
  }

  let iconTray = <Fragment></Fragment>;

  if (options.iconTray) {
    iconTray = options.iconTray.map((icon, idx) => {
      return <div key={idx}>{icon}</div>;
    });
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
  const icon = showIcon ? (
    <div className="panel-icon">{options.topIcon ? options.topIcon : <ExpandIcon options={options} />}</div>
  ) : (
    <Fragment></Fragment>
  );
  return (
    <div className={headerClass !== '' ? headerClass : 'panel-header'}>
      <div>{options.expanded ? title : ''}</div>
      {icon}
    </div>
  );
};
PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headerClass: PropTypes.string,
  options: PropTypes.object,
};
PanelHeader.defaultProps = {
  title: '',
  headerClass: '',
  options: {},
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
