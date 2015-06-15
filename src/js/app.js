var css = require('../styles/main.styl')

import React from 'react'
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
import MainMenu from 'components/main_menu'
import utils from 'js/utils'
import actions from 'js/actions'

// let's call a track data
// track = { id: string, tones: bin string, slots: bin string }

var App = React.createClass({
  getInitialState() {
    let tracks = utils.getTracksFromUrl();

    return {
      tracks: tracks,
      currentTrack: tracks[0] 
    };
  },

  componentWillMount() {
    // TODO: move to actions? actions.listenForUrlChange (event) => ...
    // some kind of store watch mixin?
    window.addEventListener('message', (event) => {
      if (event.data != 'pushstate') return;

      let tracks = utils.getTracksFromUrl();

      this.setState({ 
        tracks: tracks,
        currentTrack: !!tracks.length && tracks[tracks.length - 1]
      });
    });
  },

  _onToneClick (toneId) {
    let modifiedTrack = utils.toggleTone(toneId, this.state.currentTrack);

    let newTracks = this.state.tracks.map( (track) => {
      if (track.id != modifiedTrack.id) return track;
      return modifiedTrack; 
    });

    actions.navigateToTracks(newTracks);
  },

  _onNewTrack() {
    actions.addTrack();
  },

  _onRemoveTrack (trackId) {
    let newTracks = this.state.tracks.filter( (track) => {
      return track.id != trackId;
    });

    actions.navigateToTracks(newTracks);
  },

  render() {
    let { tracks, currentTrack } = this.state;
    if (!!currentTrack) var { tones } = currentTrack;

    return (
      <div>
        <div className='layout-row'>

          <Matrix 
            className='layout-matrix-container' 
            tones={tones} 
            onToneClick={this._onToneClick}/>

          <Tracks 
            className='layout-tracks-container' 
            tracks={tracks}
            onNewTrack={this._onNewTrack}
            onRemoveTrack={this._onRemoveTrack}/>

        </div>

        <div className='layout-row'>
          <MainMenu className='layout-main-menu-container'/>
        </div>
      </div>
    )
  }
});

let container = document.getElementById('container'); 
React.render(<App/>, container);

