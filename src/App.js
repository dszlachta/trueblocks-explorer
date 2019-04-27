import React, { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ButtonGroup from 'constructicon/button-group';
import ButtonSocial from 'constructicon/button-social';
import Section from 'constructicon/section';
//import Container from 'constructicon/container';

import './App.css';
import MonitorPage from './components/monitoring';
import AccountingPage from './components/accounting';
import AuditingPage from './components/auditing';
import ScrapersPage from './components/scrapers';
import NamesPage from './components/names';
import DatesPage from './components/dates';
import ChartsPage from './components/charts';
import logo from './svg/logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      lastTab: 10
    };
  }

  componentDidMount = () => {
//    fetch(`${process.env.REACT_APP_API_URL}/list?address=0x06012c8cf97bead5deae237070f9587f8e7a266d`, { mode: 'cors' })
//      // .then(response => response.json())
//      .then(res => console.log(res));
  }

  /*
    render() {
      const { hits } = this.state;
      return (
        <ul>
          {hits.map(hit =>
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          )}
        </ul>
      );
    }
  */

  renderTabs() {
    return (
      <div>
        <Tabs onSelect={index => this.state.lastTab = index} defaultIndex={this.state.lastTab}>
          <TabList>
            <Tab>Home</Tab >
            <Tab>|</Tab >
            <Tab>Accounts</Tab>
            <Tab>Blocks</Tab>
            <Tab>Charts</Tab>
            <Tab>|</Tab >
            <Tab>Monitors</Tab >
            <Tab>Scrapers</Tab>
            <Tab>|</Tab >
            <Tab>Accounting</Tab >
            <Tab>Auditing</Tab >
            <Tab>Notifications</Tab >
            <Tab>Custom</Tab >
          </TabList>
          <TabPanel><MonitorPage /></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel><NamesPage /></TabPanel>
          <TabPanel><DatesPage /></TabPanel>
          <TabPanel><ChartsPage /></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel><MonitorPage /></TabPanel>
          <TabPanel><ScrapersPage /></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel><AccountingPage /></TabPanel>
          <TabPanel><AuditingPage /></TabPanel>
          <TabPanel><AuditingPage /></TabPanel>
          <TabPanel><AuditingPage /></TabPanel>
        </Tabs>
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='header-logo'><img src={logo} className='header-logo' alt='logo' /></div>
          <div className='header-appname'>TrueBlocks<superscript><small>&reg;</small></superscript></div>
          <div className='header-social'>
            <ButtonGroup>
              <ButtonSocial size={-4} share type='facebook' />
              <ButtonSocial size={-4} share type='twitter' />
            </ButtonGroup>
          </div>
        </div>
        {this.renderTabs()}
        <div className='bottom-footer'>
          TrueBlocks &reg; 2019 ~ <a href="mailto:info@trueblocks.io"><font color="#b1b1b1">info@trueblocks.io</font></a> ~ <a href="https://trueblocks.io"><font color="#b1b1b1">https://trueblocks.io</font></a>
        </div>
      </div>

    );
  }
}

export default App;
