import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { currentPage } from 'components/utils';

import {
  Dashboard,
  Collections,
  Monitors,
  Explorer,
  Names,
  Signatures,
  Digests,
  Caches,
  Other,
  Settings,
  Support,
} from 'assets/icons/SetMenus';

import './Menu.css';

//----------------------------------------------------------------------
export const Menu = ({ menu, parent = '', expanded }) => {
  if (!menu) return <Fragment></Fragment>;
  const indent = parent !== '';
  const style = indent ? { margin: '4px 10px' } : {};
  const sep = indent ? '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ' : '- - - - - - - - - - - - - - - - ';
  if (indent && !expanded) return null;
  return (
    <>
      {menu.map((item, index) => {
        if (item.label.toLowerCase() === 'separator') {
          return (
            <div key={'sep_' + index} style={style} className="menu-separator">
              {sep}
            </div>
          );
        }
        const enabled = true; //(item.enableFunc ? item.enableFunc(currentPage().page, currentPage().subpage) : true) && item.enabled;
        const { label, exact, items } = item;
        const icon = getIcon(label, expanded);
        console.log(label, icon);
        const route = cleanPath(label, parent, item.route);
        return (
          <MenuItem
            key={route}
            text={label}
            icon={icon}
            indent={indent}
            expanded={expanded}
            to={route}
            enabled={enabled}
            exact={exact}
          >
            <Menu menu={items} parent={label.toLowerCase()} exact={exact} expanded={expanded} />
          </MenuItem>
        );
      })}
    </> //
  );
};

//----------------------------------------------------------------------
export const MenuItem = ({ text, icon, to, indent, exact, enabled, expanded, children }) => {
  const style = indent ? { margin: '3px 10px' } : {};
  const { page } = currentPage();
  const active = page !== '/' && to.includes(page);

  if (!enabled) {
    return (
      <div style={style} className="menu-disabled">
        {icon}
        {(expanded || !icon) && text}
      </div>
    );
  }

  return (
    <>
      <NavLink style={style} className="menu-item" activeClassName="is-active" exact={exact} to={to}>
        {icon}
        {(expanded || !icon) && text}
      </NavLink>
      {active ? children : <></>}
    </>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  indent: PropTypes.bool,
  exact: PropTypes.bool,
  enabled: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

MenuItem.defaultProps = {
  enabled: true,
};

const cleanPath = (label, parent, pathIn) => {
  let ret = pathIn;
  if (!ret || ret === '') ret = '/' + label.toLowerCase().replace(/\.\.\./, '');
  else ret = '/' + (ret === '/' ? '' : ret);
  if (parent !== '') ret = '/' + parent + ret;
  return ret;
};

function getIcon(label, expanded) {
  const size = 20;
  switch (label) {
    case 'Dashboard':
      return <Dashboard key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Collections':
      return <Collections key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Monitors':
      return <Monitors key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Explorer':
      return <Explorer key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Names':
      return <Names key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Signatures':
      return <Signatures key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Digests':
      return <Digests key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Caches':
      return <Caches key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Other':
      return <Other key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Settings':
      return <Settings key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    case 'Support':
      return <Support key={'micon-' + label} size={size} className={expanded ? 'menu-icon' : ''} />;
    default:
      return null;
  }
}
