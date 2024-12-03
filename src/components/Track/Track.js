import React from 'react';
import styles from './Track.module.css';

const Track = ({track}) => {
    console.log(track);
    return (
        <>
            <div className={styles.track}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
                <button className={styles.trackAction}>+</button>
            </div>
            <div>This is track</div>
        </>
    );
}

export default Track;