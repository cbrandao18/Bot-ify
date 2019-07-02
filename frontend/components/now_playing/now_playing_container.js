import { connect } from 'react-redux';
import NowPlaying from './now_playing'
import { isPlaying, setSongQueue } from '../../actions/now_playing_actions'

const mapStateToProps = (state) => {
    return {
        isPlaying: state.ui.isPlaying,
        queue: state.ui.queue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isPlaying: () => dispatch(isPlaying()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);