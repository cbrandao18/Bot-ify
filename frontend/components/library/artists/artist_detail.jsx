import React from 'react'
import ArtistAlbumItem from './artist_album_item';
import {Link} from 'react-router-dom';

class ArtistDetail extends React.Component {

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId)
    }

    render(){
        if (!this.props.artist && !this.props.albums){
            return <></>
        }

        let artistAlbumItems = Object.keys(this.props.albums).map(albumId => {
            let album = this.props.albums[albumId];
            return <ArtistAlbumItem key={`album-${albumId}`} album={album} />
        })

        return (
            <div className="artist-detail-container">
                <div className="library-index-header">
                    <div className="artist-detail-gradient">
                    </div>
                    <h2>{this.props.artist.name}</h2>
                </div>
                
                <div className="artist-detail">
                    <h3>Albums</h3>
                    <ul className="artist-albums">
                        {artistAlbumItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArtistDetail;