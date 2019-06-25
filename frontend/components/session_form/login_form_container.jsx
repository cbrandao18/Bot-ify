import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, clearErrors} from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import React from 'react'

const mapStateToProps = (state) => {
  return({
    errors: state.errors.session,
    formType: "Login",
    link: <Link to="/signup">Sign up</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);