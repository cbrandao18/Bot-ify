import React from 'react'

const PlaylistIndexItem = ({playlist}) => {
    return (
        <div>
            <li>{playlist.title}</li>
        </div>
    )
}

export default PlaylistIndexItem;