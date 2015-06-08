import React from 'react'

var MiniMatrix = React.createClass({
  propTypes: {
    tones: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div className='mini-matrix-container'></div>
    )
  }
});

export default MiniMatrix
