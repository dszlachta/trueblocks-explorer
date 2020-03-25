import React from 'react';
import PropTypes from 'prop-types';

import { useDashboard } from 'store';
import { Card, ObjectTable } from 'components/';
import './Dashboard.css';

export const Dashboard = () => {
  const boards = useDashboard().state;
  return (
    <div key="dash" className="dashboard">
      {/* <Group title="Boards"> */}
      {boards.map((board) => {
        const fields = Object.keys(board);
        return (
          <Card key={board.id} title={board.name} inCon={<></>} headerLink={board.route} headClass="card-center">
            <ObjectTable data={board} fields={fields} />
          </Card>
        );
      })}
      {/* </Group> */}
    </div >
  );
}
