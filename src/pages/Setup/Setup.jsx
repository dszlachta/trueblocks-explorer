import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { PageHeaderLeft } from 'page-parts/PageHeader';

import { setupStepOrder } from './setup_steps';

import { Wizard } from './Wizard.jsx';

import './Setup.css';

const setupAlreadyCompleted = false;

export const Setup = () => {
    const [currentStep, setCurrentStep] = useState(setupStepOrder[0]);

    if (setupAlreadyCompleted) {
        return (
            <Redirect to="/" />
        );
    }

    const showPreviousStep = () => setCurrentStep(setupStepOrder[
        Math.max(0, setupStepOrder.indexOf(currentStep) - 1)
    ]);
    const showNextStep = () => setCurrentStep(setupStepOrder[
        Math.min(setupStepOrder.length - 1, setupStepOrder.indexOf(currentStep) + 1)
    ]);

    return (
        <div className="setup">
            <PageHeaderLeft isLink={false} />
            <Wizard
                currentStep={currentStep}
                onPreviousClick={showPreviousStep}
                onNextClick={showNextStep}
            />
        </div>
    );
};