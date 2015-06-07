import React from 'react'
import MiniMatrix from 'components/mini_matrix'
import TrackRemoveButton from 'components/track_remove_button'
import TrackBody from 'components/track_body'

class Track extends React.Component {
  propTypes: {
    id: React.DOM.string.isRequired,
    // TODO: Make custom binary string propType
    tones: React.PropTypes.string.isRequired, // binary
    slots: React.PropTypes.string.isRequired // binary
  }

  render() {
    return (
      <div className='track-container'>
        <MiniMatrix tones={this.props.tones}/>
        <TrackBody slots={this.props.slots}/>
        <TrackRemoveButton/>
      </div>
    )
  }
}

export default Track
