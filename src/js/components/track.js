import React from 'react'
import MiniMatrix from 'components/mini_matrix'
import TrackRemoveButton from 'components/track_remove_button'
import TrackBody from 'components/track_body'

var Track = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    // TODO: Make custom binary string propType
    tones: React.PropTypes.string.isRequired, // binary
    slots: React.PropTypes.string.isRequired // binary
  },

  render() {
    return (
      <div className='track-container'>
        <MiniMatrix tones={this.props.tones}/>
        <TrackBody slots={this.props.slots}/>
        <TrackRemoveButton/>
      </div>
    )
  }
});

export default Track
