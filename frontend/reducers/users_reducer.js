import merge from 'lodash/merge'
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_PLAYLIST} from "../actions/playlist_actions"

const usersReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.payload.user.id]: action.payload.user})
        default:
            return state;
    }
}
 
export default usersReducer