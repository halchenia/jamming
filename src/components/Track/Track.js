import React from 'react';
import styles from './Track.module.css';

const Track = () => {
    return (
        <div className={styles.track}>
            <h3>Track Name</h3>
            <p>Artist Name</p>
            <button className={styles.trackAction}>+</button>
        </div>
    );
}

export default Track;