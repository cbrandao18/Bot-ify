import React from 'react'
import PlaylistIndexItem from '../playlist/playlist_index_item';

class PlaylistIndexItems extends React.Component {
    render() {
        let playlistItems = [];
        if (this.props.playlists) {
            playlistItems = Object.keys(this.props.playlists).map(id => {
                let playlist = this.props.playlists[id]
                return <PlaylistIndexItem key={id} playlist={playlist} />
            })
        }

        return (
            <div className="library-index-content">
                <ul className="library-index-list">
                    {playlistItems}
                </ul>
            </div>
        )
    }
}

export default PlaylistIndexItems;