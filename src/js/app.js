var css = require('../styles/main.styl')

import _ from 'underscore'
import React from 'react'
import { Router, Route } from 'react-router' 
import Track from 'components/track'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'
import URL from 'url-parse'

var url = new URL(window.location.toString(), true);

const sixBitChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_']

function base10ToBinary (num, chunkSize = 6) {
  let numDup = Math.floor(num);

  let chunk = '';

  // convert to reversed binary
  while (numDup) {
    chunk += (numDup % 2) ? '1' : '0'
    numDup = Math.floor(numDup / 2);
  }

  // make sure reversed binary has correct precision
  while (chunk.length < chunkSize) {
    chunk += '0';
  }

  // reverse and return binary literal
  return chunk.split('').reverse().join('');
}

function decode (basedNum, desiredNumBits = 256) {
  let basedNumArr = basedNum.split('');
  let basedNumIdxArr = basedNumArr.map( char => {
    return sixBitChars.indexOf(char);
  });
  return basedNumIdxArr.map( (num, idx) => {
    if (idx == (basedNum.length - 1)) { // last num (handle 6 bit roundoff issue)
      // if desiredNumBits % 6 == 0, we're really on the last bit and we want 6
      return base10ToBinary(num, (desiredNumBits % 6) || 6);
    } else {
      return base10ToBinary(num, 6)
    }
  }).join('');
}

function binaryToChunks (binary) {
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

function encode (binary) {
  let chunks = binaryToChunks(binary);
  let charIndices = chunks.map(chunkToCharIdx);
  let chars = charIndices.map((idx) => {return sixBitChars[idx]});
  return chars.join('');
}

var edString = '1101011000101101001011010010110111010110001011010010110100101101110101100010110100101101001011011101011000101101001011010010110111010110001011010010110100101101110101100010110100101101001011011101011000101101001011010010110111010110001011010010110100101101';
console.log('edStrin:', edString);
var encodedString = encode(edString);
console.log('encoded:', encodedString);
var decodedString = decode(encodedString, edString.length);
console.log('decoded:', decodedString);
console.log('same:', edString == decodedString);

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

