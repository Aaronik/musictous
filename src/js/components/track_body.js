import React from 'react'

class TrackBody extends React.Component {
  propTypes: {
    slots: React.PropTypes.string.isRequired
  }

  render() {
    console.log(`track body receiving ${this.props.slots.length} slots`)

    return (
      <div className='track-body-container'></div>
    )
  }
}

export default TrackBody
