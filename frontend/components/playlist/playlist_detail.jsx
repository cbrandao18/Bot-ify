import React from 'react'
import SongIndexItem from '../song/song_index_item'

class PlaylistDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPlaylist(this.props.match.params.playlistId)
    }

    handleDelete(){
        this.props.deletePlaylist(this.props.match.params.playlistId)
            .then(() => this.props.history.push('/browse/library/playlists'))
    }

    render(){
        if (!this.props.playlist){
            return (<></>)
        }

        let songItems = <></>

        if (this.props.playlist.song_ids && this.props.playlist.song_ids.length > 0) {
            songItems = this.props.playlist.song_ids.map(songId => {
                let song = this.props.songs[songId];
                let album = this.props.albums[song.album_id]
                let artist = this.props.artists[album.artist_id]
                return (
                    <SongIndexItem
                        key={`song-${songId}`}
                        song={song}
                        artist={artist}
                        isPlaying={this.props.isPlaying}
                        setSongQueue={this.props.setSongQueue}
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

export default PlaylistDetail;