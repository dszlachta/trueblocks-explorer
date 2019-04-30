import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section'
import Container from 'constructicon/container'

export default class HomePage extends BasePage {
  render() {
    function makeContent() {
      return (
        <div>
          <img src="http://calendarhost.com/tb_images/Home.png" alt="Debugger" width="100%" />
        </div>
      );
    }

    var left = "Home";
    var middle = makeContent();
    var right = "This is the application's home page.";
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
