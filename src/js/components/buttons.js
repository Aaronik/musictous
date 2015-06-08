import React from 'react'

class PlayButton extends React.Component {
  render() {
    return (
      <i className='fa fa-play'></i>
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
  render() {
    return (
      <i className='fa fa-stop'></i>
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
