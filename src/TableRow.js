import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr><td>{this.props.results.Title}</td><td>{this.props.results.Year}</td><td>{this.props.results.Type}</td><td><img src={this.props.results.Poster} alt='' /></td></tr>
    );
  }
}

export default TableRow;
