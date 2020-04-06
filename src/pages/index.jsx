import React from 'react';
import PropTypes from 'prop-types';

import { Dashboard } from './Dashboard';
import { currentPage } from 'components/utils';
import { Projects, ProjectsView, ProjectsEdit, ProjectsSave, ProjectsExport } from './Projects';
import { Names } from './Names';
import { Signatures } from './Signatures';
import {
  Settings,
  SettingsApi,
  SettingsNode,
  SettingsScraper,
  SettingsSharing,
  SettingsSkins,
  SettingsSchemas
} from "./Settings";
import {
  Support,
  SupportKeys,
  SupportFree,
  SupportIncident,
  SupportDocumentation,
  SupportLicensing,
  SupportContact,
  SupportAbout,
} from './Support';

const Generic = ({ page }) => {
  return <div style={{ backgroundColor: 'yellow' }}>Undefined Generic Page: {page}</div>;
};

export const thePages = {
  'dashboard/': { component: <Dashboard /> },
  'projects/': { component: <Projects /> },
  'projects/view': { component: <ProjectsView /> },
  'projects/edit': { component: <ProjectsEdit /> },
  'projects/save': { component: <ProjectsSave /> },
  'projects/export': { component: <ProjectsExport /> },
  'monitors/': { component: <Generic page="Monitors" /> },
  'names/': { component: <Names /> },
  'names/your%20names': { component: <Names /> },
  'names/wallets': { component: <Names /> },
  'names/tokens': { component: <Names /> },
  'names/prefunds': { component: <Names /> },
  'names/other%20names': { component: <Names /> },
  'names/groups': { component: <Names /> },
  'names/your_blocks': { component: <Names /> },
  'names/known_blocks': { component: <Names /> },
  'names/dated_blocks': { component: <Names /> },
  'signatures/': { component: <Signatures /> },
  'signatures/known': { component: <Signatures /> },
  'signatures/monitored': { component: <Signatures /> },
  'digests/': { component: <Generic page="Digests" /> },
  'caches/': { component: <Generic page="Caches" /> },
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
  return (ret ? ret.component : <div className="warning">Missing Inner Page</div>);
}
