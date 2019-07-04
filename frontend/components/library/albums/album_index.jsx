import React from 'react'
import ArtistAlbumItems from './album_index_items';
import LibraryNavBar from '../../nav_bar/library_nav_bar';

class AlbumIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAlbums();
        this.props.fetchArtists();
    }

    render(){


        return (
            <div className="album-index-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                </div>
                <ArtistAlbumItems 
                    albums={this.props.albums}
                    artists={this.props.artists}
                />
            </div>
        )
    }
}

export default AlbumIndex;