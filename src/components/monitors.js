import React from 'react'
import BasePage from './basepage';

export default class MonitorsPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <img src="http://calendarhost.com/tb_images/Monitor.png" alt="Debugger" width="100%"  />
      );
    }

    var left = "Monitoring";
    var middle = makeContent();
    var right = "The monitoring component runs <b>chifra daemon</b> ).";
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
} 
