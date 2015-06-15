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
    let { onMiniMatrixClick, id } = this.props;

    return (
      <div className='track-container'>

        <MiniMatrix 
          tones={this.props.tones}
          onClick={onMiniMatrixClick.bind(null, id)}/>

        <TrackBody slots={this.props.slots}/>
        
        <TrackRemoveButton 
          onClick={this.props.onRemoveTrack.bind(null, this.props.id)}/>
      </div>
    )
  }
});

export default Track
