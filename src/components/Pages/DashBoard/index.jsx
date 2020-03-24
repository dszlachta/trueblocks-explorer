import React from 'react';
import { Panel } from 'components/Panels';
import './DashBoard.css';

const projects = [
  {
    name: 'Project 1',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    name: 'Project 2',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    name: 'Project 3',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    name: 'Project 4',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    name: 'Project 5',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
]

export const DashBoard = () => {
  return (
    <div className="dashboard">
      {projects.map((project) => {
        return (<Card title={project.name} noIcon>
          <li>{project.addrs} addresses</li>
          <li>{project.txs} txs</li>
          <li>{project.traces} traces</li>
          <li>{project.size} bytes</li>
          <li>{project.deltas} deltas</li>
        </Card>);
      })}
    </div>
  );
}

const Card = ({title, noIcon, children}) => {
  return (
    <div className="card">
      <Panel title={title} noIcon={noIcon} headCn="card-header">
        {children}
      </Panel>
    </div>
  );
}