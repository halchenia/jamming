import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [query, setquery] = useState('');
    const handleSearch = () => {
        console.log('Searhing for:', query);
    };
    return (
        <div className={styles.searchBar}>
            <input 
                className={styles.inputField} 
                type="text" placeholder="Enter A Song, Album, or Artist" 
                value={query}
                onChange={(e)=> setquery(e.target.value)}
                placeholder="Search for a song or artist"
            />
            <button 
                className={styles.button}
                onClick={handleSearch}
            >Search</button>
        </div>
    );
};

export default SearchBar;

