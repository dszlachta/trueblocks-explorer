import React, { Component } from 'react'
import { BasePage, Grid, GridColumn } from './baserow'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// Used fields: description, contents
// Unused fields: img, color, text, disabled
var subTabData = {
  "Unpublished/Private": {
    description: "On the unpublished/private tab we show function definitions that the user has created themselves and has either not yet published or does not wish to publish",
    contents: "http://calendarhost.com/tb_images/Functions1.png",
  },
  "Standards": {
    description: "This tab shows un-editable community standards such as ERC-20 or ER-721. The  availablity of standards allows the community to understand a large class of smart contracts without the need for defining what they mean.",
    contents: "http://calendarhost.com/tb_images/Functions2.png",
  },
  "Generated": {
    description: "ABI functions are special. Given a particular interface, you can easily generate the four-byte signature from that interface. If you separate the function name from the type interface, and do a cross-product, you can generate millions of signatures from a small collection of data. We've done that here.",
    contents: "http://calendarhost.com/tb_images/Functions3.png",
  },
  "Leached": {
    description: "This section shows function definitions that the end user has downloaded from IPFS (so it's undeniable and uncensorable), but the user has not produced this data themselves. In effect, this is unverified data (although in the case of function declarations, the data is easily verified locally). This data must be snapshot based.",
    contents: "http://calendarhost.com/tb_images/Functions4.png",
  },
  "Seeded": {
    description: "This subsection displays functional definitions that end users have previously shared with the community (i.e. by publishing to IPFS, for example). Smart contract function declarations are immutable and unchanging. Once they exists (actually even before they exist) they are the same for everyone. We do not, as a community want any single entity to hold this data. It's a quintessential example of a public good. This data must be snapshot based.",
    contents: "http://calendarhost.com/tb_images/Functions5.png",
  },
};

export class TabbedSubview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      tabIndex: 0
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/functions`, { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
//        this.setState({ data: data })
        this.setState({ data: subTabData })
        }
      );
  }

  render() {
    const links = [];
    const tabs = [];
    const tabPanels = [];

    Object.keys(this.state.data).forEach(name => {
      if (this.state.data[name].disabled)
        return;

      const {
        img,
        color: backgroundColor,
        text: color, description, contents
      } = this.state.data[name];

      tabs.push(
        <Tab
          style={{ backgroundColor }}
          className="status-charts"
        >
          {name}
        </Tab>
      );

      tabPanels.push(
        <TabPanel style={{ backgroundColor, color }} className="status-charts-panel">
          <Grid>
            <GridColumn borderWidth={1} borderColor='secondary' lg={9}>
              <img src={contents} alt={name} width="100%" height="480" />
            </GridColumn>
            <GridColumn lg={1}>
            </GridColumn>
            <GridColumn lg={2}>
              {description}
            </GridColumn>
          </Grid>
        </TabPanel>
      );
    });

    return (
      <div>
        <p>{links}</p>
        <Tabs
          selectedTabClassName="status-charts--selected"
          selectedTabPanelClassName="status-charts-panel--selected"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="status-charts-list">{tabs}</TabList>
          {tabPanels}
        </Tabs>
      </div>
    );
  }
}

export default class FunctionsPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <div>
          <TabbedSubview></TabbedSubview>
        </div>
      );
    }

    var left = "Functions Module";
    var middle = makeContent();
    var right = "This component shows known and shared functions and ABIs.";
    return (
      <BasePage
        pageTitle={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
};
