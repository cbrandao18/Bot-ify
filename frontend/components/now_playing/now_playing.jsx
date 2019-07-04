import React from 'react'
import {Link} from 'react-router-dom'

class NowPlaying extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(){
        let musicPlayer = this.refs.musicPlayer;

        if (!this.props.currentSong.album_cover){
            if (this.props.queue.length > 0){
                this.props.fetchSong(this.props.queue[0])
            }
        }

        if (Object.keys(this.props.currentSong).length > 0){
            this.props.fetchAlbum(this.props.currentSong.album_id)
        }

        if (Object.keys(this.props.currentAlbum).length > 0) {
            this.props.fetchArtist(this.props.currentAlbum.artist_id)
        }
    }


    togglePlayPause(){
        this.props.isPlaying()
        // if (!this.props.isPlayingBool) {
        //     this.refs.musicPlayer.play();
        // } else {
        //     this.refs.musicPlayer.pause();
        // }
    }

    render() {
        if (!this.props.currentSong) return <></>
        let songInfo;
        if (this.props.currentSong.title){
            let albumImageStyle = {
                backgroundImage: `url('${this.props.currentAlbum.cover}')`
            }

            songInfo = (
                <div className="now-playing">
                    <div className="now-playing-album-cover" style={albumImageStyle}></div>
                    <div className="track-info ellipsis-one-line">
                        <span className="track-name">{this.props.currentSong.title}</span>
                        <Link to={`/artists/${this.props.currentArtist.id}`}>
                            <span className="album-artist">{this.props.currentArtist.name}</span>
                        </Link>
                    </div>
                </div>
            )
        }

        let playPause = this.props.isPlayingBool ? "fas fa-pause control-button" : "far fa-play-circle control-button";
        // src = { this.props.currentSong.track }
        // if (this.props.isPlayingBool && !this.refs.musicPlayer.)
        if (this.refs.musicPlayer){
            if (this.props.currentSong.track && this.refs.musicPlayer.src != this.props.currentSong.track){
                this.refs.musicPlayer.src = this.props.currentSong.track;
            }
    
            if (this.props.isPlayingBool && !this.refs.musicPlayer.playing){
                this.refs.musicPlayer.play().catch((e) => {
                    console.log(e)
                })
            } else if (!this.props.isPlayingBool && this.refs.musicPlayer.playing){
                this.refs.musicPlayer.pause();
            }
        }


        console.log(this.props)
        return (
            <div className="now-playing-container">
                <div className="now-playing-bar">
                    <div className="now-playing-bar-left">
                        {songInfo}
                    </div>
                    <div className="now-playing-bar-center">
                        <div className="player-controls">
                            <div className="play-control-buttons">
                                <button><i className="fas fa-random control-button"></i></button>
                                <button><i className="fas fa-backward control-button"></i></button>
                                <button
                                    onClick={this.togglePlayPause.bind(this)}
                                ><i className={playPause}></i></button>
                                <button><i className="fas fa-forward control-button"></i></button>
                                <button><i className="fas fa-redo-alt control-button"></i></button>
                            </div>
                            <div className="playback-bar">
                                <div className="playback-bar-progress-time"></div>
                                <div className="progress-bar">
                                    <div className="middle-align progress-bar-bg"></div>
                                </div>
                                <div className="playback-bar-progress-time"></div>
                            </div>

                        </div>
                    </div>
                    <div className="now-playing-bar-right">
                        <i className="fas fa-volume-down"></i>
                        <div className="progress-bar">
                            <div className="middle-align progress-bar-bg"></div>
                        </div>
                    </div>
                </div>

                {/* Audio */}
                <audio ref="musicPlayer"></audio>
            </div>
        )
    }
}

export default NowPlaying;