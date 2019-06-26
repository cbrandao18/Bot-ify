import React from 'react';
import {Link} from 'react-router-dom';

class CreatePlaylistModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            owner_id: props.currentUserId,
            title: ""
        }
    }

    updateTitle(){
        return (e) => {
            this.setState({title: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPlaylist(this.state);
        this.props.history.push('/browse/library');
    }

    render(){
        return (
            <div className="playlist-modal-wrapper">
                <div className="playlist-form-wrapper">
                    <div className="playlist-close-wrapper">
                        <Link className="playlist-close" to={'/browse/library'}>X</Link>
                    </div>

                    <h1>Create new playlist</h1>
                    <form className="new-playlist-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="playlist-input-form-wrapper">
                        <div className="input-box">
                            <div className="content-spacing">
                                <h4 className="inputBox-label">Playlist Name</h4>
                                    <input
                                        type="text"
                                        className="inputBox-input"
                                        placeholder="New Playlist"
                                        value={this.state.title}
                                        onChange={this.updateTitle()}>
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="create-playlist-btns">
                            <button className="green-button create-btn">Create</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default CreatePlaylistModal;