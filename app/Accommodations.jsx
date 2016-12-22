import React from 'react';

import Page from './Page';
import Section from './Section';

import img from './images/tappan-hill.jpg';

const NONBREAKING_HYPHEN = '\u2011';
const NONBREAKING_SPACE = '\u00a0';

export default React.createClass({
  render() {
    return (
      <Page title="Accommodations" img={img}>
        <Section title="Hotel">
          <h3>Westchester Marriott</h3>
          <p>670 White Plains Rd</p>
          <p>Tarrytown, NY 10591</p>

          <a
            href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Allen/Kalmakis%20Wedding%20Weekend%5Enycwe%60ANWANWA%60129%60USD%60false%604%608/25/17%608/27/17%6008/07/2017&app=resvlink&stop_mobi=yes"
            target="_blank"
          >
            Reservations
          </a>
          <p>
            <a href="https://goo.gl/maps/LqTEhEKMFUE2" target="_blank">See map</a>
          </p>

          <p>{NONBREAKING_SPACE}</p>

          <p>
            We have reserved a block of rooms at the Westchester Marriott on Friday, August 25th and
            Saturday, August 26th. The minimum stay is one night and the group rate is $129/night plus tax.
          </p>
          <p>
            To make a reservation, click the link above or call Marriott Reservations at
            (914){NONBREAKING_SPACE}631{NONBREAKING_HYPHEN}2200 or
            (800){NONBREAKING_SPACE}228{NONBREAKING_HYPHEN}9290 and let them know you booking under the
            Allen/Kalmakis Wedding Room Block. Rooms must be reserved before August 7th.
          </p>
        </Section>
      </Page>
    );
  },
});
