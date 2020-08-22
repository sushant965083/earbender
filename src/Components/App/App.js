import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'a', album: 'b', artist: 'c', id: 1},
      {name: 'd', album: 'e', artist: 'f', id: 2},
      {name: 'g', album: 'h', artist: 'i', id: 3}]
    }
  }


  render() {
    return (
      <div>
        <h1>Ear<span className="highlight">bender</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
