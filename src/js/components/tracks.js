import React from 'react'
import Track from 'components/track'
import AddTrackButton from 'components/add_track_button'
import actions from 'js/actions'

var Tracks = React.createClass({
  propTypes: {
    tracks: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string,
      tones: React.PropTypes.string,
      slots: React.PropTypes.string
    })).isRequired
  },

  addTrackHandler() {
    actions.addTrack();
  },

  removeTrackHandler (trackId) {

  },

  _renderTracks () {
    return this.props.tracks.map( (track) => {
      let { id, tones, slots } = track;
      return <Track key={id} id={id} tones={tones} slots={slots}/>
    });
  },

  render() {
    return (
      <div className='tracks-container'>
        <AddTrackButton onClick={this.addTrackHandler}/>
        {this._renderTracks()} 
      </div>
    )
  }
});

export default Tracks
