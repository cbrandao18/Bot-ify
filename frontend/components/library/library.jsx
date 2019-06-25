import React from 'react';
import { Link } from 'react-router-dom';

const Library = () => {
    return(
        <div className="library-container">
            <div className="library-index-header">
                <div className="library-index-nav">

                </div>
                <Link to={'/browse/library/playlist/create'}className="green-button new-playlist">
                    New Playlist
                </Link>
            </div>
            <div className="library-index-content">

            </div>
            
        </div>
    )
}

export default Library;