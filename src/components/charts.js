import React, { Component } from 'react'
import BasePage from './basepage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class OptionalTabbedView extends Component {
  constructor(props) {
    super(props);
    this.characters = {
      "Block per Week": {
        img: "http://calendarhost.com/tb_images/1.png",
        color: "IndianRed",
        text: "white",
        descr: "A chart showing the number of blocks produced per week.",
        chart: "http://calendarhost.com/tb_images/Chart1.png"
      },
      "Chart 2": {
        img: "http://calendarhost.com/tb_images/2.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart2.png"
      },
      "Chart 3": {
        img: "http://calendarhost.com/tb_images/3.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart3.png"
      },
      "Chart 4": {
        img: "http://calendarhost.com/tb_images/4.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart4.png"
      },
      "Chart 5": {
        img: "http://calendarhost.com/tb_images/5.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart5.png"
      },
      "Chart 6": {
        img: "http://calendarhost.com/tb_images/6.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart6.png"
      },
      "Chart 7": {
        img: "http://calendarhost.com/tb_images/7.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart7.png"
      },
      "Chart 8": {
        img: "http://calendarhost.com/tb_images/8.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart8.png"
      },
      "Chart 9": {
        img: "http://calendarhost.com/tb_images/9.png",
        color: "IndianRed",
        text: "white",
        descr: "This chart shows some other shit.",
        chart: "http://calendarhost.com/tb_images/Chart9.png"
      }
    };

    this.state = {
      "Block per Week": true,
      "Chart 2": true,
      "Chart 3": true,
      "Chart 4": true,
      "Chart 5": true,
      "Chart 6": true,
      "Chart 7": true,
      "Chart 8": true,
      "Chart 9": true
    };

    this.handleCheckClicked = this.handleCheckClicked.bind(this);
  }

  handleCheckClicked(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  render() {
    const links = [];
    const tabs = [];
    const tabPanels = [];

    Object.keys(this.characters).forEach(name => {
      if (!this.state[name])
        return;

      const {
        img,
        color: backgroundColor,
        text: color, descr, chart
      } = this.characters[name];

      tabs.push(
        <Tab style={{ backgroundColor }} className="status-charts">
          <img src={img} alt={name} height="32" width="32" />
        </Tab>
      );

      tabPanels.push(
        <TabPanel style={{ backgroundColor, color }} className="status-charts-panel">
          <span>{descr}</span>
          <img src={chart} alt={name} height="800" width="1200" />
        </TabPanel>
      );
    });

    return (
      <div>
        <p>{links}</p>
        <Tabs
          selectedTabClassName="status-charts--selected"
          selectedTabPanelClassName="status-charts-panel--selected" >
          <TabList className="status-charts-list">{tabs}</TabList>
          {tabPanels}
        </Tabs>
      </div>
    );
  }
}

export default class ChartsPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <div>
          <OptionalTabbedView>This is it.</OptionalTabbedView>
        </div>
      );
    }

    var left = "Settings";
    var middle = makeContent();
    var right =
      "This component shows the status of both the node and the state of the TrueBlocks scrapers. It can also show historical charts of activity on the node such as Blocks per Week, Difficuly over time, etc. Anything to give the user a sense of what's going on with his/her node.";
    var button = "Push";
    return (
      <BasePage
        lSection={left}
        lButton={button}
        mSection={middle}
        rSection={right}
      />
    );
  }
};
