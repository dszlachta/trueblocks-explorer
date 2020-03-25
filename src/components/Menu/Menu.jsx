import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuContext = React.createContext({})
//----------------------------------------------------------------------
export const Menu = ({ menus, selected }) => {
  return (
    <MenuContext.Provider value={{selected: selected}}>
      {menus.map((item) => {
        return item;
      })}
    </MenuContext.Provider>
  );
}

//----------------------------------------------------------------------
export const MenuItem = ({ text, to, indent, exact, children }) => {
  const style = (indent ? { margin: '4px 10px' } : {});
  const selected = useContext(MenuContext).selected;
  const expanded = selected !== '/' && to.includes(selected);
  return (
    <>
      <NavLink style={style} className="menu-item" activeClassName="is-active" exact={exact} to={to}>
        {text}
      </NavLink>
      {expanded ? children : <></>}
    </>
  );
}
