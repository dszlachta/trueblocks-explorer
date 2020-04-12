import React from 'react';

import { currentPage } from 'components/utils';

import { SettingsSkins } from './SettingsSkins';
export { SettingsSkins };

export const Settings = () => {
  const subpage = currentPage().subpage;
  switch (subpage) {
    case 'skins':
      return <SettingsSkins />;
    default:
      break;
  }
  return <div className="okay">Actual Settings Page</div>;
};

export const SettingsApi = () => {
  return <div className="okay">Actual Settings Api Page</div>;
};

export const SettingsNode = () => {
  return <div className="okay">Actual Settings Node Page</div>;
};

export const SettingsScraper = () => {
  return <div className="okay">Actual Settings Scraper Page</div>;
};

export const SettingsSharing = () => {
  return <div className="okay">Actual Settings Sharing Page</div>;
};

export const SettingsSchemas = () => {
  return <div className="okay">Actual Settings Schemas Page</div>;
};
