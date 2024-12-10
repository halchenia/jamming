import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

function App() {

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchResults = [
    {id:1, name: "Song 1", artist: "Artist 1", album: "Album 1", uri: "spotify:track:1"},
    {id:2, name: "Song 2", artist: "Artist 2", album: "Album 2", uri: "spotify:track:2"},
    {id:3, name: "Song 3", artist: "Artist 3", album: "Album 3", uri: "spotify:track:3"},
    {id:4, name: "Song 4", artist: "Artist 4", album: "Album 4", uri: "spotify:track:4"},
  ]  || {};

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((savedTrack) => savedTrack.id !== track.id));
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log(`Saving playlist: ${playlistName}`);
    console.log(`Tracks: ${trackURIs}`);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div>
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-main">
        <SearchResults 
          tracks={searchResults} 
          onAdd={addTrack} 
        />
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onNameChange={handlePlaylistNameChange}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
