import React from 'react'

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

                <div className="song-list">


                </div>
            </div>
        )
    }
}

export default PlaylistDetail;