import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from '../playlist/playlist_index_item';
import LibraryNavBar from '../nav_bar/library_nav_bar';

class Library extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPlaylists();
    }

    render(){
        let playlistItems = [];
        if (this.props.playlists){
            playlistItems = Object.keys(this.props.playlists).map(id => {
                let playlist = this.props.playlists[id]
                return <PlaylistIndexItem key={id} playlist={playlist}/>
            })
        }

        return (
            <div className="library-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                    <Link to={'/browse/library/playlist/create'} className="green-button playlist-btns">
                        New Playlist
                    </Link>
                </div>
                <div className="library-index-content">
                    <ul className="library-index-list">
                        {playlistItems}
                    </ul>
                </div>

            </div>
        )
    }
    
}

export default Library;