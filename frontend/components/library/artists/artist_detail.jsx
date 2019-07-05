import React from 'react'
import ArtistAlbumItem from './artist_album_item';
import {Link} from 'react-router-dom';

class ArtistDetail extends React.Component {

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId)
    }

    render(){
        if (!this.props.artist && !this.props.albums){
            return <div className="artist-detail-container"></div>
        }

        let artistAlbumItems = Object.keys(this.props.albums).map(albumId => {
            let album = this.props.albums[albumId];
            let artist = this.props.artist;
            return <ArtistAlbumItem key={`album-${albumId}`} album={album} artist={artist}/>
        })

        let artistHeaderStyle = {
            backgroundImage: `url('${this.props.artist.hero}')`
        }

        return (
            <div className="artist-detail-container">
                <div 
                    className="library-index-header"
                    style={artistHeaderStyle}
                >
                    <div className="artist-detail-gradient"></div>
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