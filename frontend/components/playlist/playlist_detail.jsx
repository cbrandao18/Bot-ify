import React from 'react'

class PlaylistDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPlaylist(this.props.match.params.playlistId)
    }

    render(){
        let title = "";
        let owner = "";
        if (this.props.playlist){
            title = this.props.playlist.title
            owner = this.props.playlist.owner_id
        }
        return (
            <div className="playlist-detail-wrapper">
                <div className="playlist-detail-info">
                    <div className="playlist-image"></div>
                    <h2>{title}</h2>
                    <h3>{owner}</h3>
                    <button className="green-button playlist-btns">Delete</button>
                </div>

                <div className="song-list">


                </div>
            </div>
        )
    }
}

export default PlaylistDetail;