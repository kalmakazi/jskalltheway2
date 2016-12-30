import SpotifyWebApi from 'spotify-web-api-js';
import Q from 'q';


const TICK = 100;
const FADE_TIME = 5000;
const PLAYLIST = [
  '2tUBqZG2AbRi7Q0BIrVrEj', // I want to dance with somebody
  '76hfruVvmfQbw0eYn1nmeC', // Cake by the ocean
  '6b8Be6ljOzmkOmFslEb23P', // 24k Magic
  '4vp2J1l5RD4gMZwGFLfRAu', // I gotta feelin
  '2PpruBYCo4H7WOBJ7Q2EwM', // Hey ya!
  '5nNmj1cLH3r4aA4XDJ2bgY', // September
  '32OlwWuMpZ6b0aN2RZOeMS', // Uptown funk
];


export default class SpotifyPlayer {
  constructor() {
    this.audioObjs = {};
    this.timeouts = [];
    this.intervals = [];

    this.playlistIndex = -1;
    this.volStep = 1 / (FADE_TIME / TICK);

    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setPromiseImplementation(Q);
  }

  setInterval(fn, duration) {
    const interval = setInterval(fn, duration);
    this.intervals.push(interval);

    return interval;
  }

  setTimeout(fn, duration) {
    const timeout = setTimeout(fn, duration);
    this.timeouts.push(timeout);

    return timeout;
  }

  fadeIn(audio) {
    const interval = this.setInterval(() => {
      const currentVol = audio.volume;
      let newVol = currentVol + this.volStep;

      if (newVol > 1) {
        newVol = 1;
        clearInterval(interval);
      }

      audio.volume = newVol; // eslint-disable-line no-param-reassign
    }, TICK);
  }

  fadeOut(audio) {
    const interval = this.setInterval(() => {
      const currentVol = audio.volume;
      let newVol = currentVol - this.volStep;

      if (newVol < 0) {
        newVol = 0;
        clearInterval(interval);
      }

      audio.volume = newVol; // eslint-disable-line no-param-reassign
    }, TICK);
  }

  playNext(fadeIn) {
    this.playlistIndex = this.playlistIndex === PLAYLIST.length - 1 ? 0 : this.playlistIndex + 1;
    const id = PLAYLIST[this.playlistIndex];

    if (this.audioObjs[id]) {
      this.playTrack(this.audioObjs[id], fadeIn);
      return;
    }

    this.spotifyApi.getTrack(id).then(data => {
      const audio = new Audio(data.preview_url);

      this.audioObjs[id] = audio;

      this.playTrack(this.audioObjs[id], fadeIn);
    });
  }

  playTrack(audio, fadeIn) {
    if (fadeIn) {
      audio.volume = 0; // eslint-disable-line no-param-reassign
      this.fadeIn(audio);
    } else {
      audio.volume = 1; // eslint-disable-line no-param-reassign
    }

    audio.play();

    this.setTimeout(() => {
      this.fadeOut(audio);
      this.playNext(true);
    }, 30000 - FADE_TIME);
  }

  start() {
    this.playlistIndex = Math.floor(Math.random() * PLAYLIST.length);
    this.playNext(false);
  }

  stop() {
    const audio = this.audioObjs[PLAYLIST[this.playlistIndex]];
    if (audio) {
      audio.pause();
      audio.volume = 0; // eslint-disable-line no-param-reassign
      audio.currentTime = 0; // eslint-disable-line no-param-reassign
    }

    this.timeouts.map(clearTimeout);
    this.intervals.map(clearInterval);
    this.playlistIndex = -1;

    this.timeouts = [];
    this.intervals = [];
  }
}
