import React from 'react'
import Tone from 'components/tone'
import propTypes from 'js/prop_types'
import _ from 'underscore'

var TableRow = React.createClass({
  _generateRow() {
    return _(16).times(idx => {
      return <td key={`tone-${idx}`}><Tone/></td>;
    });
  },

  render() {
    return <tr>{this._generateRow()}</tr>
  }
});

var Table = React.createClass({
  _generateTable() {
    return _(16).times(idx => {
      return <TableRow key={`table-row-${idx}`}/>
    });
  },

  render() {
    return (
      <table className='matrix-table'>
        <tbody>
          {this._generateTable()}
        </tbody>
      </table>
    )
  }
});

var Matrix = React.createClass({
  propTypes: {
    tones: propTypes.binaryString
  },

  render() {
    if (!this.props.tones) return <div className='blank-matrix'></div>

    return (
      <div className='matrix-container'>
        <Table/>
      </div>
    )
  }
});

export default Matrix
