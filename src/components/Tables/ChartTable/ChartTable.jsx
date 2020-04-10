import React, { Fragment } from 'react';

import { Toolbar } from 'components';

import './ChartTable.css';

//-----------------------------------------------------------------
export const ChartTable = ({ columns, data, title = 'Chart Table (ct-)', search = true, pagination = true }) => {
  return (
    <Fragment>
      <Toolbar title={title} search={search} pagination={pagination} />
      <ChartHeader />
      <div className="at-body ct-body">
        <div className="at-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className="dt-cell">Some shit</div>
          <div className="dt-cell">Some shit</div>
        </div>
        <div className="at-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className="dt-cell">Some shit</div>
          <div className="dt-cell">Some shit</div>
        </div>
      </div>
    </Fragment>
  );
};

//-----------------------------------------------------------------
const ChartHeader = ({ cols }) => {
  return <div className="base-header at-header ct-header">Chart Title</div>;
};
