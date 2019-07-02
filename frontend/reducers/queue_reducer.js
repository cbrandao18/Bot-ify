import {
    RECEIVE_SONG_QUEUE,
} from '../actions/now_playing_actions';

const queueReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SONG_QUEUE:
            return action.queue
        default:
            return state;
    }
}

export default queueReducer;