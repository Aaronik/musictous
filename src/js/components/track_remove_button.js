import React from 'react'

var TrackRemoveButton = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div className='track-remove-button-container' onClick={this.props.onClick}>
        <i className='fa fa-times-circle'></i>
      </div>
    )
  }
});

export default TrackRemoveButton
