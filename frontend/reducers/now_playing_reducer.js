import {
    IS_PLAYING,
} from '../actions/now_playing_actions';

const isPlayingReducer = (isPlaying = false, action) => {
    switch (action.type) {
        case IS_PLAYING:
            return !isPlaying
        default:
            return isPlaying;
    }
}

export default isPlayingReducer;