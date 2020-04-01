import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { currentPage } from "components/utils";
import "./Menu.css";

//----------------------------------------------------------------------
export const Menu = ({ menu, parent = "" }) => {
  return (
    <>
      {menu.map(item => {
        const enabled = true; //(item.enableFunc ? item.enableFunc(currentPage().page, currentPage().subpage) : true) && item.enabled;
        const { label, exact, items } = item;
        const path = cleanPath(label, parent, item.path);
        if (items) {
          return (
            <MenuItem key={path} text={label} indent={parent !== ""} to={path}>
              <Menu menu={items} parent={label.toLowerCase()} exact={exact} />
            </MenuItem>
          );
        }
        return (
          <MenuItem
            key={path}
            text={label}
            indent={parent !== ""}
            to={path}
            exact={exact}
            enabled={enabled}
          />
        );
      })}
    </> //
  );
};

//----------------------------------------------------------------------
export const MenuItem = ({ text, to, indent, exact, enabled, children }) => {
  const style = indent ? { margin: "4px 10px" } : {};
  const { page } = currentPage();
  const expanded = page !== "/" && to.includes(page);

  if (!enabled) {
    return (
      <div style={style} className="menu-disabled">
        {text}
      </div>
    );
  }

  return (
    <>
      <NavLink
        style={style}
        className="menu-item"
        activeClassName="is-active"
        exact={exact}
        to={to}
      >
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
  children: PropTypes.element
};

MenuItem.defaultProps = {
  enabled: true
};

const cleanPath = (label, parent, pathIn) => {
  let ret = pathIn;
  if (!ret || ret === "") ret = "/" + label.toLowerCase().replace(/\.\.\./, "");
  else ret = "/" + (ret === "/" ? "" : ret);
  if (parent !== "") ret = "/" + parent + ret;
  return ret;
};
