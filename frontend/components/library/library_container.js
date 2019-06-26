import { connect } from 'react-redux';
import Library from './library'
import { fetchPlaylists } from '../../actions/playlist_actions'

const mapStateToProps = (state) => {
    return {
        playlists: state.entities.playlists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);