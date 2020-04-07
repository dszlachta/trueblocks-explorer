import React from 'react';

export const Search = ({ enabled, searchFields, filterText, handler }) => {
  return (
    <div style={{ alignSelf: 'end', justifySelf: 'start' }}>
      {enabled ? (
        <div className="dt-search-container">
          <input
            onChange={(e) => {
              handler({ type: 'update_filter', payload: e.target.value });
            }}
            className="dt-search"
            placeholder={'Search ' + searchFields[0] + '...'}
            value={filterText}
          ></input>
          <button onClick={() => handler({ type: 'clear_filter' })} className="dt-search-clear-button">
            x
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
