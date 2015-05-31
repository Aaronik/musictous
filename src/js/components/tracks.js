import React from 'react'
import Track from 'components/track'
import AddTrackButton from 'components/add_track_button'

class Tracks extends React.Component {
  render() {
    return (
      <div className='tracks-container'>
        <AddTrackButton/>
        <Track/>
        <Track/>
      </div>
    )
  }
}

export default Tracks
