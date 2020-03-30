import React, { useState, useEffect, useRef } from "react";

import "./Editable.css";

/**
 * Editable - an inline text editor with actions
 * @param {string} className - a display class name (defaults to 'editable_text')
 * @param {string} fieldName - the name of the field being edited
 * @param {string} fieldValue - the current value of the field being edited
 * @param {string} record_id - a unique identifier for the record being edited (may be empty)
 * @param {string} placeholder - text to display if the fieldValue is empty (defaults to fieldName)
 * @param {string} isActive - starts the editor in edit mode
 * @param {string} onValidate - called on blur event, should return true if input is value, error text otherwise (optional)
 * @param {string} onChange - sends an action each time the text changes
 * @param {string} onAccept - called after the input is validated
 */
export const Editable = props => {
  const [isActive, setActive] = useState(props.isActive);
  const [inputValue, setInput] = useState(props.fieldValue);
  const [errorStr, setError] = useState("");

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  const validateInput = () => {
    if (!props.onValidate) return true;
    const res = props.onValidate(props.fieldName, cleanHTML(inputValue));
    if (res === "") return true;
    setError(res);
    return false;
  };

  const closeEditor = () => {
    if (isActive) {
      setActive(false);
      if (validateInput() && props.onAccept)
        props.onAccept(props.record_id, props.fieldName, cleanHTML(inputValue));
    }
  };

  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
      setError("");
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      if (enter) {
        closeEditor();
      } else if (esc) {
        setActive(false);
        setInput(props.fieldValue);
      }
    }
  }, [enter, esc]); // watch the Enter and Escape key presses

  let visibleText = errorStr;
  if (visibleText === "") visibleText = props.fieldValue;
  if (visibleText === "") visibleText = inputValue;
  if (visibleText === "") visibleText = "<" + props.placeholder + ">";
  if (visibleText === "") visibleText = "<" + props.fieldName + ">";

  let textCn =
    props.className + " editable_text " + (!isActive ? "" : "hidden");
  if (errorStr !== "") textCn = props.className + " warning";
  const inputCn =
    props.className + " editable_input " + (isActive ? "" : "hidden");

  return (
    <div ref={wrapperRef}>
      <div ref={textRef} onClick={() => setActive(true)} className={textCn}>
        {visibleText}
      </div>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={e => {
          setInput(e.target.value);
          if (props.onChange)
            props.onChange(
              props.record_id,
              props.fieldName,
              cleanHTML(e.target.value)
            );
        }}
        onBlur={e => {
          closeEditor();
        }}
        placeholder={props.placeholder}
        className={inputCn}
      />
    </div>
  );
};

//------------------------------------------------------------------
export const useKeypress = targetKey => {
  const [keyPressed, setKeyPressed] = useState(false);
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
};

//------------------------------------------------------------------
function cleanHTML(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}
