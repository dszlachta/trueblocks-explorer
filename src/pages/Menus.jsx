import { useContext } from 'react';

import GlobalContext from 'store';

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
