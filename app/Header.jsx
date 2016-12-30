import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import css from './Header.scss';


let HeaderLink = function(props) {
  const linkClassName = classNames({
    [css.link]: true,
    [css.link_selected]: props.href === props.currentRoute,
  });

  return (
    <a
      className={linkClassName}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

function mapStateToProps(state) {
  return {
    currentRoute: state.routing.locationBeforeTransitions.pathname,
  };
}

HeaderLink = connect(mapStateToProps)(HeaderLink);


function getMenuLinks() {
  return [
    [
      (
        <HeaderLink href="/" key="event">
          Event
        </HeaderLink>
      ),
      (
        <HeaderLink href="/accommodations" key="accommodations">
          Accommodations
        </HeaderLink>
      ),
    ],
    [
      (
        <HeaderLink href="/travel" key="travel">
          Travel
        </HeaderLink>
      ),
      (
        <HeaderLink href="/registry" key="registry">
          Registry
        </HeaderLink>
      ),
    ],
  ];
}


const Us = React.createClass({
  getDefaultProps() {
    return {
      usText: 'Jennifer & Stephen',
    };
  },

  render() {
    return (
      <a className={css.us} href="/" ref={this.props.usRef}>
        {this.props.usText}
      </a>
    );
  },
});


const CenteredLinks = React.createClass({
  getInitialState() {
    return {
      beStatic: false,
      beforeRight: null,
      afterLeft: null,
    };
  },

  componentDidMount() {
    this.positionLinks();

    this.listener = window.addEventListener('resize', this.positionLinks);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.positionLinks);
  },

  positionLinks() {
    if (this.props.hideLinks) {
      return;
    }

    const {left, right, width} = this.us.getBoundingClientRect();
    const beforeWidth = this.before.getBoundingClientRect().width;
    const afterWidth = this.after.getBoundingClientRect().width

    if (beforeWidth + width + afterWidth > document.body.clientWidth) {
      this.setState({
        beStatic: true,
      });
    } else {
      this.setState({
        beStatic: false,
        beforeLeft: left - beforeWidth,
        afterLeft: right,
      });
    }
  },

  usRef(us) {
    this.us = us;
  },

  renderHeaderLinks() {
    const [beforeLinks, afterLinks] = getMenuLinks();
    const position = this.state.beStatic ? 'static' : null;

    return (
      <div className={css.staticHeaderLinkGroupWrapper} style={{position}}>
        <div
          className={css.staticHeaderLinkGroup}
          ref={before => this.before = before}
          style={{left: this.state.beforeLeft, position}}
        >
          {beforeLinks}
        </div>
        <div
          className={css.staticHeaderLinkGroup}
          ref={after => this.after = after}
          style={{left: this.state.afterLeft, position}}
        >
          {afterLinks}
        </div>
      </div>
    );
  },

  render() {
    return (
      <div>
        <Us usRef={this.usRef} usText={this.props.usText} />
        {!this.props.hideLinks && this.renderHeaderLinks()}
      </div>
    );
  },
});


const StaticHeader = React.createClass({
  render() {
    return (
      <header className={css.staticHeader}>
        <CenteredLinks hideLinks={this.props.isMobile} />
      </header>
    );
  },
});

const FixedHeader = React.createClass({
  render() {
    const fixedHeaderClassName = classNames({
      [css.fixedHeader]: true,
      [css.fixedHeader_show]: this.props.isBelowHero,
    });

    return (
      <div className={fixedHeaderClassName}>
        <CenteredLinks hideLinks={this.props.isMobile} usText="J&S" />
      </div>
    );
  },
});

const HamburgerMenu = React.createClass({
  getInitialState() {
    return {
      menuOpen: false,
    };
  },

  toggleMenu() {
    const menuOpen = !this.state.menuOpen

    this.setState({
      menuOpen,
    });

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
    }
  },

  renderMenuList() {
    return (
      <div>
        <div className={css.menuUs}>
          <Us />
        </div>
        <div className={css.menuList}>
          {getMenuLinks()}
        </div>
      </div>
    );
  },

  render() {
    const hamburgerWrapperClassName = classNames({
      [css.hamburgerWrapper]: true,
      [css.hamburgerWrapper_belowHero]: this.props.isBelowHero,
    });

    return (
      <div className={css.hamburgerMenu}>
        <div className={hamburgerWrapperClassName} onClick={this.toggleMenu}>
          <div className={css.hamburger}>
            <div className={css.topHam} />
            <div className={css.midHam} />
            <div className={css.botHam} />
          </div>
        </div>

        {this.state.menuOpen && this.renderMenuList()}
      </div>
    );
  },
});

export default React.createClass({
  getInitialState() {
    return {
      isMobile: this.isMobile(),
      isBelowHero: false,
    };
  },

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: this.isMobile(),
      });
    });

    window.addEventListener('scroll', () => {
        this.setState({
          isBelowHero: this.props.triggerPos && window.scrollY >= this.props.triggerPos
        });
    });
  },

  isMobile() {
    return document.body.clientWidth < 600;
  },


  render() {
    const SecondaryHeader = this.state.isMobile ? HamburgerMenu : FixedHeader;

    return (
      <div>
        <StaticHeader isMobile={this.state.isMobile} />
        <SecondaryHeader isBelowHero={this.state.isBelowHero} />
      </div>
    );
  },
});
