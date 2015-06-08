import React from 'react'
import Track from 'components/track'
import AddTrackButton from 'components/add_track_button'

var Tracks = React.createClass({
  propTypes: {
    tracks: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <div className='tracks-container'>
        <AddTrackButton/>
        {this.props.tracks}
      </div>
    )
  }
});

export default Tracks
