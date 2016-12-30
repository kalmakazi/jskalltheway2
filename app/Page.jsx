import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import {connect} from 'react-redux';

import Header from './Header';
import Hero from './Hero';

import Loader from './Loader';

import favicon from './favicon.ico';
import resetCss from './reset.css';
import baseCss from './base.css';
import css from './Page.scss';


const TRANSITION_NAME = {
  enter: css.fadeIn,
  enterActive: css.fadeIn_active,
  leave: css.fadeOut,
  leaveActive: css.fadeOut_active,
};


const link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = favicon;
document.getElementsByTagName('head')[0].appendChild(link);


const Page = React.createClass({
  getInitialState() {
    return {
      heroHeight: null,
    };
  },

  componentDidMount() {
    if (this.props.title.indexOf('Celebrate') === -1) {
      document.title = `${document.title} | ${this.props.title}`;
    }

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
    const loader = this.props.hasBlockingImage && <Loader key="loader"/>;

    return (
      <div className={css.page}>
        <ReactCSSTransitionGroup
          transitionName={TRANSITION_NAME}
          transitionEnterTimeout={1}
          transitionLeaveTimeout={300}
        >
          {loader}
        </ReactCSSTransitionGroup>

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

function mapStateToProps(state) {
  return {
    hasBlockingImage: !!state.blockingImages.length,
  };
}

export default connect(mapStateToProps)(Page);
