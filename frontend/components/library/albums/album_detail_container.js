import { connect } from 'react-redux';
import AlbumDetail from './album_detail'
import { fetchAlbum } from '../../../actions/album_actions'
import { fetchArtist } from '../../../actions/artist_actions'

const mapStateToProps = (state, ownProps) => {
    let album = state.entities.albums[ownProps.match.params.albumId];
    let artist;
    let songObj;

    if (album){
        artist = state.entities.artists[album.artist_id];
        songObj = Object.assign({}, state.entities.songs)

        Object.keys(state.entities.songs).map(songId => {
            if (state.entities.songs[songId].album_id !== album.id) {
                delete songObj[songId];
            }
        })
    }
    
    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        artist: artist,
        songs: songObj
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchArtist: (id) => dispatch(fetchArtist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);