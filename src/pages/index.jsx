import React from 'react';
import PropTypes from 'prop-types';

import Mousetrap from 'mousetrap';
import { useContext } from 'react';

import GlobalContext from 'store';

import { currentPage } from 'components/utils';

// page-related - for searching do not remove
import { Dashboard } from './Dashboard/Dashboard';
import { Projects } from './Projects/Projects';
import { Names } from './Names/Names';
import { Signatures } from './Signatures/Signatures';
import { Digests } from './Digests/Digests';
import { Caches } from './Caches/Caches';
import { Settings } from './Settings/Settings';
import { Support } from './Support/Support';

const Generic = ({ page }) => {
  return <h4>Undefined Generic Page: {page}</h4>;
};

export const thePages = {
  // page-related - for searching do not remove
  'dashboard/': { component: <Dashboard /> },
  //
  'projects/': { component: <Projects /> },
  'projects/view': { component: <Projects /> },
  'projects/edit': { component: <Projects /> },
  'projects/save': { component: <Projects /> },
  'projects/export': { component: <Projects /> },
  //
  'monitors/': { component: <Generic page="Monitors" /> },
  'monitors/yours': { component: <Generic page="Monitors" /> },
  'monitors/shared': { component: <Generic page="Monitors" /> },
  //
  'explorer/': { component: <Generic page="Explorer" /> },
  'explorer/accounts': { component: <Generic page="Explorer" /> },
  'explorer/blocks': { component: <Generic page="Explorer" /> },
  'explorer/transactions': { component: <Generic page="Explorer" /> },
  'explorer/receipts': { component: <Generic page="Explorer" /> },
  'explorer/logs': { component: <Generic page="Explorer" /> },
  'explorer/traces': { component: <Generic page="Explorer" /> },
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
  'signatures/names': { component: <Generic page="Other" /> },
  'signatures/params': { component: <Generic page="Other" /> },
  'signatures/cross': { component: <Generic page="Other" /> },
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
  'other/': { component: <Generic page="Other" /> },
  'other/downloaded': { component: <Generic page="Other" /> },
  'other/common': { component: <Generic page="Other" /> },
  'other/your%20blocks': { component: <Generic page="Other" /> },
  'other/known%20blocks': { component: <Generic page="Other" /> },
  'other/dated%20blocks': { component: <Generic page="Other" /> },
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
};

//----------------------------------------------------------------------
// page-related - for searching do not remove
export const theMenu = {
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
      items: [{ label: 'Your Blocks' }, { label: 'Known Blocks' }, { label: 'Dated Blocks' }],
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
  Mousetrap.unbind(['left']);
  Mousetrap.unbind(['up']);
  Mousetrap.unbind(['right']);
  Mousetrap.unbind(['down']);
  const { page, subpage } = currentPage();
  const ret = thePages[page + '/' + subpage];
  console.log('p: ', page, ' s:', subpage, ' ret: ', ret);
  return ret ? ret.component : <div className="warning">Missing Inner Page</div>;
};
