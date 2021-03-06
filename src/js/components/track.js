import React from 'react'
import MiniMatrix from 'components/mini_matrix'
import TrackRemoveButton from 'components/track_remove_button'
import TrackBody from 'components/track_body'
import propTypes from 'js/prop_types'

var Track = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    tones: propTypes.binaryString.isRequired,
    slots: propTypes.binaryString.isRequired,
    onRemoveTrack: React.PropTypes.func.isRequired,
    onMiniMatrixClick: React.PropTypes.func.isRequired
  },

  render() {
    let { onMiniMatrixClick, id, tones, onRemoveTrack, slots } = this.props;

    return (
      <div className='track-container'>
        <MiniMatrix tones={tones} onClick={onMiniMatrixClick.bind(null, id)}/>
        <TrackBody slots={slots}/>
        <TrackRemoveButton onClick={onRemoveTrack.bind(null, id)}/>
      </div>
    )
  }
});

export default Track
