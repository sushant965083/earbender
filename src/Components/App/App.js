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
      {name: 'g', album: 'h', artist: 'i', id: 3}],
      playlistName: 'Top songs',
      playlistTracks: [{name: 'm', album: 'n', artist: 'o', id: 1},
      {name: 'p', album: 'q', artist: 'r', id: 1},
      {name: 's', album: 't', artist: 'u', id: 1}]
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
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
