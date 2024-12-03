import React from 'react';
import Tracklist from './../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = ({tracks, onAdd}) => {
    return (
    <div className={styles.searchResults}>
        <h2>Results</h2>
        <Tracklist tracks={tracks} onAdd={onAdd} />
    </div>
    );
};

export default SearchResults;