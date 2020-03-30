import { useContext } from 'react';
import GlobalContext from 'store';

//----------------------------------------------------------------------
export const menusDefault = {
  items: [
    { label: 'Dashboard', path: '/', exact: true },
    {
      label: 'Projects',
      items: [
        { label: 'View...', enableFunc: (page) => { return page === 'view' } },
        { label: 'Edit...' },
        { label: 'Save' },
        { label: 'Export' }
      ]
    },
    {
      label: 'Monitors',
      items: [
        { label: 'Your Monitors', path: 'yours' },
        { label: 'Shared Monitors', path: 'shared' }
      ]
    },
    { label: 'Names' },
    { label: 'Signatures' },
    { label: 'Caches' },
    {
      label: 'Settings',
      items: [{ label: 'API' }, { label: 'Node' }, { label: 'Scraper' }, { label: 'Sharing' }, { label: 'Skins' }]
    },
    {
      label: 'Support',
      items: [
        { label: 'Hot Keys', path: 'keys' },
        { label: 'Free Support', path: 'free' },
        { label: 'Per Incident', path: 'incident' },
        { label: 'Documentation' },
        { label: 'Contact Us', path: 'contact' },
        { label: 'About Us', path: 'about' }
      ]
    }
  ]
};

//----------------------------------------------------------------------
export const menusReducer = (state, action) => {
  if (action.type === 'toggle') {
  }
  let ret = state;
  // console.log('menu: ', ret, action);
  // const found = ret.find((item) => {
  //   console.log(item.key, action.text.toLowerCase(), item.key === action.text.toLowerCase());
  //   return item.key === action.text.toLowerCase();
  // });
  // console.log('found: ', found.props);
  // if (found) {
  //   ret = { ...ret, name: 'shit' };
  // }
  // switch (action.type) {
  //   case 'disable':
  //     const found = ret.find((item) => {
  //       return item['key'] === 'names';
  //     });
  //     if (found) ret = { ...ret, name: 'Found' };
  //     break;
  //   default:
  //     break;
  // }
  return ret;
};

//----------------------------------------------------------------------
export const useMenus = () => {
  return useContext(GlobalContext).menus;
};
