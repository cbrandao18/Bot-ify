import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';
import { Link } from 'react-router-dom'
import React from 'react'

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
    formType: "Sign up",
    link: <Link to="/login">Log in</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);