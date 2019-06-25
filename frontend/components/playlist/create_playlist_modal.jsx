import React from 'react';
import {Link} from 'react-router-dom';

class CreatePlaylistModal extends React.Component{

    render(){
        return (
            <div className="playlist-modal-wrapper">
                <div className="playlist-form-wrapper">
                    <Link className="playlist-close" to={'/browse/library'}>X</Link>
                </div>
            </div>
        )
    }

}

export default CreatePlaylistModal;