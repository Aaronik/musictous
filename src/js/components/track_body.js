import React from 'react'

var TrackBody = React.createClass({
  propTypes: {
    slots: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div className='track-body-container'></div>
    )
  }
});

export default TrackBody
