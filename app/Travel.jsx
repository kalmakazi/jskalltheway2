import React from 'react';

import Page from './Page';
import Section from './Section';

import img from './images/travel-hero.jpg';

export default React.createClass({
  render() {
    return (
      <Page title="Travel" img={img} posX="85%">
        <Section title="Getting to Tarrytown">
          <h3>From NYC</h3>
          <p>Take MetroNorth from Grand Central Terminal to Tarrytown on the Hudson line toward Croton-Harmon.</p>
          <a href="http://tripplanner.mta.info/mytrip/ui_web/customplanner/TripPlanner.aspx">See schedule</a>

          <h3>From Boston</h3>
          <p><a href="https://goo.gl/maps/onfiKVpHRqM2" target="_blank">Use Google</a>. They know better than we do!</p>
        </Section>

        <Section title="Getting to Tappan Hill Mansion">
          <h3>From the Westchester Marriott</h3>
          <p>Shuttles will be provided to and from Tappan Hill from the Westchester Marriott.</p>
        </Section>
      </Page>
    );
  },
});
