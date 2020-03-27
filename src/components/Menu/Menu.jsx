import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Menu.css';

//----------------------------------------------------------------------
export const Menu = ({ menu, parent = '', selected }) => {

  const MenuContext = React.createContext({});

  return (
    <MenuContext.Provider value={{ selected: selected }}>
      {menus.items.map((item) => {
        const { label, exact, path, items } = item;
        if (items) {
          return (
            <></>
            );
        } else {
          <MenuItem text={label} to={'/' + parent + '/' + path} indent={parent !== ''} exact={exact} enabled={true} />;
        }
        <MenuItem text={item.label}, to, indent, exact, enabled, children }) => {
        return <pre>{JSON.stringify(item, null, 2)}</pre>;
      })}
    </MenuContext.Provider>
  );
};

//----------------------------------------------------------------------
export const MenuItem = ({ text, to, indent, exact, enabled, children }) => {
  const style = indent ? { margin: '4px 10px' } : {};
  const selected = useContext(MenuContext).selected;
  const expanded = selected !== '/' && to.includes(selected);

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
      {expanded ? children : <></>}
    </>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  indent: PropTypes.bool,
  exact: PropTypes.bool,
  enabled: PropTypes.bool.isRequired,
  children: PropTypes.array
};

MenuItem.defaultProps = {
  enabled: true
};
