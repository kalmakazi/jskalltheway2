import React from 'react';
import classNames from 'classnames';

import Header from './Header';
import Hero from './Hero';

import favicon from './favicon.ico';
import resetCss from './reset.css';
import baseCss from './base.css';
import css from './Page.scss';

const link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = favicon;
document.getElementsByTagName('head')[0].appendChild(link);


export default React.createClass({
  getInitialState() {
    return {
      heroHeight: null,
    };
  },

  componentDidMount() {
    this.setHeroHeight();

    window.addEventListener('resize', this.setHeroHeight);
  },

  setHeroHeight() {
    const heroHeight = this.hero.getBoundingClientRect().height;

    if (heroHeight !== this.state.heroHeight) {
      this.setState({
        heroHeight,
      });
    }
  },

  heroRef(hero) {
    this.hero = hero;
  },

  render() {
    return (
      <div className={css.page}>
        <Header triggerPos={this.state.heroHeight} />

        <Hero
          heroRef={this.heroRef}
          img={this.props.img}
          posX={this.props.posX}
          subtitle={this.props.subtitle}
        >
          {this.props.title}
        </Hero>

        {this.props.children}
      </div>
    );
  },
});
