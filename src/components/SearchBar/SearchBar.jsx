import React from "react";

import { Editable } from "components";
import "./SearchBar.css";

//----------------------------------------------------------------------------
export const SearchBar = ({ placeholder = "filter results", onChange }) => {
  return (
    <div key="search" className="search">
      <div
        style={{
          paddingLeft: "5px",
          paddingRight: "10px"
        }}
      >
        Search:{" "}
      </div>
      <div style={{ borderLeft: "1px solid darkgrey" }}></div>
      <div>
        <Editable
          className="search_input"
          isActive={true}
          fieldName="search"
          fieldValue=""
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
