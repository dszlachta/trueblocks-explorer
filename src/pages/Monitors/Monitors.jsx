import React from 'react';

import { currentPage } from 'components/utils';

export const Monitors = () => {
  return <div>{'Actual Monitors Page: ' + currentPage().page + ' ' + currentPage().subpage}</div>;
};
