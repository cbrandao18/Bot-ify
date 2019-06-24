import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () =>{
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}


export const login = user => {
  return dispatch => {
    return ApiUtil.login(user).then(user => {
        return dispatch(receiveCurrentUser(user))
    }, err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
  }
}

export const logout = () => {
  return dispatch => {
      return ApiUtil.logout().then(res => dispatch(logoutCurrentUser()) )
  }
}

export const signup = (user) => dispatch => {
    return (
        ApiUtil.signUp(user).then(user => {
            return dispatch(receiveCurrentUser(user))
        }, err => {
          return dispatch(receiveErrors(err.responseJSON))
        })
    )
}