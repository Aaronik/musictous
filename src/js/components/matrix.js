import React from 'react'
import Tone from 'components/tone'
import propTypes from 'js/prop_types'
import _ from 'underscore'

var TableRow = React.createClass({
  propTypes: {
    tones: propTypes.binaryString
  },

  _generateRow() {
    return this.props.tones.split('').map( (tone, idx) => {
      return <td key={`tone-${idx}`}><Tone tone={tone}/></td>;
    })
  },

  render() {
    return <tr>{this._generateRow()}</tr>
  }
});

var Table = React.createClass({
  propTypes: {
    tones: propTypes.binaryString.isRequired
  },

  _generateTable() {
    let matrixLength = Math.sqrt(this.props.tones.length);    

    return _.times(matrixLength, (idx) => {
      let startIdx = matrixLength * idx;
      let endIdx = matrixLength * (idx + 1);
      let rowTones = this.props.tones.split('').slice(startIdx, endIdx).join('');
      return <TableRow key={`table-row-${idx}`} tones={rowTones}/>;
    })
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

  componentWillMount() {
    if (!this.props.tones) return;
    let toneCount = this.props.tones.length;
    let matrixLength = Math.sqrt(toneCount);
    let roundedRoot = Math.round(matrixLength);
    if (roundedRoot != matrixLength) {
      throw new Error('matrix must be given a square grid');
    }
  },

  render() {
    if (!this.props.tones) return <div className='blank-matrix'></div>

    return (
      <div className='matrix-container'>
        <Table tones={this.props.tones}/>
      </div>
    )
  }
});

export default Matrix
