import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import {addBlockingImage, removeBlockingImage} from './ducks/blockingImages';

import css from './BlockingBackgroundImage.jsx';

const BlockingBackgroundImage = React.createClass({
  getDefaultProps() {
    return {
      style: {},
    };
  },

  componentWillMount() {
    this.props.dispatch(addBlockingImage(this.props.src));

    this.img = document.createElement('img');
    this.img.addEventListener('load', this.removeImage);
    this.img.addEventListener('error', this.removeImage);
    this.img.src = this.props.src;
    this.img.classList.add(css.hiddenImg);

    document.documentElement.appendChild(this.img);
  },

  componentWillUnmount() {
    this.removeImage();
  },

  removeImage() {
    this.props.dispatch(removeBlockingImage(this.props.src));

    document.documentElement.removeChild(this.img);
  },

  render() {
    const style = {
      ...this.props.style,
      backgroundImage: `url(${this.props.src})`,
    };

    const className = classNames({
      [this.props.className]: !!this.props.className,
    });

    // Cheap way to get out props. Probably use _.omit if I end up adding lodash.
    const {dispatch, ...props} = this.props;

    return (
      <div {...props} className={className} style={style} />
    );
  },
});

export default connect(state => ({}))(BlockingBackgroundImage);
