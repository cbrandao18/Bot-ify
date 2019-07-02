import React from 'react'
import {Link} from 'react-router-dom'

class SongIndexItem extends React.Component {

    togglePlayAndSetQueue(){
        this.props.setSongQueue([this.props.song.id])
        this.props.isPlaying()
    }

    render(){
        return (
            <div className="tracklist-row">
                
                {/* icons */}
                <div className="tracklist-col position-outer">
                    <div className="tracklist-music-icon tracklist-top-align">
                        <button onClick={this.togglePlayAndSetQueue.bind(this)}>
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

                {/* Song duration */}
                <div className="tracklist-col tracklist-col-duration">
                    <div className="tracklist-duration tracklist-top-align">
                        <span>{this.props.song.length}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongIndexItem;