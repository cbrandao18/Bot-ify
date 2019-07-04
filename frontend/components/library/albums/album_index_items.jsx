import React from 'react'
import ArtistAlbumItem from '../artists/artist_album_item'

class AlbumIndexItems extends React.Component {

    render(){
        let albumItems = Object.keys(this.props.albums).map(albumId => {
            let album = this.props.albums[albumId];
            let artist = this.props.artists[album.artist_id];
            return <ArtistAlbumItem key={`album-${albumId}`} album={album} artist={artist} />
        })

        return (
            <div className="library-index-content">
                <ul className="artist-albums">
                    {albumItems}
                </ul>
            </div>
        )
    }
}

export default AlbumIndexItems;