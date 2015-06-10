var css = require('../styles/main.styl')

import React from 'react'
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
import MainMenu from 'components/main_menu'
import utils from 'js/utils'

// let's call a track data
// track = { id: string, tones: bin string, slots: bin string }

var App = React.createClass({
  getInitialState() {
    return {
      tracks: utils.getTracksFromUrl()
    };
  },

  componentWillMount() {
    // TODO: move to actions? actions.listenForUrlChange (event) => ...
    window.addEventListener('message', (event) => {
      if (event.data != 'pushstate') return;
      this.setState({ tracks: utils.getTracksFromUrl() });
    });
  },

  render() {
    return (
      <div>
        <div className='layout-row'>
          <Matrix className='layout-matrix-container'/>
          <Tracks className='layout-tracks-container' tracks={this.state.tracks}/>
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

