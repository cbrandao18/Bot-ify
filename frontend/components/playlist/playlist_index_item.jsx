import React from 'react'
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({playlist}) => {
    return (
            <li>
                <Link to={`/playlists/${playlist.id}`}>
                <div className="playlist-image playlist-image--small"></div>
                    <div>{playlist.title}</div>
                </Link>
            </li>
    )
}

export default PlaylistIndexItem;