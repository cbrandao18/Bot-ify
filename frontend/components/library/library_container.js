import { connect } from 'react-redux';
import Library from './library'

const mapStateToProps = (state) => {
    return {
        playlists: state.entities.playlists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);