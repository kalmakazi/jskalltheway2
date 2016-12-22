import React from 'react';
import classNames from 'classnames';

import css from './Hero.scss';

export default React.createClass({
  propTypes: {
    heroRef: React.PropTypes.func,
    img: React.PropTypes.string,
    posX: React.PropTypes.string,
    subtitle: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      posX: 'center',
    };
  },

  render() {
    const heroClassName = classNames({
      [css.hero]: true,
      [css.hero_large]: this.props.subtitle,
    });

    const subtitle = this.props.subtitle && (
      <div className={css.subtitle}>
        <div>{this.props.subtitle}</div>
      </div>
    );

    const heroStyle = {
      backgroundImage: `url(${this.props.img})`,
      backgroundPositionX: this.props.posX,
    };

    return (
      <div className={heroClassName} ref={this.props.heroRef} style={heroStyle}>
        <div className={css.titleWrapper}>
          <h1 className={css.title}>{this.props.children}</h1>
          {subtitle}
        </div>
      </div>
    );
  },
});
