import React from 'react'
import { PlayButton, StopButton, ClearAllButton } from 'components/buttons'

var MainMenu = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    // TODO: Make custom binary string propType
    tones: React.PropTypes.string.isRequired, // binary
    slots: React.PropTypes.string.isRequired // binary
  },

  render() {
    return (
      <div className='main-menu-container'>
        <div className='main-menu-inner'>
          <PlayButton/>
          <StopButton/>
          <ClearAllButton/>
        </div>
      </div>
    )
  }
});

export default MainMenu
