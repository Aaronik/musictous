var css = require('../styles/main.styl')

import React from 'react'
import Tracks from 'components/tracks'
import Matrix from 'components/matrix'

class App extends React.Component {
  render() {
    return (
      <div className='layout'>
        <Matrix className='layout-matrix-container'/>
        <Tracks className='layout-tracks-container'/>
      </div>
    )
  }
}

let container = document.getElementById('container'); 
React.render(<App/>, container);

