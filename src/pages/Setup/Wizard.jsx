import React, { useState, useCallback } from 'react';

import {
    setupStepOrder,
    apiSetupStep,
    nodeSetupStep,
    extraSetupStep,
    finishedStep,
} from './setup_steps';

import {
    ApiStep,
    NodeStep,
    ExtraStep,
    FinishedStep,
} from './Steps';

import './Wizard.css';

const stepToComponent = new Map([
    [apiSetupStep, (props) => (<ApiStep {...props} />)],
    [nodeSetupStep, (props) => (<NodeStep {...props} />)],
    [extraSetupStep, (props) => (<ExtraStep {...props} />)],
    [finishedStep, (props) => (<FinishedStep {...props} />)]
]);

const WizardButton = ({ disabled, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export const Wizard = ({ currentStep, onPreviousClick, onNextClick }) => {
    const [navigationBlocked, setNavigationBlocked] = useState(false);
    const blockWizard = useCallback((block) => setNavigationBlocked(block), []);

    const stepComponentToDisplay = stepToComponent.get(currentStep);
    const firstStep = setupStepOrder.indexOf(currentStep) === 0;

    if (!stepComponentToDisplay) {
        throw new Error(`Missing component or bad step index: ${currentStep}`);
    }

    const previousButton = (
        <WizardButton
            key={'previous'}
            onClick={onPreviousClick}
            disabled={navigationBlocked}
        >
            &lt;
        </WizardButton>
    );

    const nextButton = (
        <WizardButton
            key={'next'}
            onClick={onNextClick}
            disabled={navigationBlocked}
        >
            &gt;
        </WizardButton>
    );
    const startButton = (
        <WizardButton
            onClick={onNextClick}
            disabled={navigationBlocked}
        >
            Start
        </WizardButton>
    );

    return (
        <section className="wizard">
            <div>
            {stepComponentToDisplay({ blockWizard })}
            <div>
                {firstStep
                    ? startButton
                    : [previousButton, nextButton]
                }
            </div>
            </div>
        </section>
    );
}