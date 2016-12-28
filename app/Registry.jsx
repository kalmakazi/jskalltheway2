import React from 'react';

import Page from './Page';
import Section from './Section';

import imgHero from './images/registry-hero.jpg';
import imgBloomies from './images/Bloomies.png';
import imgCrate from './images/Crate.png';

import css from './Registry.scss';

export default React.createClass({
  render() {
    return (
      <Page title="Registry" img={imgHero} posX="90%">
        <Section>
          <p>No gift is greater than your presence at our wedding.</p>
          <p>For those who have requested it, we’re registered at the following stores:</p>

          <div>
            <a
              href="http://www.bloomingdales.com/registry/wedding/guest/?registryId=2326705"
              target="_blank"
            >
              <img className={css.image} src={imgBloomies} />
            </a>
          </div>
          <div>
            <a
              href="http://www.crateandbarrel.com/gift-registry/jennifer-allen-and-stephen-kalmakis/r5609316"
              target="_blank"
            >
              <img className={css.image} src={imgCrate} />
            </a>
          </div>
        </Section>
      </Page>
    );
  },
});
