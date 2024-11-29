import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

function App() {
  return (
    <div>
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-main">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
