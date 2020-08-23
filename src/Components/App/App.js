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
      playlistTracks: [{name: 'm', album: 'n', artist: 'o', id: 4},
      {name: 'p', album: 'q', artist: 'r', id: 5},
      {name: 's', album: 't', artist: 'u', id: 6}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map((track) => {
      return track.uri;
    });
  }

  addTrack(track) {
    let currTrack = this.state.playlistTracks;
    if (currTrack.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      currTrack.push(track);
    }
    this.setState({
      playlistTracks: currTrack
    })
  }

  removeTrack(track) {
    let currTrack = this.state.playlistTracks;
    for (var i=0; i<currTrack.length; i++) {
      if (currTrack[i].id === track.id) {
        currTrack.splice(i,1);
        break;
      }
    }
    this.setState({
      playlistTracks: currTrack
    })
  }

  updatePlaylistName(newName) {
    this.setState({
      playlistName: newName
    })
  }

  search(searchTerm) {
    console.log(searchTerm);
  }


  render() {
    return (
      <div>
        <h1>Ear<span className="highlight">bender</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
                onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
