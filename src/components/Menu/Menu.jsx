import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { currentPage } from 'components/utils';
import './Menu.css';

//----------------------------------------------------------------------
export const Menu = ({ menu, parent = '' }) => {
  const indent = parent !== '';
  const style = indent ? { margin: '4px 10px' } : {};
  const sep = indent ? '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ' : '- - - - - - - - - - - - - - - - ';
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
        const route = cleanPath(label, parent, item.route);
        if (items) {
          return (
            <MenuItem key={route} text={label} indent={parent !== ''} to={route}>
              <Menu menu={items} parent={label.toLowerCase()} exact={exact} />
            </MenuItem>
          );
        }
        return <MenuItem key={route} text={label} indent={parent !== ''} to={route} exact={exact} enabled={enabled} />;
      })}
    </> //
  );
};

//----------------------------------------------------------------------
export const MenuItem = ({ text, to, indent, exact, enabled, children }) => {
  const style = indent ? { margin: '3px 10px' } : {};
  const { page } = currentPage();
  const active = page !== '/' && to.includes(page);

  if (!enabled) {
    return (
      <div style={style} className="menu-disabled">
        {text}
      </div>
    );
  }

  return (
    <>
      <NavLink style={style} className="menu-item" activeClassName="is-active" exact={exact} to={to}>
        {text}
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
