import React from 'react'

class ArtistDetail extends React.Component {

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId)
    }

    render(){
        if (!this.props.artist){
            return <></>
        }
        return (
            <div className="artist-detail-container">
                <div className="library-index-header">
                    <div className="artist-detail-gradient">
                    </div>
                    <h2>{this.props.artist.name}</h2>
                </div>
                
                <div className="artist-detail">

                </div>
            </div>
        )
    }
}

export default ArtistDetail;