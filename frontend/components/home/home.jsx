import React from 'react'
import PlaylistIndexItems from '../library/playlist_index_items'
import { fetchPlaylists } from '../../actions/playlist_actions'
import { connect } from 'react-redux'

const msp = (state) => {
    let id = state.session["id"];
    return {
        current_user: state.entities.users[id],
        playlists: state.entities.playlists
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    }
}

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render(){
        return (
            <div className="home-container">
                <h2>{this.props.current_user.username}'s playlists</h2>
                <PlaylistIndexItems
                    playlists={this.props.playlists}
                />

                <h2>albums</h2>
            </div>
        )
    }
}

export default connect(msp, mdp)(Home);