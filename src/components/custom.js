import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';

export default class CustomPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <Section>
          <Section styles={{ backgroundColor: 'rebeccapurple', color: 'white' }}>
            The accounting module, like the audit module, is an optional component. Users must purchase a shrink-wrapped
            software license (a one-time purchase). Technical support, hosting services, customization consulting, and
            other services are available on per-incident, monthly, or annual basis.
          </Section>
          <ul>
            <h4>Auto Generated Code from ABI</h4>
            <ul>
              <li>Because TrueBlocks is connected directly to the blockchain node, it is impossible to stop the user from gaining access to any data they want.</li>
              <li>Permissionless accounting promotes engagement. Users are more likely to join a project if they think it's fair.
              They will be more likely to think it's fair if they can see into its finances.</li>
              <li>Other than the cost of running a node, blockchain data is free. Anyone (not just those with resources) can afford to access it, if they have the right tools.</li>
              <li>Market forces enabled by third-party for-pay blockchain data providers will, over time, price the less fortunate out of the market.</li>
              <li>There is no danger of being captured by a third-party data provider.</li>
            </ul>
            <h4>Operate with Other Chains</h4>
            <ul>
              <li><b>Assumption:</b> In the future, people will run entire organizations using smart contracts.</li>
              <li>At every block, the business owner (or anyone else) can do a full reconcilation against the shared global ledger.</li>
              <li>Extend this to running your entire business off a of series of smart contracts. Using a custom TrueBlocks module, the
                business owner (or anyone else) can roll up the accounting for entire organizations.</li>
              <li>The business models of the future should anticipate instantaneous, permissionless, 18-decimal-place accounting.</li>
              <li>Think about departmental P&L statements every 15 seconds for your entire organization.</li>
            </ul>
            <h4>Private / Poladot Chain Explorers</h4>
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

    var left = "Custom Modules ($$$)";
    var middle = makeContent();
    var right = "The accounting component is a for-pay portion of TrueBlocks. Please contact us for more information.";
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
