import { connect } from 'react-redux';
import ArtistDetail from './artist_detail'
import { fetchArtist } from '../../../actions/artist_actions'

const mapStateToProps = (state, ownProps) => {
    let artist = state.entities.artists[ownProps.match.params.artistId];
    let artistsAlbums;
    if (artist){
        let albums = state.entities.albums;
        artistsAlbums = Object.keys(albums).map(albumId => {
            if (albums[albumId].artist_id === artist.id){
                return albums[albumId] 
            }
        })
    }

    return {
        artist: artist,
        albums: artistsAlbums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtist: (id) => dispatch(fetchArtist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);