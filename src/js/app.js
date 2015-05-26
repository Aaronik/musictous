import React from 'react'

var Thinger = React.createClass({
  render: function() {
    return <div>Hello from jsx again!</div>
  }
}); 

// let div = document.createElement('div');
// div.className = 'react-class';
// document.body.appendChild(div); // why doesn't document have body here?
var container = document.querySelector('.react-class');
React.render(<Thinger />, container);
