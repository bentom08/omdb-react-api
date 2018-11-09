import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import TableRow from './TableRow.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Year: '',
      Rated: '',
      Runtime: '',
      Genre: '',
      Poster: '',
      searchResult: {Search: []}
    }
  }

  getMovie = () => {
    axios.get('http://www.omdbapi.com/?apikey=[yourAPIkeyhere]&t=' + document.getElementById('film').value).then( response => {

this.setState({
  Title: response.data.Title,
  Year: response.data.Year,
  Rated: response.data.Rated,
  Runtime: response.data.Runtime,
  Genre: response.data.Genre,
  Poster: response.data.Poster
});
    });
  }

  search = () => {
    axios.get('http://www.omdbapi.com/?apikey=[yourAPIkeyhere]&s=' + document.getElementById('film').value).then( response => {
      this.setState({
        searchResult: response.data
      });
    });
  }

  render() {
    var rows = [];

    for(var i = 0; i < this.state.searchResult.Search.length; i++) {
      console.log(this.state.searchResult.Search[i]);
      rows.push(<TableRow results={this.state.searchResult.Search[i]} />);
    }
    return (
      <div>
        <table>
          <tbody>
          <tr><th>Title</th><th>Year</th><th>Type</th></tr>
          {rows}
          </tbody>
        </table>
        <input type = "text" id='film' placeholder = "Film name..." /><br/>
        <input type = 'button' onClick={this.search} value = 'Search Films' />
      </div>
    );
  }
}

export default App;
