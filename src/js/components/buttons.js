import React from 'react'

var PlayButton = React.createClass({
  onClick() {
    window.history.pushState({}, '', '/?1=fjdiwnckduytwojsvzUGSTPlqu_oqhs-ajfiejd7di8.5')
    window.postMessage('pushstate', '*')
  },

  render() {
    return (
      <i className='fa fa-play' onClick={this.onClick}></i>
    )
  }
});

var PauseButton = React.createClass({
  render() {
    return (
      <i className='fa fa-pause'></i>
    )
  }
});

var StopButton = React.createClass({
  onClick() {
    window.history.pushState({}, '', '/')
    window.postMessage('pushstate', '*')
  },

  render() {
    return (
      <i className='fa fa-stop' onClick={this.onClick}></i>
    )
  }
});

var ClearAllButton = React.createClass({
  render() {
    return (
      <i className='fa fa-times'></i>
    )
  }
});

export { PlayButton, PauseButton, StopButton, ClearAllButton }
