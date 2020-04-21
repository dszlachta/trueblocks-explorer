import React from 'react';

import { handleClick } from 'components/utils';

export const ButtonCaddie = ({ name, buttons, current, action, handler }) => {
  if (buttons.length === 0) return <div className="warning">no buttons provided to ButtonCaddie</div>;
  if (!handler) return <div className="warning">No handler given to ButtonCaddie</div>;

  return (
    <div>
      <div style={{ display: 'inline' }}>{name + ': '}</div>
      {buttons.map((value) => {
        const cn = value === current ? 'activeButton' : '';
        return (
          <button className={cn} key={value} onClick={(e) => handleClick(e, handler, { type: action, payload: value })}>
            {value}
          </button>
        );
      })}
    </div>
  );
};
