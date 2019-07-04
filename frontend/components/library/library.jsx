import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItems from './playlist_index_items';
import LibraryNavBar from '../nav_bar/library_nav_bar';

class Library extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPlaylists();
    }

    render(){


        return (
            <div className="library-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                    <Link to={'/browse/library/playlist/create'} className="green-button playlist-btns">
                        New Playlist
                    </Link>
                </div>
                <PlaylistIndexItems 
                    playlists={this.props.playlists}
                />

            </div>
        )
    }
    
}

export default Library;