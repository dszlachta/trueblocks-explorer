import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//-----------------------------------------------------------
export const Support = () => {
  return <div className="okay">Actual Support Page</div>;
};

//-----------------------------------------------------------
export const SupportKeys = () => {
  return (
    <pre>
      <div style={{ fontWeight: '600' }}>Accessing Screens</div>
      <div> </div>
      {/* page-related - for searching do not remove */}
      {'alt+0\t\t\t/dashboard\t\tOpen Dashboard screen\n'}
      {'alt+1\t\t\t/projects\t\tOpen Projects screen\n'}
      {'alt+2\t\t\t/monitors\t\tOpen Monitors screen\n'}
      {'alt+3\t\t\t/explorer\t\tOpen Explorers screen\n'}
      {'alt+4\t\t\t/names\t\t\tOpen Names screen\n'}
      {'alt+5\t\t\t/signatures\t\tOpen Signatures screen\n'}
      {'alt+6\t\t\t/digests\t\tOpen Digests screen\n'}
      {'alt+7\t\t\t/caches\t\t\tOpen Caches screen\n'}
      {'alt+8\t\t\t/settings\t\tOpen Settings screen\n'}
      {'alt+9\t\t\t/support/keys\t\tView hot keys\n'}
      <div> </div>
      <div style={{ fontWeight: '600' }}>Showing / Hiding Panels</div>
      <div> </div>
      {'q l\t\t\tcollapse\t\tHide help, status, and men panels\n'}
      {'q a\t\t\texpand\t\t\tExpand all panels\n'}
      {'q h\t\t\thelp\t\t\tShow / hide help panel\n'}
      {'q m\t\t\tmenu\t\t\tShow / hide menu panel\n'}
      {'q c\t\t\tcontent\t\t\tShow / hide content panel\n'}
      {'q s\t\t\tstatus\t\t\tShow / hide status panel\n'}
      <div> </div>
      <div style={{ fontWeight: '600' }}>When Viewing Tables...</div>
      <div> </div>
      {'Meta+Shift+Home\t\thome\t\t\tReturn to the first page of the table\n'}
      {'Meta+Shift+End\t\thome\t\t\tGo to the last page of data\n'}
      {'Up or Left Arrow\tprevious\t\tGo to the previous page\n'}
      {'Down or Right Arrow\tnext\t\t\tGo to the next page\n'}
    </pre>
  );
};

//-----------------------------------------------------------
export const SupportDocumentation = () => {
  return (
    <Fragment>
      <h4>Documentation</h4>
      <p>
        QuickBlocks (formerly called Great Hill Corporation) has been providing internet-based software since before the
        World Wide Web. In 1996, we released the first version of Calendars for the Web™, our popular interactive,
        web-based calendaring/scheduling system. We’ve been delivering this monthly service for more than 15 years,
        enabling 1,000s of clients to coordinate shared resources among their many participants.
      </p>
      <p></p>
      <p>
        Our dedication to quality software and customer service is reflected in our long, fruitful relationships with
        our clients. In early 2016, we pivoted our full attention to the Ethereum blockchain space. We first released
        EthSlurp™ in March of 2016. Since then we’ve been working on QuickBlocks™.{' '}
        {
          <a target="_blank" href="http://quickblocks.io" rel="noopener noreferrer">
            Link
          </a>
        }
      </p>
      <img className="doc_images" alt={'the'} src={process.env.PUBLIC_URL + '/images/documentation_1.png'} />
      <p></p>
    </Fragment>
  );
};

//-----------------------------------------------------------
export const SupportLicensing = () => {
  const licensesText = () => {
    const explain1 = `All files in the folder ./src/apps and in all files in subfolders of that folder are:`;
    const lic1 = `\
 /*-------------------------------------------------------------------------\n\
  * Confidential proprietary information of TrueBlocks, LLC\n\
  * Copyright (c) 2016, 2020 TrueBlocks, LLC (http://trueblocks.io)\n\
  *------------------------------------------------------------------------*/\n`;

    const explain2 = `Remaining files, folders, and data other than the above (and unless otherwise noted) are MIT licensed and are:`;
    const lic2 = `\
 /*-------------------------------------------------------------------------\n\
  * TrueBlocks - fully-decentralized data from blockchains\n\
  * Copyright (c) 2016, 2020 TrueBlocks, LLC (http://trueblocks.io)\n\
  *------------------------------------------------------------------------*/\n`;

    const explain3 = `The code in the file: ./src/libs/utillib/biguint.cpp is:`;
    const lic3 = `\
 /*-------------------------------------------------------------------------\n\
  * Derived from https://mattmccutchen.net/bigint/index.html, where it says:\n\
  * "I, Matt McCutchen, the sole author of the original Big Integer Library,\n\
  * waive my copyright to it, placing it in the public domain. The library\n\
  * comes with absolutely no warranty."\n\
  *------------------------------------------------------------------------*/`;

    const explain4 = 'The code in the file: ./src/libs/utillib/memmap.cpp is';
    const lic4 = `\
 /*-------------------------------------------------------------------------\n\
  * Copyright (c) 2013 Stephan Brumme. All rights Reserved.\n\
  * Author: Stephan Brumme Rudolf-Breitscheid-Str. 226 14482 Potsdam, Germany\n\
  * http://create.stephan-brumme.com/disclaimer.html\n\
  * Page accessed: October 21, 2017 - 11:13:20 PM EST\n\
  *\n\
  * License:\n\
  * Unless otherwise noted, all source code and its sub-pages is licensed similar\n\
  * to the zlib license: This software is provided as-is, without any express or\n\
  * implied warranty. In no event will the author be held liable for any damages\n\
  * arising from the use of this software. Permission is granted to anyone to use\n\
  * this software for any purpose, including commercial applications, and to alter\n\
  * it and redistribute it freely, subject to the following restrictions:\n\
  * o - The origin of this software must not be misrepresented; you must not claim\n\
  *     that you wrote the original software.\n\
  * o - If you use this software in a product, an acknowledgment in the product\n\
  *     documentation would be appreciated but is not required.\n\
  * o - Altered source versions must be plainly marked as such, and must not be\n\
  *     misrepresented as being the original software.\n\
  *
  * Notice:\n\
  * This source code has been modified by TrueBlocks, LLC to conform to formatting\n\
  * preferences, improve preformance, as well as other minor changes.\n\
  *------------------------------------------------------------------------*/\n`;

    const style1 = { marginLeft: '2%' };
    const style2 = { backgroundColor: 'antiquewhite', color: 'darkred', width: '700px', marginLeft: '2%' };
    return (
      <Fragment>
        <h4>Licensing notes</h4>
        <p></p>
        <h5 style={style1}>{explain1}</h5>
        <pre style={style2}>
          <small>{lic1}</small>
        </pre>
        <h5 style={style1}>{explain2}</h5>
        <pre style={style2}>
          <small>{lic2}</small>
        </pre>
        <h4>Otherwise notes</h4>
        <p></p>
        <h5 style={style1}>{explain3}</h5>
        <pre style={style2}>
          <small>{lic3}</small>
        </pre>
        <h5 style={style1}>{explain4}</h5>
        <pre style={style2}>
          <small>{lic4}</small>
        </pre>
      </Fragment>
    );
  };
  return licensesText();
};

//-----------------------------------------------------------
export const SupportContact = () => {
  return (
    <Fragment>
      <h4>Free Support</h4>
      <ul>
        <li>Email support: &lt;support@trueblocks.io&gt;</li>
        <li>Online forums: &lt;https:discord.gg/zGh6PdN&gt;</li>
        <li>Free support during installation and setup</li>
      </ul>
      <h4>Per Incident Support</h4>
      <ul>
        <li>$95 US per hour until resolved</li>
        <li>Pay in Ether for a 10% discount</li>
      </ul>
      <h4>Support Plans</h4>
      <ul>
        <li>5 per-incident issue packs (10% discount)</li>
        <li>Annual subscription (20% discount)</li>
      </ul>
    </Fragment>
  );
};

//-----------------------------------------------------------
export const SupportAbout = () => {
  return (
    <Fragment>
      <h4>Ancient History</h4>
      <p></p>
      <div style={{ marginLeft: '2%' }}>
        <div>
          <b>TrueBlocks, LLC</b> (formerly called <b>QuickBlocks, LLC</b> and <b>Great Hill Corporation</b>) has been
          providing internet-based software since prior to the World Wide Web. In 1996, we released the first version of{' '}
          <a target="top" href="http://calendarhost.com">
            Calendars for the Web
          </a>
          ™, our popular, interactive, web-based calendaring/scheduling system. We’ve been delivering this monthly
          Software-as-a-Service (Saas) for nearly 25 years to 1,000s of clients who use it to coordinate shared
          resources such as medical equipment, meeting rooms, and even trucking assignments among their many users.
        </div>
        <p></p>
        <div style={{ marginLeft: '10%' }}>
          <img className="doc_images" alt={'the'} src={process.env.PUBLIC_URL + '/images/calweb.png'} />
        </div>
        <p></p>
        <div>
          We make the claim that our Calendars for the Web™ is the longest, continually-running web-based software
          product in history. Our dedication to delivering quality software and customer support is reflected in our
          long, fruitful relationships with our many clients. We continue to sell this software today and serve many
          active daily users.
        </div>
      </div>
      <p></p>
      <h4>Middle History</h4>
      <p></p>
      <div style={{ marginLeft: '2%' }}>
        <div>
          We spent a few years pursuing other passions (
          <a target="top" href="http://stonylanepress.org">
            poetry
          </a>{' '}
          and{' '}
          <a target="top" href="http://furniture.greathill.com">
            furniture design
          </a>
          )
        </div>
      </div>
      <p></p>
      <h4>More Recent History</h4>
      <p></p>
      <div style={{ marginLeft: '2%' }}>
        <div>
          In <b>late 2015</b> and <b>early 2016</b>, we became completely obsessed with the blockchain and{' '}
          <b>The DAO</b> in particular. We were among the first participants in The DAO's discussion site, DaoHub. We
          created a number of ancillary websites (now defunct): http://doadeepdive.com, http://whalewatch.io,
          http://daowatch.io, and it was during this time that we released our first blockchain-based software product,
          EthSlurp™. While we spent countless hours studying the DAO's smart contract, we completely missed the hack.
          <p></p>
          Since the <b>fall of 2016</b>, we’ve been working on the TrueBlocks™ system which is the software you are
          running here. Our goal was to make understanding, visualizing, and analyzing smart contract data easier.
          <p></p>
          During all of <b>2017</b>, we did not do an ICO, which means we are self funded through grants, tips, and your
          purchase of this software. In <b>late 2018</b>, we received an{' '}
          <a target="top" href="https://blog.ethereum.org/2018/10/15/ethereum-foundation-grants-update-wave-4/">
            Ethereum Foundation grant
          </a>
          . This allowed us to open source parts of our trueblocks-core repo to open source. <b>Recently</b>, we
          received a{' '}
          <a target="top" href="https://consensys.net/grants/">
            grant from Consensys
          </a>{' '}
          which allows us to continue our work.
        </div>
      </div>
    </Fragment>
  );
};
