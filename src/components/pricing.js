import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';

export default class HelpPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <Section>
          <Section styles={{ backgroundColor: 'purple', color: 'white' }}>
            For-pay modules would be shrink-wrapped software with annual paid support/upgrade options. We prefer this method
            (due to it's natural affinity with decentralization). We recognize that clients will want an easier-to-use hosted solution, and 
            our code operates in that mode as well. There are many other potential sources of revenue.
          </Section>
          <ul>
            <h4>Shrink Wrapped / Support Options</h4>
            <ul>
              <li>The paradigm has shited. Decentralized software, in order to fully realize its promise, will return to being desktop software.</li>
              <li>Open source issues challenge shrink-wrapped software models:
                <ul>
                  <li>Only the core parts of the system would be open sourced.</li>
                  <li>The "applications" code (i.e. for-pay modules) is closed source.</li>
                </ul>
              </li>
              <li>Operating cost, unlike web-based models, are low due to the fact that the data is pushed out to the end-user infrastructure.</li>
              <li>Despite the lower cost, the connectivity of the users remains the same.</li>
            </ul>
            <h4>Freemium</h4>
            <ul>
              <li>Basic mode allows for three groups of three accounts plus an extra one.</li>
              <li>Charge the client for additional address support in packages of 10.</li>
              <li>Provide a few in-depth investigation of some high visibility community contracts for free.</li>
              <li>Sell pre-packaged investigations</li>
            </ul>
            <h4>White Lable for hardware manufacturers</h4>
            <ul>
              <li>Audit nodes.</li>
              <li>White label for hardware manufacturs.</li>
            </ul>
            <h4>Consulting / Customization</h4>
            <ul>
              <li><b>Assumption:</b> In the future, people will run entire organizations using smart contracts.</li>
              <li>At every block, the business owner (or anyone else) can do a full reconcilation against the shared global ledger.</li>
              <li>Extend this to running your entire business off a of series of smart contracts. Using a custom TrueBlocks module, the
                business owner (or anyone else) can roll up the accounting for entire organizations.</li>
              <li>The business models of the future should anticipate instantaneous, permissionless, 18-decimal-place accounting.</li>
              <li>Think about departmental P&L statements every 15 seconds for your entire organization.</li>
            </ul>
            <h4>Industry Specific Versions</h4>
            <ul>
              <li><b>Assumption:</b> In the future, customers of a company or non-profit will demand better insight into the financial health of the organization.</li>
              <li>Given permissionless accounting, organizations will not be able to hide dirty dealing / shady practices from its customers (if customers become aware of the shift in the power dynamic).</li>
              <li>Once customers realize they can demand more from companies, companies must respond.</li>
              <li>A balance sheet, produced at every block, gives true insight into the financial health of a company.</li>
              <li>The paradigm has shifted. Get in line with the paradigm.</li>
            </ul>
            <h4>Private Versions</h4>
            <ul>
              <li><b>Assumption:</b> In the future, customers of a company or non-profit will demand better insight into the financial health of the organization.</li>
              <li>Given permissionless accounting, organizations will not be able to hide dirty dealing / shady practices from its customers (if customers become aware of the shift in the power dynamic).</li>
              <li>Once customers realize they can demand more from companies, companies must respond.</li>
              <li>A balance sheet, produced at every block, gives true insight into the financial health of a company.</li>
              <li>The paradigm has shifted. Get in line with the paradigm.</li>
            </ul>
          </ul>
        </Section>
      );
    }

    var left = "Product Options / Pricing";
    var middle = makeContent();
    var right = "The accounting component is a for-pay portion of TrueBlocks. Please contact us for more information.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
