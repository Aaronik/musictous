import React from 'react'

class MiniMatrix extends React.Component {
  propTypes: {
    tones: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className='mini-matrix-container'></div>
    )
  }
}

export default MiniMatrix
