import React from 'react'

var TrackBody = React.createClass({
  propTypes: {
    slots: React.PropTypes.string.isRequired
  },

  render() {
    console.log(`track body receiving ${this.props.slots.length} slots`)

    return (
      <div className='track-body-container'></div>
    )
  }
});

export default TrackBody
