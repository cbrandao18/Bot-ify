import React from 'react'
import {Link} from 'react-router-dom'
import SongIndexItem from '../../song/song_index_item';

class AlbumDetail extends React.Component {

    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render(){
        if (!this.props.album) {
            return <></>
        }

        if (!this.props.songs && Object.keys(this.props.songs).length === 0){
            return <></>
        }

        let albumImageStyle = {
            backgroundImage: `url('${this.props.album.cover}')`
        }

        let songItems = Object.keys(this.props.songs).map(songId => {
            let song = this.props.songs[songId];
            let artist = this.props.artist
            return (
                <SongIndexItem key={`song-${songId}`} song={song} artist={artist}/>
            )
        })

        return(
            <div className="album-detail-wrapper">
                <div className="album-detail-info">
                    <div 
                        className="album-detail-image"
                        style={albumImageStyle}    
                    ></div>
                    <h2>{this.props.album.title}</h2>
                    <h3 className="album-artist">
                        <Link to={`/artists/${this.props.artist.id}`}>
                            {this.props.artist.name}
                        </Link>
                    </h3>
                </div>

                <div className="tracklist-container">
                    {songItems}
                </div>
            </div>
        )
    }
}

export default AlbumDetail;