import { useContext } from 'react';

import GlobalContext from 'store';

//----------------------------------------------------------------------
// page-related - for searching do not remove
export const menusDefault = {
  items: [
    { label: 'Dashboard', path: '/', exact: true },
    { label: 'Separator' },
    {
      label: 'Projects',
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
      items: [
        { label: 'Your Monitors', path: 'yours' },
        { label: 'Shared Monitors', path: 'shared' },
      ],
    },
    {
      label: 'Explorer',
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
        { label: 'Your Names' },
        { label: 'Wallets' },
        { label: 'Tokens' },
        { label: 'Prefunds' },
        { label: 'Other Names' },
        { label: 'Groups' },
        { label: 'Separator' },
        { label: 'Downloaded' },
        { label: 'Common' },
        { label: 'Names' },
        { label: 'Params' },
        { label: 'Cross' },
        { label: 'Separator' },
        { label: 'Your Blocks' },
        { label: 'Known Blocks' },
        { label: 'Dated Blocks' },
      ],
    },
    {
      label: 'Signatures',
      exact: true,
      items: [{ label: 'Known' }, { label: 'Monitored' }],
    },
    {
      label: 'Digests',
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
      items: [
        { label: 'Blocks' },
        { label: 'Txs' },
        { label: 'Traces' },
        { label: 'Slurps' },
        { label: 'Separator' },
        { label: 'Prices' },
        { label: 'Abis' },
      ],
    },
    { label: 'Separator' },
    {
      label: 'Settings',
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
      items: [
        { label: 'Free Support', path: 'free' },
        { label: 'Per Incident', path: 'incident' },
        { label: 'Separator' },
        { label: 'Hot Keys', path: 'keys' },
        { label: 'Documentation' },
        { label: 'Licensing' },
        { label: 'Separator' },
        { label: 'Contact Us', path: 'contact' },
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
