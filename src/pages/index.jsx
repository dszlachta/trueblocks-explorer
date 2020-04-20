import React from 'react';

import { useContext } from 'react';
import GlobalContext, { useStatusData } from 'store';

import { currentPage, systemCheck } from 'components/utils';

//----------------------------------------------------------------------
// auto-generate: imports
import { Dashboard } from './Dashboard/Dashboard';
import { Projects } from './Projects/Projects';
import { Monitors } from './Monitors/Monitors';
import { Explorer } from './Explorer/Explorer';
import { Names } from './Names/Names';
import { Signatures } from './Signatures/Signatures';
import { Digests } from './Digests/Digests';
import { Caches } from './Caches/Caches';
import { Other } from './Other/Other';
import { Settings } from './Settings/Settings';
import { Support } from './Support/Support';
// auto-generate: imports

//----------------------------------------------------------------------
export const thePages = {
  // auto-generate: pages
  'dashboard/': { component: <Dashboard /> },
  //
  'projects/': { component: <Projects /> },
  'projects/view': { component: <Projects /> },
  'projects/edit': { component: <Projects /> },
  'projects/save': { component: <Projects /> },
  'projects/export': { component: <Projects /> },
  //
  'monitors/': { component: <Monitors /> },
  'monitors/yours': { component: <Monitors /> },
  'monitors/shared': { component: <Monitors /> },
  //
  'explorer/': { component: <Explorer /> },
  'explorer/blocks': { component: <Explorer /> },
  'explorer/transactions': { component: <Explorer /> },
  'explorer/receipts': { component: <Explorer /> },
  'explorer/logs': { component: <Explorer /> },
  'explorer/traces': { component: <Explorer /> },
  //
  'names/': { component: <Names /> },
  'names/yours': { component: <Names /> },
  'names/wallets': { component: <Names /> },
  'names/tokens': { component: <Names /> },
  'names/prefunds': { component: <Names /> },
  'names/other': { component: <Names /> },
  'names/groups': { component: <Names /> },
  //
  'signatures/': { component: <Signatures /> },
  'signatures/known': { component: <Signatures /> },
  'signatures/monitored': { component: <Signatures /> },
  'signatures/names': { component: <Signatures /> },
  'signatures/params': { component: <Signatures /> },
  'signatures/cross': { component: <Signatures /> },
  //
  'digests/': { component: <Digests /> },
  'digests/finalized': { component: <Digests /> },
  'digests/staged': { component: <Digests /> },
  'digests/unripe': { component: <Digests /> },
  'digests/columns': { component: <Digests /> },
  //
  'caches/': { component: <Caches /> },
  'caches/blocks': { component: <Caches /> },
  'caches/transactions': { component: <Caches /> },
  'caches/traces': { component: <Caches /> },
  'caches/slurps': { component: <Caches /> },
  'caches/prices': { component: <Caches /> },
  'caches/abis': { component: <Caches /> },
  //
  'other/': { component: <Other /> },
  'other/yours': { component: <Other /> },
  'other/known': { component: <Other /> },
  'other/dated': { component: <Other /> },
  //
  'settings/': { component: <Settings /> },
  'settings/status': { component: <Settings /> },
  'settings/config': { component: <Settings /> },
  'settings/skins': { component: <Settings /> },
  'settings/schemas': { component: <Settings /> },
  'settings/icons': { component: <Settings /> },
  //
  'support/': { component: <Support /> },
  'support/contact': { component: <Support /> },
  'support/keys': { component: <Support /> },
  'support/documentation': { component: <Support /> },
  'support/licensing': { component: <Support /> },
  'support/about': { component: <Support /> },
  //
  // auto-generate: pages
};

//----------------------------------------------------------------------
export const theMenu = {
  // auto-generate: menus
  items: [
    {
      label: 'Dashboard',
      exact: true,
    },
    { label: 'Separator' },
    {
      label: 'Projects',
      exact: true,
      items: [
        { label: 'View...', route: 'view' },
        { label: 'Edit...', route: 'edit' },
        { label: 'Save' },
        { label: 'Export' },
      ],
    },
    {
      label: 'Monitors',
      exact: true,
      items: [
        { label: 'Your Monitors', route: 'yours' },
        { label: 'Shared Monitors', route: 'shared' },
      ],
    },
    {
      label: 'Explorer',
      exact: true,
      items: [
        { label: 'Blocks' },
        { label: 'Transactions' },
        { label: 'Receipts' },
        { label: 'Logs' },
        { label: 'Traces' },
      ],
    },
    { label: 'Separator' },
    {
      label: 'Names',
      exact: true,
      items: [
        { label: 'Your Names', route: 'yours' },
        { label: 'Wallets' },
        { label: 'Tokens' },
        { label: 'Prefunds' },
        { label: 'Other Names', route: 'other' },
        { label: 'Groups' },
      ],
    },
    {
      label: 'Signatures',
      exact: true,
      items: [
        { label: 'Known' },
        { label: 'Monitored' },
        { label: 'Separator' },
        { label: 'Names' },
        { label: 'Params' },
        { label: 'Cross' },
      ],
    },
    {
      label: 'Digests',
      exact: true,
      items: [
        { label: 'Finalized' },
        { label: 'Staged' },
        { label: 'Unripe' },
        { label: 'Separator' },
        { label: 'Columns' },
      ],
    },
    {
      label: 'Caches',
      exact: true,
      items: [
        { label: 'Blocks' },
        { label: 'Transactions' },
        { label: 'Traces' },
        { label: 'Separator' },
        { label: 'Slurps' },
        { label: 'Prices' },
        { label: 'Abis' },
      ],
    },
    {
      label: 'Other',
      exact: true,
      items: [
        { label: 'Your Blocks', route: 'yours' },
        { label: 'Known Blocks', route: 'known' },
        { label: 'Dated Blocks', route: 'dated' },
      ],
    },
    { label: 'Separator' },
    {
      label: 'Settings',
      exact: true,
      items: [
        { label: 'System Status', route: 'status' },
        { label: 'Configuration', route: 'config' },
        { label: 'Separator' },
        { label: 'Skins' },
        { label: 'Schemas' },
        { label: 'Icons' },
      ],
    },
    {
      label: 'Support',
      exact: true,
      items: [
        { label: 'Contact Us', route: 'contact' },
        { label: 'Separator' },
        { label: 'Hot Keys', route: 'keys' },
        { label: 'Documentation' },
        { label: 'Separator' },
        { label: 'Licensing' },
        { label: 'About Us', route: 'about' },
      ],
    },
  ],
  // auto-generate: menus
};

//----------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.label;
    case 'name':
      return record.label;
    case 'route':
      return 'support/' + record.route;
    default:
      break;
  }
}

//----------------------------------------------------------------------
// auto-generate: schema
export const menuSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Label',
    selector: 'label',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Route',
    selector: 'route',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Description',
    selector: 'descr',
    type: 'string',
  },
];
// auto-generate: schema

//----------------------------------------------------------------------
export const menusReducer = (state, action) => {
  return state;
};

//----------------------------------------------------------------------
export const useMenus = () => {
  return useContext(GlobalContext).menus;
};

//----------------------------------------------------------------------
export const InnerPage = () => {
  const status = useStatusData();
  if (!systemCheck(status, 'api') || !systemCheck(status, 'node')) return <Settings />;
  const { page, subpage } = currentPage();
  const ret = thePages[page + '/' + subpage];
  return ret ? ret.component : <div className="warning">Missing Inner Page</div>;
};
