import React from 'react';

import { ServiceCheck } from '../../ServiceCheck.jsx';

export const NodeStep = ({ blockWizard }) => {
    return (
        <ServiceCheck
            question="Would you like to configure an Ethereum node now?"
            yesLabel="Configure Ethereum node now"
            noLabel="Configure later"
            blockWizard={blockWizard}
        />
    );
};