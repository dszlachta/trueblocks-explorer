import React, { useState, useContext, useCallback,  useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

export const ToastContext = React.createContext(null);

let id = 1;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    content => {
      setToasts(toasts => [
        ...toasts,
        {
          id: id++,
          content
        }
      ]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    id => {
      setToasts(toasts => toasts.filter(t => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast
      }}
    >
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};

// const Wrapper = styled.div`
//   position: absolute;
//   right: 0;
//   top: 0;
//   z-index: 1;
// `;

export const ToastContainer = ({ toasts }) => {
  const transitions = useTransition(toasts, toast => toast.id, {
    from: { right: "-100%" },
    enter: { right: "0%" },
    leave: { right: "-105%" }
  });
  
  return createPortal(
    <div style={{position: 'absolute', right: '0', top: '0', zIndex: '1' }}>
      {transitions.map(({ item, key, props }) => (
        <Toast key={key} id={item.id} style={props}>
          {item.content}
        </Toast>
      ))}
    </div>,
    document.body
  );
};

const Wrapper12 = styled(animated.div)`
  margin-right: 6px;
  margin-top: 6px;
  width: 200px;
  position: relative;
  padding: 10px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  background: lightyellow;
  box-shadow: 0px 2px 4px 0px #d7d7d7;
  color: #494e5c;
`;

export const Toast = ({ children, id, style, delay = 800 }) => {
  const { removeToast } = useToast();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, delay);
    
    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return <Wrapper12 style={style}>{children}</Wrapper12>;
};
