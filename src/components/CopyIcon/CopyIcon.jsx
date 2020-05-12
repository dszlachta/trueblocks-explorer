import React, { Fragment } from 'react';

import { getIcon } from 'pages/utils';
import { handleClick } from 'components/utils';

//--------------------------------------------------------------
export const Copyable = ({ display, copyable = null, handler }) => {
  if (!copyable) return display;
  return (
    <div style={{ display: 'flex' }}>
      {display}
      {copyable && <CopyIcon text={copyable} handler={handler} />}
    </div>
  );
};

//--------------------------------------------------------------
const CopyIcon = ({ text, handler }) => {
  const [copyToClipboard] = useCopyToClipboard();
  return (
    <div style={{ paddingLeft: '5px' }} onClick={(e) => copyToClipboard(e, text, handler)}>
      {getIcon(text, 'Copy', false, false, 12)}
    </div>
  );
};

//--------------------------------------------------------------
const useCopyToClipboard = () => {
  const copyToClipboard = (e, text, handler) => {
    if (typeof text == 'string' || typeof text == 'number') {
      const element = document.createElement('textarea'); // create textarea HTML element
      element.value = text; // add the text to be copied to the element
      document.body.appendChild(element); // add element to DOM
      element.select(); // select the text
      document.execCommand('copy'); // execute copy command
      document.body.removeChild(element); // remove element from DOM
      if (handler) handleClick(e, handler, { type: 'copied', text: text });
    } else {
      console.error(`Cannot copy typeof ${typeof text} to clipboard, must be a valid string or number.`);
      if (handler) handleClick(e, handler, { type: 'not-copied', text: text });
    }
  };
  return [copyToClipboard];
};
