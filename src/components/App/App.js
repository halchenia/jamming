import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

function App() {
  const tracks = [
    {id:1, name: "Song 1", artist: "Artist 1", album: "Album 1"},
    {id:2, name: "Song 2", artist: "Artist 2", album: "Album 2"},
    {id:3, name: "Song 3", artist: "Artist 3", album: "Album 3"},
    {id:4, name: "Song 4", artist: "Artist 4", album: "Album 4"},
  ]  || {};
  return (
    <div>
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-main">
        <SearchResults tracks={tracks} />
        <Playlist tracks={tracks}/>
      </div>
    </div>
  );
}

export default App;
