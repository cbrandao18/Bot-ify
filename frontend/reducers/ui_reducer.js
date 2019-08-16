
import {
    RECEIVE_SONG_QUEUE,
    IS_PLAYING,
    START_PLAYING,
    STOP_PLAYING,
    SONG_ENDED, 
    SONG_BACK
} from '../actions/now_playing_actions';

const uiReducer = (state = {isPlaying: false, queue: [], queueHead: 0}, action) => {
    switch (action.type) {
        case RECEIVE_SONG_QUEUE:
            return Object.assign({}, state, {queue: action.queue, queueHead: action.queueHead})
        case SONG_ENDED:
            return Object.assign({}, state, { queueHead: state.queueHead + 1})
        case SONG_BACK:
            let newQueueHead = state.queueHead - 1 < 0 ? 0 : state.queueHead - 1;
            return Object.assign({}, state, { queueHead: newQueueHead })
        case START_PLAYING:
            return Object.assign({}, state, { isPlaying: true })
        case STOP_PLAYING:
            return Object.assign({}, state, { isPlaying: false })
        case IS_PLAYING:
            let isPlaying = !state.isPlaying;
            if (state.queue.length === 0){
                isPlaying = false;
            }
            return Object.assign({}, state, { isPlaying: isPlaying })
        default:
            return state;
    }
}

export default uiReducer;