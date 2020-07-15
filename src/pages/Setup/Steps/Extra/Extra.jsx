import React, { Fragment, useState } from 'react';

import { ServiceCheck } from '../../ServiceCheck.jsx';

export const ExtraStep = ({ blockWizard }) => {
    const [blazePostponed, setBlazePostponed] = useState(false);
    const [ipfsPostponed, setIpfsPostponed] = useState(false);
    const blockConditionally = (block) => {
        if (block) {
            blockWizard(true);
        }

        // Unblock wizard only if all postponed
        if (!blazePostponed || !ipfsPostponed) return;

        blockWizard(false);
    };
    const onBlock = (setter) => (block) => {
        setter(!block);
        blockConditionally(block);
    };

    return (
        <Fragment>
            You can also configure optional services now.
            <ServiceCheck
                question="Would you like to configure Blaze Scraper now?"
                yesLabel="Configure Blaze now"
                noLabel="Configure later"
                blockWizard={onBlock(setBlazePostponed)}
            />
            <ServiceCheck
                question="Would you like to configure IPFS node"
                yesLabel="Configure IPFS node now"
                noLabel="Configure later"
                blockWizard={onBlock(setIpfsPostponed)}
            />
        </Fragment>
    );
};