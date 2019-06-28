import { connect } from 'react-redux';
import ArtistIndex from './artist_index'
import { fetchArtists } from '../../../actions/artist_actions'

const mapStateToProps = (state) => {
    return {
        artists: state.entities.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtists: () => dispatch(fetchArtists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);