import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    let id = state.session["id"];
    return ({
        current_user: state.entities.users[id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)