import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = (props) => {
    return (
        <div className={styles.trackliast}>
            <div>This is Tracklist</div>
            <ul>
        {
            props.tracks.map((track) => (
                <Track track={track} key={track.id} />               
            ))
        }       
        </ul>
        </div>
    );
}

export default Tracklist;