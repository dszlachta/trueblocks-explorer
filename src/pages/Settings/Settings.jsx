import React from 'react';

import { useStatusData } from 'store';
import { currentPage, systemCheck } from 'components/utils';

import { SettingsSkins } from './SettingsSkins';
import { SettingsStatus } from './SettingsStatus';

export const Settings = () => {
  const status = useStatusData();
  if (!systemCheck(status, 'api') || !systemCheck(status, 'node')) return <SettingsStatus />;

  const subpage = currentPage().subpage;
  switch (subpage) {
    case 'skins':
      return <SettingsSkins />;
    case 'status':
      return <SettingsStatus />;
    default:
      break;
  }
  return <div className="okay">Actual Settings Page</div>;
};
