import React from 'react';
import Tracklist from './../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = ({tracks}) => {
    return (
    <>
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <Tracklist tracks={tracks}/>
        </div>

        </>
    );
};

export default SearchResults;