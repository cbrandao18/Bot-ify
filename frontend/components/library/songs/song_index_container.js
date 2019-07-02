import { connect } from 'react-redux';
import SongIndex from './song_index'
import { fetchSongs } from '../../../actions/song_actions'
import { fetchArtists } from '../../../actions/artist_actions'
import { fetchAlbums } from '../../../actions/album_actions'
import { isPlaying, setSongQueue } from '../../../actions/now_playing_actions'

const mapStateToProps = (state) => {
    return {
        artists: state.entities.artists,
        albums: state.entities.albums,
        songs: state.entities.songs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: () => dispatch(fetchSongs()),
        fetchArtists: () => dispatch(fetchArtists()),
        fetchAlbums: () => dispatch(fetchAlbums()),
        isPlaying: () => dispatch(isPlaying()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);