import React from 'react'
import {Link} from 'react-router-dom'
import SongIndexItem from '../../song/song_index_item';

class AlbumDetail extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId)
            .then(() => this.props.fetchPlaylists())
            .then(() => this.setState({loading: false}))
    }

    render(){
        if (!this.props.album) {
            return <div className="album-detail-wrapper"></div>
        }

        if (!this.props.songs && Object.keys(this.props.songs).length === 0){
            return <div className="album-detail-wrapper"></div>
        }

        if (this.state.loading){
            return <div className="album-detail-wrapper"></div>
        }

        let albumImageStyle = {
            backgroundImage: `url('${this.props.album.cover}')`
        }
        
        let songItems = Object.keys(this.props.songs).map(songId => {
            let song = this.props.songs[songId];
            let artist = this.props.artist
            return (
                <SongIndexItem 
                    key={`song-${songId}`} 
                    song={song} 
                    artist={artist}
                    isPlaying={this.props.isPlaying}
                    setSongQueue={this.props.setSongQueue}
                    playlists={this.props.playlists}
                    addSongToPlaylist={this.props.addSongToPlaylist}
                />
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