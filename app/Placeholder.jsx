import React from 'react';
import Confetti from 'react-confetti';

import { SpotifyPlayer } from './SpotifyPlayer';

import css from './Placeholder.scss';


export default React.createClass({
  getInitialState() {
    return {
      partyMode: false,
    };
  },

  componentWillMount() {
    this.spotify = new SpotifyPlayer();
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextState.partyMode) {
      this.spotify.start();
    } else {
      this.spotify.stop();
    }
  },

  componentWillUnmount() {
    this.spotify.stop();
  },

  toggleParty() {
    this.setState({
      partyMode: !this.state.partyMode,
    });
  },

  render() {
    return (
      <div className={css.image}>
        <div className={css.comingSoon}>
          Coming soon
        </div>
        <div className={css.party} onClick={this.toggleParty}>
          {this.state.partyMode ? 'I need a breather!' : 'Let’s party!'}
          {this.state.partyMode && <Confetti gravity={0.15} numberOfPieces={275} />}
        </div>
      </div>
    );
  },
});
