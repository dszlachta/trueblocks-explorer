import React from 'react';

import { handleClick } from 'components/utils';

export const ButtonCaddie = ({ name, buttons, current, action, handler }) => {
  if (buttons.length === 0) return <div></div>;
  if (!handler) return <div className="warning">No handler given to ButtonCaddie</div>;

  return (
    <div>
      <div style={{ display: 'inline' }}>{name + ': '}</div>
      {buttons.map((value, index) => {
        const cn = value === current ? 'activeButton' : '';
        return (
          <button
            key={'b_' + index}
            className={cn}
            onClick={(e) => handleClick(e, handler, { type: action, payload: value })}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};
