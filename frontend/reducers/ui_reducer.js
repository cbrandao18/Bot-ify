
import {
    RECEIVE_SONG_QUEUE,
    IS_PLAYING
} from '../actions/now_playing_actions';

const uiReducer = (state = {isPlaying: false, queue: []}, action) => {
    switch (action.type) {
        case RECEIVE_SONG_QUEUE:
            return Object.assign({}, state, {queue: action.queue})
        case IS_PLAYING:
            return Object.assign({}, state, {isPlaying: !state.isPlaying})
        default:
            return state;
    }
}

export default uiReducer;