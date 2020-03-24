import React from 'react';
import { Link } from 'react-router-dom';
import { useDashboard } from 'store';
import { Card } from 'components/';
import ToggleLeft from 'assets/icons/toggle-left';
import ToggleRight from 'assets/icons/toggle-right';
import './Dashboard.css';

export const Dashboard = () => {
  const boards = useDashboard().state;
  const boardDispatch = useDashboard().dispatch;
  return (
    <div key="dash" className="dashboard">
      {/* <Group title="Boards"> */}
      {/* <div>skip</div> */}
      {boards.map((board) => {
        const action = { type: 'toggle', id: board.id };
        // const on = <ToggleRight key={'icon' + board.id} fill="lightyellow" color="green" onClick={() => boardDispatch(action)} />;
        // const off = <ToggleLeft key={'icon' + board.id} fill="lightyellow" color="red" onClick={() => boardDispatch(action)} />;
        // const toggleIcon = board.monitored ? on : off;
        /* inCon={toggleIcon}> */
        const fields = Object.keys(board);
        return (
          <Card key={board.id} title={board.name} inCon={<></>} headerLink={board.route}>
            <ObjectTable data={board} fields={fields} />
          </Card>
        );
      })}
      {/* </Group> */}
    </div >
  );
}

const ObjectTable = ({ data, fields }) => {
  return (
    <>
      <table style={{ display: 'block', width: '80%', textDecorate: 'none' }}>
        <tbody>
          {fields.map(key => {
            let value = data[key];
            if (value === '' && key === 'sharedTo')
              value = 'Not shared';
            return (
              <tr>
                <td style={{ backgroundColor: 'lightgrey' }} width='10%'></td>
                <td style={{ backgroundColor: 'lightgrey' }} width="40%"><div style={{ textDecorate: 'none' }}>{key}:</div></td>
                <td align="right" width="40%"><div style={{ textDecorate: 'none' }}>{value}</div></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}