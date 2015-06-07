import React from 'react'
import Tone from 'components/tone'
import _ from 'underscore'

class TableRow extends React.Component {
  _generateRow() {
    return _(16).times(idx => {
      return <td><Tone key={`tone-${idx}`}/></td>;
    });
  }

  render() {
    return <tr>{this._generateRow()}</tr>
  }
}

class Table extends React.Component {
  _generateTable() {
    return _(16).times(idx => {
      return <TableRow key={`table-row-${idx}`}/>
    });
  }

  render() {
    return (
      <table className='matrix-table'>
        <tbody>
          {this._generateTable()}
        </tbody>
      </table>
    )
  }
}

class Matrix extends React.Component {
  render() {
    return (
      <div className='matrix-container'>
        <Table/>
      </div>
    )
  }
}

export default Matrix
