import React from 'react'

var Thinger = React.createClass({
  render: function() {
    return (
      <div>
        <h2>React</h2>
        <h2>Reactive</h2>
        <h2>Reactionary</h2>
        <h2>Readioactive</h2>
      </div>
    )
  }
}); 

// let div = document.createElement('div');
// div.className = 'react-class';
// document.body.appendChild(div); // why doesn't document have body here?
var container = document.querySelector('.react-class');
console.log(container);
React.render(<Thinger />, container);

