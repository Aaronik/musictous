import React from 'react'

class MiniMatrix extends React.Component {
  propTypes: {
    tones: React.PropTypes.string.isRequired
  }

  render() {
    console.log(`mini-matrix receiving ${this.props.tones.length} tones`);

    return (
      <div className='mini-matrix-container'></div>
    )
  }
}

export default MiniMatrix
