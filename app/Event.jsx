import React from 'react';

import Page from './Page';
import Section from './Section';

import imgEvent from './images/event-hero.jpg';
import imgCeremony from './images/ceremony.jpg';
import imgReception from './images/reception.jpg';
import imgAfterparty from './images/afterparty.jpg';

import imgDonkey from './images/donkey.jpg';
import imgClassic from './images/classic.jpg';
import imgCopies from './images/copies.jpg';

const NONBREAKING_SPACE = '\u00a0';

export default React.createClass({
  render() {
    const title = `Celebrate with${NONBREAKING_SPACE}us`;
    const subtitle = 'August 26, 2017';

    return (
      <Page title={title} subtitle={subtitle} img={imgEvent}>
        <Section img={imgCeremony} title="Ceremony">
          <h3>6:30pm</h3>
          <p>Tappan Hill Mansion</p>
          <p>200 Gunpowder Lane</p>
          <p>Tarrytown, NY 10591</p>
          <a href="https://goo.gl/maps/yQKd6BEMz472">See map</a>
          <p>{NONBREAKING_SPACE}</p>
          <p>Black tie optional</p>
          <p>{NONBREAKING_SPACE}</p>
          <p>Please arrive early.</p>
          <p>The ceremony starts promptly at 6:30pm.</p>
        </Section>

        <Section img={imgClassic} title="Reception">
          <h3>7:00pm - 12:00am</h3>
          <p>Tappan Hill Mansion</p>
          <p>200 Gunpowder Lane</p>
          <p>Tarrytown, NY 10591</p>
          <a href="https://goo.gl/maps/yQKd6BEMz472" target="_blank">See map</a>
        </Section>

        <Section img={imgDonkey} title="Afterparty">
          <h3>12:00am</h3>
          <p>Cooper’s Mill</p>
          <p>at the Westchester Marriott</p>
          <p>670 White Plains Road</p>
          <p>Tarrytown, NY 10591</p>
          <a href="https://goo.gl/maps/kJBypvuySSs" target="_blank">See map</a>
        </Section>

        <Section img={imgCopies} title="Farewell Brunch">
          <h3>Sunday, August 27th<br />9:00am - 11:30am</h3>
          <p>Westchester Marriott</p>
          <p>670 White Plains Road</p>
          <p>Tarrytown, NY 10591</p>
          <a href="https://goo.gl/maps/kJBypvuySSs" target="_blank">See map</a>
        </Section>
      </Page>
    );
  },
});