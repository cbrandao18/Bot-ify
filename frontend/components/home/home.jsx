import React from 'react'
import PlaylistIndexItems from '../library/playlist_index_items'
import ArtistAlbumItems from '../library/albums/album_index_items'
import ArtistIndexItems from '../library/artists/artist_index_items'
import { fetchPlaylists } from '../../actions/playlist_actions'
import { fetchAlbums } from '../../actions/album_actions'
import { fetchArtists } from '../../actions/artist_actions'
import { connect } from 'react-redux'

const msp = (state) => {
    let id = state.session["id"];
    return {
        current_user: state.entities.users[id],
        playlists: state.entities.playlists,
        albums: state.entities.albums,
        artists: state.entities.artists
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists())
    }
}

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.fetchPlaylists()
            .then(() => this.props.fetchAlbums())
            .then(() => this.props.fetchArtists())
            .then(() => this.setState({loading: false}))
    }

    render(){
        if (this.state.loading) return <></>
        return (
            <div className="home-container">
                <h2>{this.props.current_user.username}'s playlists</h2>
                <PlaylistIndexItems
                    playlists={this.props.playlists}
                />

                <h2>albums</h2>
                <ArtistAlbumItems
                    albums={this.props.albums}
                    artists={this.props.artists}
                />

                <h2>artists</h2>
                <ArtistIndexItems
                    artists={this.props.artists}
                />

                <h2></h2>
            </div>
        )
    }
}

export default connect(msp, mdp)(Home);