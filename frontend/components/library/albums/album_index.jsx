import React from 'react'
import ArtistAlbumItem from '../artists/artist_album_item';
import LibraryNavBar from '../../nav_bar/library_nav_bar';

class AlbumIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAlbums();
        this.props.fetchArtists();
    }

    render(){
        let albumItems = Object.keys(this.props.albums).map(albumId => {
            let album = this.props.albums[albumId];
            let artist = this.props.artists[album.artist_id];
            return <ArtistAlbumItem key={`album-${albumId}`} album={album} artist={artist} />
        })

        return (
            <div className="album-index-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                </div>
                <div className="library-index-content">
                    <ul className="artist-albums">
                        {albumItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AlbumIndex;