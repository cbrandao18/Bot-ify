import React from 'react'
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({playlist}) => {
    return (
        <div>
            <li>
                <Link to={`/playlists/${playlist.id}`}>
                    {playlist.title}
                </Link>
                
            </li>
        </div>
    )
}

export default PlaylistIndexItem;