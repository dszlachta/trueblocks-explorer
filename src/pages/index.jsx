import React from 'react';

import Mousetrap from 'mousetrap';
import { useContext } from 'react';

import GlobalContext from 'store';

import { currentPage } from 'components/utils';

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
  'explorer/accounts': { component: <Explorer /> },
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
  'other/downloaded': { component: <Other /> },
  'other/common': { component: <Other /> },
  'other/yours': { component: <Other /> },
  'other/known': { component: <Other /> },
  'other/dated': { component: <Other /> },
  //
  'settings/': { component: <Settings /> },
  'settings/api': { component: <Settings /> },
  'settings/node': { component: <Settings /> },
  'settings/scraper': { component: <Settings /> },
  'settings/sharing': { component: <Settings /> },
  'settings/skins': { component: <Settings /> },
  'settings/schemas': { component: <Settings /> },
  //
  'support/': { component: <Support /> },
  'support/keys': { component: <Support /> },
  'support/contact': { component: <Support /> },
  'support/documentation': { component: <Support /> },
  'support/licensing': { component: <Support /> },
  'support/about': { component: <Support /> },
  //
  // auto-generate: pages
};

//----------------------------------------------------------------------
export const theMenu = {
  // auto-generate: pages-menus
  items: [
    { label: 'Dashboard', exact: true, path: '/' },
    { label: 'Separator' },
    {
      label: 'Projects',
      exact: true,
      items: [
        {
          label: 'View...',
          enableFunc: (page) => {
            return page === 'view';
          },
        },
        { label: 'Edit...' },
        { label: 'Save' },
        { label: 'Export' },
      ],
    },
    {
      label: 'Monitors',
      exact: true,
      items: [
        { label: 'Your Monitors', path: 'yours' },
        { label: 'Shared Monitors', path: 'shared' },
      ],
    },
    {
      label: 'Explorer',
      exact: true,
      items: [
        { label: 'Accounts' },
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
        { label: 'Your Names', path: 'yours' },
        { label: 'Wallets' },
        { label: 'Tokens' },
        { label: 'Prefunds' },
        { label: 'Other Names', path: 'other' },
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
        { label: 'Abis' },
        { label: 'Slurps' },
        { label: 'Prices' },
      ],
    },
    {
      label: 'Other',
      exact: true,
      items: [{ label: 'Downloaded' }, { label: 'Common' }, { label: 'Yours' }, { label: 'Known' }, { label: 'Dated' }],
    },
    { label: 'Separator' },
    {
      label: 'Settings',
      exact: true,
      items: [
        { label: 'API Config', path: 'api' },
        { label: 'Node Config', path: 'node' },
        { label: 'Scraper Config', path: 'scraper' },
        { label: 'Sharing Config', path: 'sharing' },
        { label: 'Separator' },
        { label: 'Skins' },
        { label: 'Schemas' },
      ],
    },
    {
      label: 'Support',
      exact: true,
      items: [
        { label: 'Contact Us', path: 'contact' },
        { label: 'Separator' },
        { label: 'Hot Keys', path: 'keys' },
        { label: 'Documentation' },
        { label: 'Separator' },
        { label: 'Licensing' },
        { label: 'About Us', path: 'about' },
      ],
    },
  ],
  // auto-generate: pages-menus
};

//----------------------------------------------------------------------
export const menusReducer = (state, action) => {
  // users cannot change the menus
  return state;
};

//----------------------------------------------------------------------
export const useMenus = () => {
  return useContext(GlobalContext).menus;
};

//----------------------------------------------------------------------
export const InnerPage = () => {
  Mousetrap.unbind(['meta+shift+home']);
  Mousetrap.unbind(['meta+shift+end']);
  Mousetrap.unbind(['home']);
  Mousetrap.unbind(['end']);
  Mousetrap.unbind(['up']);
  Mousetrap.unbind(['left']);
  Mousetrap.unbind(['down']);
  Mousetrap.unbind(['right']);
  const { page, subpage } = currentPage();
  const ret = thePages[page + '/' + subpage];
  return ret ? ret.component : <div className="warning">Missing Inner Page</div>;
};
