import React from 'react';

import { currentPage } from 'components/utils';

export const Other = () => {
  return <div>{'Actual Other Page: ' + currentPage().page + ' ' + currentPage().subpage}</div>;
};
