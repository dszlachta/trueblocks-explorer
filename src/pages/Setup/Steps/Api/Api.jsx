import React, { useState, useCallback } from 'react';

import { Check, resultSuccess } from './Check';

export const ApiStep = ({ blockWizard, onSubmit }) => {
    const [checkInProgress, setCheckInProgress] = useState(false);
    const [success, setSuccess] = useState(false);
    const [retries, setRetries] = useState(0);

    const onCheckStarted = useCallback(() => {
        setCheckInProgress(true);
        blockWizard(true);
    }, [blockWizard]);
    const onCheckFinished = useCallback((result) => {
        setCheckInProgress(false);
        setSuccess(result === resultSuccess);
        blockWizard(false);
    }, [blockWizard]);

    const retryCheck = () => {
        setRetries(
            retries + 1
        );
    };

    return (
        <section>
            <h1>Welcome</h1>

            <Check
                retries={retries}
                onCheckStarted={onCheckStarted}
                onCheckFinished={onCheckFinished}
            />

            {!success
                ? null
                : (
                    <div>
                        API is running. We can now start configuring your node
                    </div>
                )
            }

            <button
                onClick={retryCheck}
                disabled={checkInProgress || success}
            >
                Retry
            </button>
        </section>
    );
};