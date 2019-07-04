import React from 'react'
import LibraryContainer from '../library/library_container';
import { connect } from 'react-redux'

const msp = (state) => {
    let id = state.session["id"];
    return {
        current_user: state.entities.users[id]
    }
}

class Home extends React.Component {
    render(){
        return (
            <div className="home-container">
                <h2>{this.props.current_user.username}'s albums</h2>
            </div>
        )
    }
}

export default connect(msp)(Home);