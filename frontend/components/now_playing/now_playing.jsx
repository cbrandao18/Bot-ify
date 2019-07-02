import React from 'react'

class NowPlaying extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="now-playing-container">
                <div className="now-playing-bar">
                    <div className="now-playing-bar-left">
                        <p>Song Info</p>
                    </div>
                    <div className="now-playing-bar-center">
                        <p>buttons to play/pause</p>
                    </div>
                    <div className="now-playing-bar-right">
                        <p>volume</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NowPlaying;