import _ from 'underscore'
import URL from 'url-parse'
import React from 'react'
import Track from 'components/track'

const SIX_BUT_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_']

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

function chunkToBase10 (bite) {
  let reversedByteArr = bite.split('').reverse();
  return reversedByteArr.reduce( (acc, bit, idx) => {
    return acc + (bit * Math.pow(2, idx));
  }, 0);
}

function trackObjectsFromQuery (queryObj) {
  let trackObjects = [];
  let ids = Object.keys(queryObj);

  return ids.map( (id) => {
    let infoString = queryObj[id];
    let [encodedTones, encodedslots] = infoString.split('.');
    let tones = utils.decode(encodedTones, 256);
    let slots = utils.decode(encodedslots, 8);
    return { id, tones, slots };
  });
}

function url() {
  return new URL(window.location.toString(), true);
}

function tracksFromTrackObjects (trackObjects) {
  return trackObjects.map( (trackObject) => {
    let { id, tones, slots } = trackObject;
    return <Track key={`track-${id}`} id={id} tones={tones} slots={slots}/>;
  })
}

function encode (binary) {
  let chunks = binaryToChunks(binary);
  let charIndices = chunks.map(chunkToBase10);
  let chars = charIndices.map((idx) => {return SIX_BUT_CHARS[idx]});
  return chars.join('');
}

function decode (basedNum, desiredNumBits = 256) {
  let basedNumArr = basedNum.split('');
  let basedNumIdxArr = basedNumArr.map( char => {
    return SIX_BUT_CHARS.indexOf(char);
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

function getTracksFromUrl() {
  // console.log('detecting query params:', url().query);
  var trackObjects = trackObjectsFromQuery(url().query);
  var tracks = tracksFromTrackObjects(trackObjects);
  return tracks;
}

function generateTrackId() {
  var usedIds = _.pluck(trackObjectsFromQuery(url().query), 'id')
    .map( (strId) => {
      return parseInt(strId);
    });

  // major hack?
  for (var newId = 0; _.contains(usedIds, newId); newId++) {}
  return newId;
}

// TODO: Make tests for this
// var edString = '111111000000';
// console.log('edStrin:', edString);
// var encodedString = encode(edString);
// console.log('encoded:', encodedString);
// var decodedString = decode(encodedString, edString.length);
// console.log('decoded:', decodedString);
// console.log('same:', edString == decodedString);

let utils = { encode, decode, getTracksFromUrl, generateTrackId }

export default utils
