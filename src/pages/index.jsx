import React from 'react';
import PropTypes from 'prop-types';

import { currentPage } from 'components/utils';

// page-related - for searching do not remove
import { Dashboard } from './Dashboard';
import { Projects, ProjectsView, ProjectsEdit, ProjectsSave, ProjectsExport } from './Projects/Projects';
import { Names } from './Names/Names';
import { Signatures } from './Signatures/Signatures';
import { Digests } from './Digests/Digests';
import { Caches } from './Caches/Caches';
import {
  Settings,
  SettingsApi,
  SettingsNode,
  SettingsScraper,
  SettingsSharing,
  SettingsSkins,
  SettingsSchemas,
} from './Settings/Settings';
import {
  Support,
  SupportKeys,
  SupportFree,
  SupportIncident,
  SupportDocumentation,
  SupportLicensing,
  SupportContact,
  SupportAbout,
} from './Support/Support';

const Generic = ({ page }) => {
  return <div style={{ backgroundColor: 'yellow' }}>Undefined Generic Page: {page}</div>;
};

export const thePages = {
  // page-related - for searching do not remove
  'dashboard/': { component: <Dashboard /> },
  'projects/': { component: <Projects /> },
  'projects/view': { component: <ProjectsView /> },
  'projects/edit': { component: <ProjectsEdit /> },
  'projects/save': { component: <ProjectsSave /> },
  'projects/export': { component: <ProjectsExport /> },
  'monitors/': { component: <Generic page="Monitors" /> },
  'monitors/yours': { component: <Generic page="Monitors" /> },
  'monitors/shared': { component: <Generic page="Monitors" /> },
  'explorer/': { component: <Generic page="Explorer" /> },
  'explorer/accounts': { component: <Generic page="Explorer" /> },
  'explorer/blocks': { component: <Generic page="Explorer" /> },
  'explorer/transactions': { component: <Generic page="Explorer" /> },
  'explorer/receipts': { component: <Generic page="Explorer" /> },
  'explorer/logs': { component: <Generic page="Explorer" /> },
  'explorer/traces': { component: <Generic page="Explorer" /> },
  'names/': { component: <Names /> },
  'names/yours': { component: <Names /> },
  'names/wallets': { component: <Names /> },
  'names/tokens': { component: <Names /> },
  'names/prefunds': { component: <Names /> },
  'names/other': { component: <Names /> },
  'names/groups': { component: <Names /> },
  'other/': { component: <Generic page="Other" /> },
  'other/downloaded': { component: <Generic page="Other" /> },
  'other/common': { component: <Generic page="Other" /> },
  'other/names': { component: <Generic page="Other" /> },
  'other/params': { component: <Generic page="Other" /> },
  'other/cross': { component: <Generic page="Other" /> },
  'other/your%20blocks': { component: <Generic page="Other" /> },
  'other/known%20blocks': { component: <Generic page="Other" /> },
  'other/dated%20blocks': { component: <Generic page="Other" /> },
  'signatures/': { component: <Signatures /> },
  'signatures/known': { component: <Signatures /> },
  'signatures/monitored': { component: <Signatures /> },
  'digests/': { component: <Digests /> },
  'digests/finalized': { component: <Digests /> },
  'digests/staged': { component: <Digests /> },
  'digests/unripe': { component: <Digests /> },
  'digests/columns': { component: <Digests /> },
  'caches/': { component: <Caches /> },
  'caches/blocks': { component: <Caches /> },
  'caches/txs': { component: <Caches /> },
  'caches/traces': { component: <Caches /> },
  'caches/slurps': { component: <Caches /> },
  'caches/prices': { component: <Caches /> },
  'caches/abis': { component: <Caches /> },
  'settings/': { component: <Settings /> },
  'settings/api': { component: <SettingsApi /> },
  'settings/node': { component: <SettingsNode /> },
  'settings/scraper': { component: <SettingsScraper /> },
  'settings/sharing': { component: <SettingsSharing /> },
  'settings/skins': { component: <SettingsSkins /> },
  'settings/schemas': { component: <SettingsSchemas /> },
  'support/': { component: <Support /> },
  'support/keys': { component: <SupportKeys /> },
  'support/free': { component: <SupportFree /> },
  'support/incident': { component: <SupportIncident /> },
  'support/documentation': { component: <SupportDocumentation /> },
  'support/licensing': { component: <SupportLicensing /> },
  'support/contact': { component: <SupportContact /> },
  'support/about': { component: <SupportAbout /> },
};

//----------------------------------------------------------------------
export const InnerPage = () => {
  const { page, subpage } = currentPage();
  const ret = thePages[page + '/' + subpage];
  console.log('p: ', page, ' s:', subpage, ' ret: ', ret);
  return ret ? ret.component : <div className="warning">Missing Inner Page</div>;
};
