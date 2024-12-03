import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
    return (
        <div className={styles.tracklist}>
            <div>This is Tracklist</div>
            {
                tracks.length > 0 ? (
                    <ul>
                        {tracks.map((track) => (
                            <Track track={track} key={track.id} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove} />
                        ))}
                    </ul>
                ) : (
                    <div>No tracks available</div>
                )
            }
        </div>
    );
};

export default Tracklist;
