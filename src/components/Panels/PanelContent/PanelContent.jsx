import React from 'react';
import { Panel } from 'components/Panels';
import { usePage } from 'store';
import './PanelContent.css';

//----------------------------------------------------------------------
export const PanelContent = () => {
  const { page, subpage } = usePage();
  return (
    <Panel title={page + (subpage ? ' : ' + subpage : '')} type="content" collapseLeft={true} noIcon>
      <InnerPage />
    </Panel>
  );
};

const InnerPage = () => {
  const { page, subpage } = usePage();
  switch (page) {
    case 'settings':
      switch (subpage) {
        case 'api':
          return <SettingsApi />
        case 'node':
          return <SettingsNode />
        case 'scraper':
          return <SettingsScraper />
        case 'ipfs':
          return <SettingsIPFS />
        default:
          return <Settings />;
      }
    default:
      return <DashBoard />
  }
}

const DashBoard = () => {
  return <div>DashBoard</div>
}

const Settings = () => {
  return <div>Settings</div>
}

const SettingsApi = () => {
  return <div>Settings Api</div>
}

const SettingsNode = () => {
  return <div>Settings Node</div>
}

const SettingsScraper = () => {
  return <div>Settings Scraper</div>
}

const SettingsIPFS = () => {
  return <div>Settings IPFS</div>
}