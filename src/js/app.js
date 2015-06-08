var css = require('../styles/main.styl')

import React from 'react'
// import Router from 'react-router'
// import { Route } from 'react-router'
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
import MainMenu from 'components/main_menu'
import URL from 'url-parse'
import utils from 'js/utils'

function tracksFromQuery (queryObj) {
  // takes {1: "5.23", 2: "2.1", etc.} (?1=5.23&2=2.1)
  // returns [{ t: 23, s: 3 }, { t: 1, s: 5 }, ...]
  let tracks = [];
  // for (let [id, infoString] of queryObj) { // wts?
  let ids = Object.keys(queryObj);
  ids.forEach(id => {
    let infoString = queryObj[id];
    let [encodedTones, encodedslots] = infoString.split('.');
    let tones = utils.decode(encodedTones, 256);
    let slots = utils.decode(encodedslots, 8);
    tracks.push(<Track key={`track-${id}`} id={id} tones={tones} slots={slots}/>);
  });

  return tracks;
}

function getTracks() {
  var url = new URL(window.location.toString(), true);
  console.log('detecting query params:', url.query);
  var tracks = tracksFromQuery(url.query);
  return tracks;
}


var App = React.createClass({
  getInitialState() {
    return {
      tracks: null
    }
  },

  componentDidMount() {
    window.addEventListener('message', (event) => {
      if (event.data == 'pushstate') return;
      console.log('message', args);
      this.setState({tracks: getTracks()});
    })
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

