import React from 'react';

import { useStatusData } from 'store';
import { currentPage, systemCheck } from 'components/utils';

import { SettingsStatus } from './SettingsStatus';
import { SettingsSkins } from './SettingsSkins';
import { SettingsSchemas } from './SettingsSchemas';

export const Settings = () => {
  const status = useStatusData();
  if (!systemCheck(status, 'api') || !systemCheck(status, 'node')) return <SettingsStatus />;

  const subpage = currentPage().subpage;
  switch (subpage) {
    case 'schemas':
      console.log(subpage);
      return <SettingsSchemas />;
    case 'skins':
      return <SettingsSkins />;
    case 'status':
    default:
      return <SettingsStatus />;
  }
};
