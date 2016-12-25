import React from 'react';
import classNames from 'classnames';

import css from './Loader.scss';


function Heart() {
  return <div className={css.heart} />;
}


const PulsatingHeart = React.createClass({
  getDefaultProps() {
    return {
      animationOffset: 500,
    };
  },

  render() {
    const hearts = [0, 1, 2].map(i => {
      const style = {
        animationDelay: `${i * 1.5 + .5}s`,
      };

      return (
        <div className={css.heartWrapper} key={i} style={style}>
          <Heart />
        </div>
      );
    });

    return (
      <div className={css.pulsatingHeartWrapper}>{hearts}</div>
    );
  },
});


export default React.createClass({
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  },

  componentWillUnmount() {
    document.body.style.overflow = null;
  },

  render() {
    return (
      <div className={css.loaderCover}>
        <PulsatingHeart />
      </div>
    );
  },
});
