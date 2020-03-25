import React from 'react';
import PropTypes from 'prop-types';

import { usePanels } from 'store';
import { Panel, Menu, MenuItem } from 'components/';
import './MenuPanel.css';

//----------------------------------------------------------------------
export const MenuPanel = () => {
  const selected = window.location.pathname.replace(/^\/([^/]+).*/, '$1');
  return (
    <Panel title="Menu" options={{ type: 'menu', dir: 'left', expanded: usePanels().state.menu }}>
      <Menu menus={theMenus} selected={selected} />
    </Panel>
  );
};

//----------------------------------------------------------------------
const ProjectMenu = () => {
  return (
    <MenuItem to='/projects' text='Projects'>
      <MenuItem indent to='/projects/new' text='New...' />
      <MenuItem indent to='/projects/open' text='Open...' />
      <MenuItem indent to='/projects/edit' text='Edit...' />
      <MenuItem indent to='/projects/save' text='Save' />
      <MenuItem indent to='/projects/export' text='Export' />
    </MenuItem>
  );
}

//----------------------------------------------------------------------
const MonitorsMenu = () => {
  return (
    <MenuItem to='/monitors' text='Monitors'>
      <MenuItem indent to='/monitors/yours' text='Your Monitors' />
      <MenuItem indent to='/monitors/shared' text='Shared Monitors' />
    </MenuItem>
  );
}

//----------------------------------------------------------------------
const SettingsMenu = () => {
  return (
    <MenuItem to='/settings' text='Settings'>
      <MenuItem indent to='/settings/api' text='API' />
      <MenuItem indent to='/settings/node' text='Node' />
      <MenuItem indent to='/settings/scraper' text='Scraper' />
      <MenuItem indent to='/settings/sharing' text='Sharing' />
      <MenuItem indent to='/settings/skins' text='Skins' />
    </MenuItem>
  );
}

//----------------------------------------------------------------------
const SupportMenu = () => {
  return (
    <MenuItem to='/support' text='Support'>
      <MenuItem indent to='/support/free' text='Free Support' />
      <MenuItem indent to='/support/incident' text='Per Incident' />
      <MenuItem indent to='/support/documentation' text='Documentation' />
      <MenuItem indent to='/support/contact' text='Contact Us' />
      <MenuItem indent to='/support/about' text='About Us' />
    </MenuItem>
  );
}

//----------------------------------------------------------------------
const theMenus = [
  <MenuItem key="dashboard" exact to='/' text='Dashboard' />,
  <ProjectMenu key="projects" />,
  <MonitorsMenu key="monitors" />,
  <MenuItem key="names" to='/names' text='Names' />,
  <MenuItem key="signatures" to='/signatures' text='Signatures' />,
  <MenuItem key="caches" to='/caches' text='Caches' />,
  <SettingsMenu key="settings" />,
  <SupportMenu key="support" />,
];
