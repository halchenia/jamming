import React from 'react';
import Tracklist from './../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = () => {
    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <Tracklist />
        </div>
    );
};

export default SearchResults;