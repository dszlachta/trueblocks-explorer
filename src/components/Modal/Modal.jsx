import React, { Fragment, useEffect } from 'react';
import Mousetrap from 'mousetrap';

import { handleClick } from 'components/utils';
import './Modal.css';

export const Modal = ({ showing, buttons = ['cancel', 'okay'], handler, children }) => {
  useEffect(() => {
    Mousetrap.bind('esc', (e) => handleClick(e, handler, { type: 'close' }));
    Mousetrap.bind('enter', (e) => {
      handleClick(e, handler, { type: buttons[buttons.length - 1] });
    });
    return () => {
      Mousetrap.unbind('esc');
      Mousetrap.unbind('enter');
    };
  }, [showing, handler, buttons]);

  if (!showing) return null;

  let backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  };
  let modalStyle = {
    backgroundColor: '#fff',
    border: '1px solid',
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 300,
    margin: '0 auto',
    padding: 10,
  };

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        {children}
        <div>
          {buttons.map((button, index) => {
            return (
              <Fragment>
                <button
                  className={index === buttons.length - 1 ? 'selected' : ''}
                  key={button + index}
                  onClick={(e) => {
                    handleClick(e, handler, { type: button });
                  }}
                >
                  {button}
                </button>{' '}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
