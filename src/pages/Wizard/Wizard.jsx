import React, { Fragment, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { stateFromStorage, fetchFromServer, handleClick } from 'components/utils';

import './Wizard.css';

export const Wizard = () => {
  const [step, setStep] = useState(stateFromStorage('wizardStep', 0));
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    const url = 'http://localhost:3002/wizard/page' + step + '.md';
    fetchFromServer(url, setMarkup, setMarkup);
  }, [step]);

  const handleNav = (action) => {
    switch (action.type) {
      case 'next':
        localStorage.setItem('wizardStep', step + 1);
        setStep(step + 1);
        break;
      case 'previous':
        localStorage.setItem('wizardStep', step - 1);
        setStep(step - 1);
        break;
      case 'first':
        localStorage.setItem('wizardStep', 0);
        setStep(0);
        break;
      default:
        break;
    }
  };

  switch (step) {
    case 'step0':
    case 'step1':
      return <WizardStep markup={markup} current={step} onClick={handleNav} />;
    default:
      return <WizardStep markup={markup} current={step} onClick={handleNav} />;
  }
};

const WizardStep = ({ markup, current, onClick }) => {
  if (!markup || markup === '') return <div>Nothing to see</div>;
  return (
    <div className="wizard-container">
      <div className="left-panel">
        <ReactMarkdown source={markup} />
      </div>
      <div className="right-panel">
        <h4>Navigation</h4>
        <button onClick={(e) => handleClick(e, onClick, { type: 'first' })}>Start Over</button>
        {current === 0 ? (
          <Fragment></Fragment>
        ) : (
          <button onClick={(e) => handleClick(e, onClick, { type: 'previous' })}>Previous...</button>
        )}
        <button onClick={(e) => handleClick(e, onClick, { type: 'next' })}>Next...</button>
      </div>
    </div>
  );
};
