import React, { Fragment } from 'react';

import { TableToolbar } from 'components';

import './GridTable.css';

export const GridTable = ({ columns, data, title }) => {
  return (
    <Fragment>
      <TableToolbar title={title} />
      <div style={{ border: '1px solid black', backgroundColor: '#265077', color: 'white' }}>Grid Table</div>
    </Fragment>
  );
};
