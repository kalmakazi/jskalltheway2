import React from 'react';

import Page from './Page';
import Section from './Section';

import css from './Travel.scss';

import img from './images/travel-hero.jpg';

const NONBREAKING_SPACE = '\u00a0';


export default React.createClass({
  render() {
    return (
      <Page title="Travel" img={img} posX="85%">
        <Section title="Getting to Tarrytown">
          <h3>From NYC</h3>
          <p>Take MetroNorth from Grand Central Terminal to Tarrytown on the Hudson line toward Croton-Harmon.</p>
          <a href="http://tripplanner.mta.info/mytrip/ui_web/customplanner/TripPlanner.aspx">See schedule</a>
          <p>{NONBREAKING_SPACE}</p>
          <p>Cabs are available from the train station, and Ubers are plentiful.</p>
          <p className={css.subtext}>
            Pro tip: Sit on the west side of the train for stunning views of the Hudson!
            (The left side, when leaving Manhattan.)
          </p>

          <h3>From outside New York City</h3>
          <p><a href="https://goo.gl/maps/onfiKVpHRqM2" target="_blank">Use Google</a>. They know better than we do!</p>
          <p className={css.subtext}>
            For those flying, Westchester County Airport is the closest.
          </p>
        </Section>

        <Section title="Getting to Tappan Hill Mansion">
          <h3>From the Westchester Marriott</h3>
          <p>Shuttles will be provided to and from Tappan Hill from the Westchester Marriott.</p>
        </Section>
      </Page>
    );
  },
});
