import React from 'react'

var Thinger = React.createClass({
  render: function() {
    return (
      <div>
        <h2>React</h2>
        <h2>Reactive</h2>
        <h2>Reactionary</h2>
        <h2>Readioactive</h2>
        <h3>Reminimizing</h3>
        <h3>rabbit</h3>
      </div>
    )
  }
}); 

var container = document.querySelector('.react-class');
React.render(<Thinger />, container);

