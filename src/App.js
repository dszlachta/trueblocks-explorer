/*-------------------------------------------------------------------------
 * This source code is confidential proprietary information which is
 * Copyright (c) 2019 by Great Hill Corporation.
 * All Rights Reserved
 *------------------------------------------------------------------------*/
import React, { Component } from 'react';
//import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import HomePage from './components/home';
import MonitorsPage from './components/monitors';
import ScrapersPage from './components/scrapers';
import AccountsPage from './components/accounts';
import BlocksPage from './components/blocks';
import TransPage from './components/transactions';
import LogsPage from './components/logs';
import ReceiptPage from './components/receipts';
import FunctionsPage from './components/functions';
import AnalysisPage from './components/analysis';
import ChartsPage from './components/charts';
import AccountingPage from './components/accounting';
import AuditingPage from './components/auditing';
import NotificationsPage from './components/notifications';
import CustomPage from './components/custom';
import PricingPage from './components/pricing';
import HelpPage from './components/help';
//import logo from './svg/logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      lastTab: 6,
      account: "0xa1e4380a3b1f749673e270229993ee55f35663b4"
    };
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  handleAccountChange = (e) => {
    let account = e.target.value.trim();
    this.setState({account: account});
    return false;
  }

  renderTabs = () => {
    return (
      <div>
        <Router>
          <Link className="react-tabs__tab" to="/">Home</Link>
          |
          <Link className="react-tabs__tab" to="/monitors">Monitors</Link>
          <Link className="react-tabs__tab" to="/scrapers">Scrapers</Link>

          |
          <Link className="react-tabs__tab" to="/accounts">Accounts</Link>
          <Link className="react-tabs__tab" to="/blocks">Blocks</Link>
          <Link className="react-tabs__tab" to="/transactions">Transactions</Link>
          <Link className="react-tabs__tab" to="/logs">Logs</Link>
          <Link className="react-tabs__tab" to="/receipts">Receipts</Link>
          <Link className="react-tabs__tab" to="/functions">Functions</Link>

          |
          <Link className="react-tabs__tab" to="/charts">Charts</Link>
          <Link className="react-tabs__tab" to="/analysis">Analysis</Link>

          |
          <Link className="react-tabs__tab" to="/accounting">Accounting</Link>
          <Link className="react-tabs__tab" to="/auditing">Auditing</Link>
          <Link className="react-tabs__tab" to="/notifications">Notifications</Link>
          <Link className="react-tabs__tab" to="/custom">Custom</Link>

          |
          <Link className="react-tabs__tab" to="/pricing">Pricing</Link>
          <Link className="react-tabs__tab" to="/help">Help</Link>

          <div>
            <Route path="/" exact component={HomePage}/>
            <Route path="/monitors" component={MonitorsPage}/>
            <Route path="/scrapers" component={ScrapersPage}/>

            <Route path="/accounts/:theID?" component={AccountsPage}/>
            <Route path="/blocks/:theID?" component={BlocksPage} />
            <Route path="/logs/:theID?" component={LogsPage} />
            <Route path="/receipts/:theID?" component={ReceiptPage} />
            <Route path="/transactions/:trans?" render={(props) => <TransPage {...props} account={this.state.account} changeAccount={this.handleAccountChange}/>} />
            <Route path="/functions/:func?" component={FunctionsPage}/>

            <Route path="/charts" component={ChartsPage}/>
            <Route path="/analysis" component={AnalysisPage} />

            <Route path="/accounting" component={AccountingPage}/>
            <Route path="/auditing" component={AuditingPage}/>
            <Route path="/notifications" component={NotificationsPage}/>
            <Route path="/custom" component={CustomPage}/>

            <Route path="/pricing" component={PricingPage}/>
            <Route path="/help" component={HelpPage}/>
          </div>
        </Router>
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='header-logo'><img alt='' src="https://quickblocks.io/wp-content/uploads/2017/10/logo-white-website-95px.png" width="25px"/></div>
          <div className='header-appname'>TrueBlocks<small>&reg;</small></div>
          <div className='header-social'>
            {/* <ButtonGroup>
              <ButtonShare size={-4} share type='facebook' />
              <ButtonShare size={-4} share type='twitter' />
            </ButtonGroup> */}
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
