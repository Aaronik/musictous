var css = require('../styles/main.styl')

import _ from 'underscore'
import React from 'react'
import { Router, Route } from 'react-router' 
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
import URL from 'url-parse'

var url = new URL(window.location.toString(), true);

const eightBitChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_']

function toBinary (basedNum) {

}

function binaryToChunks (binary) {
  // probs aint necessary with 6 bit chunks
  if (binary.length != 256) throw new Error('binaryToChunks can only work on 256 bit strings')

  let binaryDup = binary.slice();
  let remainingLength = binaryDup.length;
  
  let chunks = []
  for (var seg = 0; remainingLength > 0; seg++) {
    let first = seg * 6;
    let last = first + 6;
    chunks.push(binaryDup.slice(first, last));
    remainingLength -= 6;
  }

  return chunks;
}

function chunkToCharIdx (bite) {
  let reversedByteArr = bite.split('').reverse();
  return reversedByteArr.reduce( (acc, bit, idx) => {
    return acc + (bit * Math.pow(2, idx));
  }, 0);
}

function binaryTo64 (binary) {
  let chunks = binaryToChunks(binary);
  let charIndices = chunks.map(chunkToCharIdx);
  let chars = charIndices.map((idx) => {return eightBitChars[idx]});
  return chars.join('');
}

console.log(binaryTo64("0000000010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100101101001011010010110100"));

function tracksFromQuery (queryObj) {
  // takes {1: "5.23", 2: "2.1", etc.} (?1=5.23&2=2.1)
  // returns [{ t: 23, s: 3 }, { t: 1, s: 5 }, ...]
  let tracks = [];
  // for (let [id, infoString] of queryObj) { // wts?
  let ids = Object.keys(queryObj);
  ids.forEach(id => {
    let infoString = queryObj[id]; 
    let [tones, slots] = infoString.split('.');
    tracks.push(<Track id={id} tones={tones} slots={slots}/>);
  });

  return tracks;
}

console.log(url.query);
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

