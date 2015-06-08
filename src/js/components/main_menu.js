import React from 'react'
import { PlayButton, StopButton, ClearAllButton } from 'components/buttons'

class MainMenu extends React.Component {
  propTypes: {
    id: React.DOM.string.isRequired,
    // TODO: Make custom binary string propType
    tones: React.PropTypes.string.isRequired, // binary
    slots: React.PropTypes.string.isRequired // binary
  }

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
}

export default MainMenu
