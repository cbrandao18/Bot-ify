import { connect } from 'react-redux';
import AlbumDetail from './album_detail'
import { fetchAlbum } from '../../../actions/album_actions'
import { fetchArtist } from '../../../actions/artist_actions'

const mapStateToProps = (state, ownProps) => {
    let album = state.entities.albums[ownProps.match.params.albumId];
    let artist;
    if (album){
        artist = state.entities.artists[album.artist_id]
    }
    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        artist: artist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchArtist: (id) => dispatch(fetchArtist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);