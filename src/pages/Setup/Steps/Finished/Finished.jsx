import React, { Fragment, useEffect } from 'react';

export const FinishedStep = ({ blockWizard }) => {
    useEffect(() => {
        blockWizard(true);
    });

    const goToApp = () => window.location = '/';

    return (
        <Fragment>
            The setup process is done. We can now run TrueBlocks Explorer.
            <button onClick={goToApp}>
                Start TrueBlocks Explorer
             </button>
        </Fragment>
    );
};