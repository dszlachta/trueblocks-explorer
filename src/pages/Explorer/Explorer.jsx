import React from 'react';

import { currentPage } from 'components/utils';

export const Explorer = () => {
  return <div>{'Actual Explorer Page: ' + currentPage().page + ' ' + currentPage().subpage}</div>;
};

// auto-generate: schema
export const explorerSchema = [
];
// auto-generate: schema
