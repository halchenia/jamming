import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = () => {
    return (
        <div className={styles.tracklist}>l
            <Track />
            <Track />
            <Track />
        </div>
    );
}

export default Tracklist;