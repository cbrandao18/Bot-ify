import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="splash-main">
                <div className="splash-top-nav">
                    <div>
                        <a href="#">
                            <div className="white-logo"></div>
                            <p>Botify</p>
                        </a>
                    </div>
                    <div className="splash-nav-links">
                        {/* <span>Developed by: </span>
                        <a href="https://github.com/cbrandao18">Christie Brandao</a>
                        <span> | </span> */}
                        <a href="#/signup">Sign Up</a>
                        <a href="#/login">Login</a>
                    </div>
                </div>

                <div className="splash-text-content">
                    <h1>Music for <p className="strikeout">everyone</p> robots.</h1>
                    <h2>Millions of songs for the robots among us. No credit card needed.</h2>
                    <a className="green-button-hero" href="#/signup">GET BOTIFY FREE 🤖 </a>
                </div>

                <div className="splash-footer">
                    <div className="splash-footer-content">
                        <div className="white-logo"></div>
                        <p>Botify</p>
                    </div>
                    <div className="column">
                        <p className="col-header">Technologies</p>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Ruby on Rails</li>
                            <li>Postgres</li>
                            <li>Heroku</li>
                            <li>Sass</li>
                        </ul>
                    </div>
                    <div className="column-big">
                        <p className="col-header">About Me</p>
                        <p className="about-me-text">
                            Developed by: Christie Brandao
                        </p>
                        <ul>
                            <li>
                                <a href="https://github.com/cbrandao18" target="_blank">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/christiebrandao/" target="_blank">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;