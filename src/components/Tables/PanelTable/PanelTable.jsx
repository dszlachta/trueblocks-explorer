import React from 'react';

import { ObjectTable2 } from 'components';

//-----------------------------------------------------------------
export const PanelTable = ({ data, columns, title = 'Panel Table (pt-)' }) => {
  return (
    <div className="at-body pt-body">
      <PanelHeader title={title} />
      <ObjectTable2 data={data} columns={columns} />
    </div>
  );
};

//-----------------------------------------------------------------
const PanelHeader = ({ title }) => {
  return <div className="base-header at-header pt-header">{title}</div>;
};
