var css = require('../styles/main.styl')

import React from 'react'
// import Router from 'react-router'
// import { Route } from 'react-router'
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
import MainMenu from 'components/main_menu'
import utils from 'js/utils'

var App = React.createClass({
  getInitialState() {
    return {
      tracks: this._buildTracks()
    };
  },

  _buildTracks() {
    let tracks = utils.getTracksFromUrl();
    return tracks.map( (track) => {
      let { id, tones, slots } = track;
      return <Track key={`track-${id}`} id={id} tones={tones} slots={slots}/>;
    });
  },

  componentDidMount() {
    // TODO: move to actions? actions.listenForUrlChange (event) => ...
    window.addEventListener('message', (event) => {
      if (event.data != 'pushstate') return;
      this.setState({tracks: this._buildTracks()});
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

// var routes = (
//   <Route name='main' path='/' handler={App}></Route>
// )

// Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//   React.render(<Handler params={state.params} query={state.query}/>, container);
// });

React.render(<App/>, container);

