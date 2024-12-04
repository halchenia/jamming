import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

const Playlist = ({playlistName, playlistTracks, onRemove, onNameChange }) => {
return (
    <div className={styles.playlist}>
        <h2>Playlist</h2>
        <input 
            onChange={onNameChange}
            placeholder="Playlist name"
            className={styles.playlistNameInput}
            value={playlistName}
        />
        <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} /> 
        <button className={styles.saveButton}>Save To Spotify</button>
    </div>
);
}

export default Playlist;