import React from 'react'
import {Link} from 'react-router-dom'
import SecsToMins from '../song/secondsToMins'

class NowPlaying extends React.Component {
    constructor(props) {
        super(props)
        window.debugAudioObj = this.audioObj = new Audio();

        this.state = {
            duration: 0,
            currTime: 0,
            currProgress: 0,
            volume: 1
        }
        this.loading = false;
    }

    componentDidMount(){

        if (Object.keys(this.props.currentSong).length > 0){
            this.props.fetchAlbum(this.props.currentSong.album_id)
        }

        if (Object.keys(this.props.currentAlbum).length > 0) {
            this.props.fetchArtist(this.props.currentAlbum.artist_id)
        }

        this.audioObj.addEventListener('timeupdate', this.updateProgressTime.bind(this))
        this.audioObj.addEventListener('ended', () => {
            this.props.songEnded()
        })
        this.audioObj.addEventListener('volumechange', this.updateVolume.bind(this))
    }

    componentDidUpdate() {
        if (!this.props.currentSong.track && !this.loading) {
            this.loading = true;
            if (this.props.queue.length > 0) {
                this.props.fetchSong(this.props.queue[this.props.queueHead])
            }
        }
    }

    updateProgressTime(){
        if (this.audioObj && !Number.isNaN(this.audioObj.duration)){
            let duration = Math.round(this.audioObj.duration);
            let currTime = Math.round(this.audioObj.currentTime);
            let currProgress = (currTime * 100) / duration;
            this.setState({duration, currTime, currProgress})
        }
    }

    togglePlayPause(){
        this.props.isPlaying()
    }

    next() {
        this.props.songEnded();
        if (this.props.queue.length > 0) {
            this.props.fetchSong(this.props.queue[this.props.queueHead])
            this.audioObj.src = this.props.currentSong.track;
        }
    }

    back(){
        this.props.skipBackOneSong();
        if (this.props.queue.length > 0) {
            this.props.fetchSong(this.props.queue[this.props.queueHead])
            this.audioObj.src = this.props.currentSong.track;
        }
    }

    updateVolume(){
        this.setState({volume: this.audioObj.volume})
        console.log(this.audioObj.volume)
    }

    setVolume(e){
        console.log(e.clientX)
        console.log(this);
    }

    render() {

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

        if (this.audioObj && this.audioObj.readyState > -1){

            if (!this.props.isPlayingBool && !this.audioObj.paused) {
                this.audioObj.pause();
            } else {

                if (this.props.currentSong.track && !this.audioObj.src.includes(this.props.currentSong.track)){
                    this.audioObj.src = this.props.currentSong.track;
                }
        
                if (this.props.isPlayingBool && this.audioObj.paused){
                    this.loading = false;
                    this.audioObj.play()
                    .catch(err => {})
                } 
            }

        }

        let progressBarFillStyle = { width: `${this.state.currProgress}%` }
        let volumeBarFillStyle = { width: `${this.state.volume * 100}%`}

        return (
            <div className="now-playing-container">
                <div className="now-playing-bar">
                    <div className="now-playing-bar-left">
                        {songInfo}
                    </div>
                    <div className="now-playing-bar-center">
                        <div className="player-controls">
                            <div className="play-control-buttons">
                                {/* <button><i className="fas fa-random control-button"></i></button> */}
                                <button onClick={this.back.bind(this)}><i className="fas fa-backward control-button"></i></button>
                                <button
                                    onClick={this.togglePlayPause.bind(this)}
                                ><i className={playPause}></i></button>
                                <button onClick={this.next.bind(this)}><i className="fas fa-forward control-button"></i></button>
                                {/* <button><i className="fas fa-redo-alt control-button"></i></button> */}
                            </div>
                            <div className="playback-bar">
                                <div className="playback-bar-progress-time">
                                    <SecsToMins totalSeconds={this.state.currTime}/>
                                </div>
                                <div className="progress-bar">
                                    <div className="middle-align progress-bar-bg">
                                        <div className="progress-bar__fg_wrapper">
                                            <div className="progress-bar__fg" style={progressBarFillStyle}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="playback-bar-progress-time">
                                    <SecsToMins totalSeconds={this.state.duration} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="now-playing-bar-right">
                        <i className="fas fa-volume-down"></i>
                        <div className="progress-bar" onClick={ (e) => this.setVolume(e)}>
                            <div className="middle-align progress-bar-bg">
                                <div className="progress-bar__fg_wrapper">
                                    <div className="progress-bar__fg" style={volumeBarFillStyle}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default NowPlaying;