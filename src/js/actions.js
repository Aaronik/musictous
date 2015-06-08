function navTo (url) {
  console.log('navving to ', url)
  window.history.pushState({}, '', url);
  window.postMessage('pushstate', '*');
}

function addFrag (frag) {
  if (window.location.search.indexOf('?') > -1) {
    navTo(window.location.search + '&' + frag);
  } else {
    navTo('?' + frag)
  }
}

var actions = {
  addTrack() {
    addFrag('2=fjdiwnckduytwojsvzUGSTPlqu_oqhs-ajfiejd7di8.');
  }
}

export default actions
