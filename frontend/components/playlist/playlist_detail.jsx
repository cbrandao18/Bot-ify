import React from 'react'
import SongIndexItem from '../song/song_index_item'
import { withRouter } from 'react-router';

class PlaylistDetail extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchPlaylists()
            .then(() => this.props.fetchPlaylist(this.props.match.params.playlistId))
            .then(() => this.props.fetchArtists())
            .then(() => this.setState({loading: false}))
    }

    handleDelete(){
        this.props.deletePlaylist(this.props.match.params.playlistId)
            .then(() => this.props.history.push('/browse/library/playlists'))
    }

    render(){
        if (this.state.loading){
            return (<div className="playlist-detail-wrapper"></div>)
        }

        if (!this.props.playlist){
            return (<div className="playlist-detail-wrapper"></div>)
        }

        let songItems = <></>
        if (this.props.playlist.song_ids && this.props.playlist.song_ids.length > 0) {
            songItems = this.props.playlist.song_ids.map((songId, index) => {
                let song = this.props.songs[songId];
                let album = this.props.albums[song.album_id]
                let artist = this.props.artists[album.artist_id]
                let queue = this.props.playlist.song_ids;
                return (
                    <SongIndexItem
                        key={`song-${songId}`}
                        song={song}
                        artist={artist}
                        queue={queue}
                        queueHead={index}
                        playlists={this.props.playlists}
                        addSongToPlaylist={this.props.addSongToPlaylist}
                        removeSongFromPlaylist={this.props.removeSongFromPlaylist}
                        playlistId={this.props.match.params.playlistId}
                    />
                )
            })
        }
        
        return (
            <div className="playlist-detail-wrapper">
                <div className="playlist-detail-info">
                    <div className="playlist-image"></div>
                    <h2>{this.props.playlist.title}</h2>
                    <h3>{this.props.user.username}</h3>
                    <button 
                        className="green-button playlist-btns"
                        onClick={this.handleDelete.bind(this)}>
                            Delete
                    </button>
                </div>

                <div className="tracklist-container">
                    {songItems}
                </div>
            </div>
        )
    }
}

export default withRouter(PlaylistDetail);