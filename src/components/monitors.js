import React from 'react'
import BasePage from './basepage';

export default class MonitorsPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <img src="http://calendarhost.com/tb_images/Monitor.png" alt="Debugger" width="100%"  />
      );
    }

    var left = "Monitoring Module";
    var middle = makeContent();
    var right = "The monitoring component runs 'chifra daemon' which continually scrapes your accounts of interest.";
    return (
      <BasePage
        pageTitle={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
