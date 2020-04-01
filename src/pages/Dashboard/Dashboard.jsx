import React from 'react';
import PropTypes from 'prop-types';

import { useDashboard, dashboardSchema } from 'store';
import { Card, ObjectTable } from 'components/';
import './Dashboard.css';

//----------------------------------------------------
export const Dashboard = () => {
  const dashboards = useDashboard().state;

  return (
    <div key="dash" className="dashboard">
      <h4>Modules</h4>
      {dashboards.map((board) => {
        return (
          <Card key={board.id} title={board.name} headerLink={board.route} headerClass="card-center">
            <ObjectTable data={board} fields={dashboardSchema}/>
          </Card>
        );
      })}
    </div >
  );
}
