import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';
import Accordion from 'constructicon/accordion';
//import Label from 'constructicon/label';
//import InputSelect from 'constructicon/input-select';
//import InputDate from 'constructicon/input-date';

export default class ScrapersPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      choice: "choice 1"
    };
  }

  render() {
    function makeContent() {
      return (
        <div>
          <table width="100%" border="1">
            <tr>
              <td width="50%" valign="top" align="middle">
                <img src="http://calendarhost.com/tb_images/BlockScrape.png" alt="Debugger" height="480px" />
                <Section><b>blockScrape:</b><br />
                  <Section background='secondary'>
                    <Accordion title='Seed settings'>
                    <Section background='primary'>This is the blockScrape section</Section>
                    </Accordion>
                    <Accordion title='Scrape settings'>
                      <Section background='primary'>This is the blockScrape scrape section</Section>
                    </Accordion>
                  </Section>
                </Section>
              </td>
              <td width="50%" valign="top" align="middle">
                <img src="http://calendarhost.com/tb_images/AcctScrape.png" alt="Debugger" height="480px" width="100%" />
                <Section><b>acctScrape:</b>
                  <Section background='secondary'>
                    <Accordion title='Daemon settings'>
                      <Section background='primary'>This is the acctScrape daemon section</Section>
                    </Accordion>
                    <Accordion title='Scrape settings'>
                      <Section background='primary'>This is the acctScrape scrape section</Section>
                    </Accordion>
                  </Section>
                </Section>
              </td>
            </tr>
          </table>
        </div>
      );
    }
    var left = "Scrapers Module";
    var middle = makeContent();
    var right =
      "Scrapers interact with the blockchain to prepare data for TrueBlocks to use. You may control the behaviour of the scrapers in this section. There are two scrapers: blockScrape and acctScrape. Click the help icon next to the scraper for more information. One these screens, you are given an option to share the results of your scraper's work with others. If you do so, others will benefit from your scraper's work.";
    var button = "Eat me";
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
