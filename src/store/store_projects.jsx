import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const projectsDefault = [
  {
    id: '0x12..01',
    projectGroup: "Group 1",
    name: 'Project 1',
    client: 'Anderson, Andy',
    addrs: 5,
    txs: 2291,
    traces: 100,
    size: '1,201,019',
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..02',
    projectGroup: "Group 1",
    name: 'Project 2',
    client: 'John\'s Bookstore',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: '899,100',
    deltas: 8,
    monitored: false,
    deleted: false,
  },
  {
    id: '0x12..03',
    projectGroup: "Group 1",
    name: 'Carson Flowers',
    client: 'Carson, Jane',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..04',
    projectGroup: "Group 1",
    name: 'May Construction',
    client: 'May John',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: false,
    deleted: false,
  },
  {
    id: '0x12..05',
    projectGroup: "Group 2",
    name: 'The Poetry Shop',
    client: 'Tudhope, Andy',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..06',
    projectGroup: "Group 2",
    name: 'Maker DAO',
    client: 'Maker',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: false,
    deleted: false,
  },
  {
    id: '0x12..07',
    projectGroup: "Group 2",
    name: 'Whale No. 1',
    client: 'Buter, in',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..08',
    projectGroup: "Group 3",
    name: 'Whale No. 2',
    client: 'Lub, in',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: false,
    deleted: false,
  },
];

//----------------------------------------------------------------------
export const projectsReducer = (state, action) => {
  let ret = state;
  let project = ret.find((p) => p.id === action.id);
  switch (action.type) {
    case 'success':
      ret = action.payload;
      break;
    case 'toggle_monitor':
      project.monitored = !project.monitored;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'toggle_deleted':
      project.deleted = !project.deleted;
      project.monitored = false;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'edit_project':
      window.location = "/projects/edit?id=" + project.id;
      break;
    case 'remove_project':
      window.location = "/projects/edit?id=" + project.id;
      break;
    case 'fail':
      break;
    default:
      break;
  }
  // TODO(tjayrush): this does not write to the back end
  localStorage.setItem('projectsState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
const replaceRecord = (projects, record, id) => {
  projects = projects.map((project) => {
    if (project.id === id)
      return record;
    return project;
  });
  return projects;
}

//----------------------------------------------------------------------
export const useProjects = () => {
  return useContext(GlobalContext).projects;
}
