import React from 'react';
import {Link} from 'react-router-dom';

class CreatePlaylistModal extends React.Component{

    render(){
        return (
            <div className="playlist-modal-wrapper">
                <div className="playlist-form-wrapper">
                    <div className="playlist-close-wrapper">
                        <Link className="playlist-close" to={'/browse/library'}>X</Link>
                    </div>
                    <h1>Create new playlist</h1>
                    <div className="playlist-input-form-wrapper">
                        <div className="input-box">
                            <div className="content-spacing">
                                <h4 class="inputBox-label">Playlist Name</h4>
                                <input type="text" class="inputBox-input" placeholder="New Playlist" value=""></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreatePlaylistModal;