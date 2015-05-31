import React from 'react'
import MiniMatrix from 'components/mini_matrix'
import TrackRemoveButton from 'components/track_remove_button'
import TrackBody from 'components/track_body'

class Track extends React.Component {
  render() {
    return (
      <div className='track-container'>
        <MiniMatrix/>
        <TrackBody/>
        <TrackRemoveButton/>
      </div>
    )
  }
}

export default Track
