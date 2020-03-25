import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//-----------------------------------------------------------
export const Support = () => {
  return <div className="okay">Actual Support Page</div>
}

//-----------------------------------------------------------
export const SupportFree = () => {
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
}

//-----------------------------------------------------------
export const SupportIncident = () => {
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
}

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
}

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
}

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
          </a>)
        </div>
      </div>
      <p></p>
      <h4>More Recent History</h4>
      <p></p>
      <div style={{ marginLeft: '2%' }}>
        <div>
          In <b>late 2015</b> and <b>early 2016</b>, we became completely obsessed with the blockchain and <b>The
          DAO</b> in particular. We were among the first participants in The DAO's discussion site, DaoHub. We
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
          . This allowed us to open source parts of our trueblocks-core repo to open source. <b>Recently</b>, we received a{' '}
          <a target="top" href="https://consensys.net/grants/">
            grant from Consensys
          </a>{' '}
          which allows us to continue our work.
        </div>
      </div>
    </Fragment>
  );
};
