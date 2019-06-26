import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail'
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        deletePlaylist: (id) => dispatch(deletePlaylist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);