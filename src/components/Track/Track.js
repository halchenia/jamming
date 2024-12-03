import React from 'react';
import styles from './Track.module.css';

const Track = ({track, onAdd, onRemove, isRemoval}) => {
    const handleAdd = () => {
        onAdd(track);
    };
    const handleRemove = () => {
        onRemove(track);
    };
    return (
        <>
            <div className={styles.track}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
                <button
                    className={styles.track}
                    onClick={isRemoval ? handleRemove : handleAdd}>
                        {isRemoval ? 'Remove' : '+'}
                </button> s
            </div>
            <div>This is track</div>
        </>
    );
}

export default Track;