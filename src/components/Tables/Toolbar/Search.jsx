import React, { Fragment } from 'react';

import './Search.css';

//-----------------------------------------------------------------
export const Search = ({ enabled, searchFields, searchText, handler }) => {
  const placeHolder = searchFields ? searchFields[0] : '';
  return enabled ? (
    <div className="search-container">
      <input
        onChange={(e) => {
          handler({ type: 'update_filter', payload: e.target.value });
        }}
        className="search"
        placeholder={'Search ' + placeHolder + '...'}
        value={searchText}
      ></input>
      <button onClick={() => (handler ? handler({ type: 'clear_filter' }) : null)} className="clear-button">
        x
      </button>
    </div>
  ) : (
    <div></div>
  );
};
