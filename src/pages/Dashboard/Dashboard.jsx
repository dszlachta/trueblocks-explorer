import React from 'react';
import PropTypes from 'prop-types';

import { useDashboard } from 'store';
import { Card, ObjectTable } from 'components/';
import './Dashboard.css';

//----------------------------------------------------
export const Dashboard = () => {
  const boards = useDashboard().state;
  return (
    <div key="dash" className="dashboard">
      <h4>Modules</h4>
      {/* <Group title="Boards"> */}
      {boards.map((board) => {
        return (
          <Card key={board.id} title={board.name} headerLink={board.route} headerClass="card-center">
            <ObjectTable data={board} fields={dashboardFields}/>
          </Card>
        );
      })}
      {/* </Group> */}
    </div >
  );
}

//----------------------------------------------------------------------
const dashboardFields = {
  id: { hidden: true },
  name: { hidden: true },
  route: { hidden: true },
  count: { type: 'number' },
  sizeInBytes: { name: 'size', type: 'filesize' },
  custom: { name: 'shared'},
  date: { type: 'date' },
  timestamp: {}
};