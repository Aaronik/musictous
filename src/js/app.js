var css = require('../styles/main.styl')

import React from 'react'
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
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

var url = new URL(window.location.toString(), true);
var tracks = tracksFromQuery(url.query);

class App extends React.Component {
  render() {
    return (
      <div className='layout'>
        <Matrix className='layout-matrix-container'/>
        <Tracks className='layout-tracks-container' tracks={tracks}/>
      </div>
    )
  }
}

let container = document.getElementById('container'); 
React.render(<App/>, container);

