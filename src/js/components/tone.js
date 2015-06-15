import React from 'react'

var Tone = React.createClass({
  propTypes: {
    tone: React.PropTypes.oneOf(['0', '1']).isRequired
  },

  render() {
    let className = 'tone-container ';

    if (this.props.tone == '1') {
      className += 'tone-container-active';
    }

    return <div className={className}></div>;
  }
});

export default Tone
