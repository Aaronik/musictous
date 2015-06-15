import React from 'react'
import propTypes from 'js/prop_types'

var MiniMatrix = React.createClass({
  propTypes: {
    tones: propTypes.binaryString.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div 
        onClick={this.props.onClick} 
        className='mini-matrix-container'>
      </div>
    )
  }
});

export default MiniMatrix
