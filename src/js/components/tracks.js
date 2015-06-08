import React from 'react'
import Track from 'components/track'
import AddTrackButton from 'components/add_track_button'
import actions from 'js/actions'

var Tracks = React.createClass({
  propTypes: {
    tracks: React.PropTypes.array.isRequired
  },

  addTrackHandler() {
    actions.addTrack();
  },

  removeTrackHandler (trackId) {

  },

  render() {
    return (
      <div className='tracks-container'>
        <AddTrackButton onClick={this.addTrackHandler}/>
        {this.props.tracks}
      </div>
    )
  }
});

export default Tracks
