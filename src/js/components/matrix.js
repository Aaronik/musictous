import React from 'react'
import Tone from 'components/tone'
import _ from 'underscore'

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        _(16).times(idx => {
          return <td><Tone key={`tone-${idx}`}/></td>;
        });
      </tr>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          _(16).times(idx => {
            return <TableRow key={`table-row-${idx}`}/>
          });
        </tbody>
      </table>
    )
  }
}

class Matrix extends React.Component {
  render() {
    return (
      <div className='matrix-container'>
        <table/>
      </div>
    )
  }
}

export default Matrix
