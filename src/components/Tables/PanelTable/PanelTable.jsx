import React from 'react';

import { ObjectTable } from 'components';

//-----------------------------------------------------------------
export const PanelTable = ({ data, columns, title = 'Panel Table (pt-)' }) => {
  return (
    <div className="at-body pt-body">
      <PanelTableHeader title={title} />
      <ObjectTable data={data} columns={columns} />
    </div>
  );
};

//-----------------------------------------------------------------
const PanelTableHeader = ({ title }) => {
  return <div className="at-header-base at-header pt-header">{title}</div>;
};
