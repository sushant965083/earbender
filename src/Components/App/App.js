import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Top songs',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  savePlaylist() {
    let trackUris = this.state.playlistTracks.map((track) => {
      return track.uri;
    });
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
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
    Spotify.search(searchTerm).then((searchResults) => {
      this.setState({
        searchResults: searchResults
      })
    })
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
