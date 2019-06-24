import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import React from 'react'

const mapStateToProps = (state) => {
  return({
    errors: state.errors.session,
    formType: "login",
    link: <Link to="/signup">Sign up for Botify</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);