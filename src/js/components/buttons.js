import React from 'react'

class PlayButton extends React.Component {
  onClick() {
    window.history.pushState({}, '', '/?1=fjdiwnckduytwojsvzUGSTPlqu_oqhs-ajfiejd7di8.5')
    window.postMessage('pushstate', '*')
  }

  render() {
    return (
      <i className='fa fa-play' onClick={this.onClick}></i>
    )
  }
}

class PauseButton extends React.Component {
  render() {
    return (
      <i className='fa fa-pause'></i>
    )
  }
}

class StopButton extends React.Component {
  onClick() {
    window.history.pushState({}, '', '/')
    window.postMessage('pushstate', '*')
  }

  render() {
    return (
      <i className='fa fa-stop' onClick={this.onClick}></i>
    )
  }
}

class ClearAllButton extends React.Component {
  render() {
    return (
      <i className='fa fa-times'></i>
    )
  }
}

// export PlayButton
// export PauseButton
export { PlayButton, PauseButton, StopButton, ClearAllButton }
