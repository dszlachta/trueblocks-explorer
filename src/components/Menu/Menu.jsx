import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { currentPage, handleClick } from 'components/utils';
import { getIcon } from 'pages/utils';

import './Menu.css';

//----------------------------------------------------------------------
export const Menu = ({ menu, parent = '', minimized, selected, handler }) => {
  if (!menu) return <Fragment></Fragment>;

  const indent = parent !== '';
  const cn = indent ? 'menu-indent' : '';

  return (
    <Fragment>
      {menu.map((item, index) => {
        const isSep = item.label.toLowerCase() === 'separator';
        if (isSep) {
          let sep = '- - - - - - - - - - - - - - - - ';
          if (minimized) sep = sep.substr(0, 12);
          return (
            <div key={'sep_' + index} className={cn + ' menu-separator'}>
              {sep}
            </div>
          );
        }

        const { label, exact, items } = item;
        const icon = indent ? <Fragment></Fragment> : getIcon(label, !minimized, false, 20);
        const route = cleanPath(label, parent, item.route);
        return (
          <MenuItem
            key={route}
            label={label}
            icon={icon}
            indent={indent}
            minimized={minimized}
            to={route}
            exact={exact}
            parent={parent}
            selected={selected}
            handler={handler}
          >
            <Menu
              menu={minimized ? null : items}
              parent={label.toLowerCase()}
              exact={exact}
              minimized={minimized}
            />
          </MenuItem>
        );
      })}
    </Fragment>
  );
};

//----------------------------------------------------------------------
export const MenuItem = ({ label, icon, to, indent, exact, minimized, parent, selected, handler, children }) => {
  let cn = '';
  if (indent) cn = 'menu-indent';

  const { page } = currentPage();
  const active = page !== '/' && to.includes(page);
  const action = { type: 'menu-clicked', selected: label, parent: parent };

  return (
    <Fragment>
      <NavLink
        className={cn + ' menu-item'}
        activeClassName="is-active"
        exact={exact}
        to={to}
        onClick={(e) => {
          return handler && handler(action); // Note: do not use handleClick as it won't allow a bubble up
        }}
      >
        {icon}
        {(!minimized || !icon) && label}
      </NavLink>
      {active && children}
    </Fragment>
  );
};

//----------------------------------------------------------------------
const cleanPath = (label, parent, pathIn) => {
  let ret = pathIn;
  if (!ret || ret === '') ret = '/' + label.toLowerCase().replace(/\.\.\./, '');
  else ret = '/' + (ret === '/' ? '' : ret);
  if (parent !== '') ret = '/' + parent + ret;
  return ret;
};
