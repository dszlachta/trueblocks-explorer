import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const projectsDefault = [
  {
    id: '0x12..01',
    group: "Group 1",
    name: 'Project 1',
    client: 'Anderson, Andy',
    addresses: [
      "0x5555533333555553333355555333335555533333",
      "0x654e7f49b474e2f5ac29cc5f2f0d41c8a93d6d0a",
      "0x807640a13483f8ac783c557fcdf27be11ea4ac7a",
      "0x9876543210987654321098765432109876543210",
      "0xb97073b754660bb356dfe12f78ae366d77dbc80f",
      "0xf503017d7baf7fbc0fff7492b751025c6a78179b",
      "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359",
      "0xfdecc82ddfc56192e26f563c3d68cb544a96bfed"
    ],
    txs: 2291,
    traces: 100,
    size: '1,201,019',
    deltas: 8,
    monitored: false,
    deleted: true,
  },
  {
    id: '0x12..02',
    group: "Group 1",
    name: 'Project 2',
    client: 'John\'s Bookstore',
    addresses: [
      "0x001d14804b399c6ef80e64576f657660804fec0b",
    ],
    txs: 1000,
    traces: 100,
    size: '899,100',
    deltas: 8,
    monitored: false,
    deleted: false,
  },
  {
    id: '0x12..03',
    group: "Group 1",
    name: 'Carson Flowers',
    client: 'Carson, Jane',
    addresses: [
      "0x001d14804b399c6ef80e64576f657660804fec0b",
      "0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb",
      "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359",
      "0xfdecc82ddfc56192e26f563c3d68cb544a96bfed"
    ],
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..04',
    group: "Group 1",
    name: 'May Construction',
    client: 'May John',
    addresses: [
      "0x001d14804b399c6ef80e64576f657660804fec0b",
      "0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb",
      "0x1111111111111111111111111111111111111111",
      "0x1111122222111112222211111222221111122222",
      "0x1234567812345678123456781234567812345678",
    ],
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: false,
  },
  {
    id: '0x12..05',
    group: "Group 2",
    name: 'The Poetry Shop',
    client: 'Tudhope, Andy',
    addresses: [
      "0xfdecc82ddfc56192e26f563c3d68cb544a96bfed"
    ],
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: false,
    deleted: true,
  },
  {
    id: '0x12..06',
    group: "Group 2",
    name: 'Maker DAO',
    client: 'Maker',
    addresses: [
      "0x001d14804b399c6ef80e64576f657660804fec0b",
      "0xfdecc82ddfc56192e26f563c3d68cb544a96bfed"
    ],
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: false,
  },
  {
    id: '0x12..07',
    group: "Group 2",
    name: 'Whale No. 1',
    client: 'Buter, in',
    addresses: [
      "0x001d14804b399c6ef80e64576f657660804fec0b",
      "0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb",
    ],
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..08',
    group: "Group 3",
    name: 'Whale No. 2',
    client: 'Lub, in',
    addresses: [
      "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359",
      "0xfdecc82ddfc56192e26f563c3d68cb544a96bfed"
    ],
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
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'edit_project':
      window.location = "/projects/edit?id=" + project.id;
      break;
    case 'remove_project':
      ret = ret.filter((project) => project.id !== action.id);
      break;
    case 'reset':
      ret = projectsDefault;
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
  var ret = projects.map((project) => {
    if (project.id === id)
      return record;
    return project;
  });
  return ret;
}

//----------------------------------------------------------------------
export const useProjects = () => {
  return useContext(GlobalContext).projects;
}
