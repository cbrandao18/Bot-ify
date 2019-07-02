import React from 'react'
import {Link} from 'react-router-dom'

class AlbumDetail extends React.Component {

    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId)
    }

    render(){
        if (!this.props.album || !this.props.artist) return <></>

        let albumImageStyle = {
            backgroundImage: `url('${this.props.album.cover}')`
        }

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
            </div>
        )
    }
}

export default AlbumDetail;