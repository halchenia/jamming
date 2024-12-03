import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = ({ tracks }) => {
    return (
        <div className={styles.tracklist}>
            <div>This is Tracklist</div>
            {
                tracks.length > 0 ? (
                    <ul>
                        {tracks.map((track) => (
                            <Track track={track} key={track.id} />
                        ))}
                    </ul>
                ) : (
                    <div>No tracks available</div> // Здесь исправлена ошибка
                )
            }
        </div>
    );
};

export default Tracklist;
