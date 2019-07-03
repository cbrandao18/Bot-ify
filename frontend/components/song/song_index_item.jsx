import React from 'react'
import {Link} from 'react-router-dom'
import SecondsToMins from './secondsToMins'

class SongIndexItem extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            dropdownActive: false
        }
        this.toggleAddPlaylistDropdown = this.toggleAddPlaylistDropdown.bind(this)
    }

    togglePlayAndSetQueue(){
        this.props.setSongQueue([this.props.song.id])
        this.props.isPlaying()
    }

    toggleAddPlaylistDropdown(){
        this.setState({ dropdownActive: !this.state.dropdownActive})

    }

    handleAddSong(data){
        this.props.addSongToPlaylist(data);
        this.toggleAddPlaylistDropdown();
    }

    render(){

        let dropdownClass = this.state.dropdownActive ? "dropdown-content active" : "dropdown-content";
        
        let playlistItems = Object.keys(this.props.playlists).map(playlistId => {
            let data = {song_id: this.props.song.id, playlist_id: playlistId};
            return <button 
                        key={`playlist-${playlistId}`}
                        onClick={this.handleAddSong.bind(this, data)}>
                            {this.props.playlists[playlistId].title}
                    </button>
        })

        return (
            <div className="tracklist-row">
                
                {/* icons */}
                <div className="tracklist-col position-outer">
                    <div className="tracklist-music-icon tracklist-top-align">
                        <button>
                            <i className="fas tracklist-icon"></i>
                        </button>
                    </div>
                </div>

                {/* Song Info */}
                <div className="tracklist-col name">
                    <div className="track-name-wrapper tracklist-top-align">
                        <div className="tracklist-name ellipsis-one-line">
                            {this.props.song.title}
                        </div>
                        <div className="second-line">
                            <Link to={`/artists/${this.props.artist.id}`}>
                                <p className="album-artist">{this.props.artist.name}</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="tracklist-col add">
                    <div className="tracklist-top-align">
                        <button onClick={this.toggleAddPlaylistDropdown}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="dropdown">
                    <div className={dropdownClass}>
                        <button 
                            onClick={this.toggleAddPlaylistDropdown}
                            className="dropdown-close">x</button>
                        <h4>Add to Playlist</h4>
                        {playlistItems}
                    </div>
                </div>

                {/* Song duration */}
                <div className="tracklist-col tracklist-col-duration">
                    <div className="tracklist-duration tracklist-top-align">
                        <SecondsToMins totalSeconds={this.props.song.length}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongIndexItem;