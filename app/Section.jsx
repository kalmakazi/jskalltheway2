import React from 'react';
import classNames from 'classnames';

import BlockingBackgroundImage from './BlockingBackgroundImage';

import css from './Section.scss';

export default React.createClass({
  render() {
    const image = this.props.img && (
      <div className={css.imageWrapper}>
        <BlockingBackgroundImage className={css.image} src={this.props.img} />
      </div>
    );

    const title = this.props.title && (
      <h2 className={css.title}>
        {this.props.title}
      </h2>
    );

    return (
      <div className={css.section}>
        {image}
        {title}

        <div className={css.text}>
          {this.props.children}
        </div>
      </div>
    );
  },
});
