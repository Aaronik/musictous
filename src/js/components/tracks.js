import React from 'react'
import Track from 'components/track'
import AddTrackButton from 'components/add_track_button'

class Tracks extends React.Component {
  propTypes: {
    tracks: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <div className='tracks-container'>
        <AddTrackButton/>
        {this.props.tracks}
      </div>
    )
  }
}

export default Tracks
