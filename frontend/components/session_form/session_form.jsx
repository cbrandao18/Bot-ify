import React from 'react'
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field){
    return e => this.setState({ [field]: e.target.value })
  }
 
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => {
      this.props.history.push('/browse/featured')
    })
  }

  loginAsRobot(e) {
    let action = this.props.formType === 'Sign up' ? this.props.loginDemo : this.props.processForm
    action({ username: 'botuser', password: 'robots' }).then(() => {
      this.props.history.push('/browse/featured')
    })
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  render(){
    let footerText;
    if (this.props.formType === 'login'){
      footerText = <p>Don't have an account?</p>
    } else {
      footerText = <p>Already have an account?</p>
    }

    let errors = Object.keys(this.props.errors).map(errorKey => {
      return <p>{this.props.errors[errorKey]}</p>
    })

    return(
      <div className="session">

        <div className="session-form-logo-header">
          <a href="/#">
            <div className="black-logo"></div>
            <p>Botify</p>
          </a>
        </div>
        <div className="session-form-wrapper">
          <p>{this.props.formType}</p>
          <div className="session-errors">{errors}</div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.update("username")} 
              type="text" 
              value={this.state.username}
              placeholder="Username" />
            <input 
              onChange={this.update("password")} 
              type="password" value={this.state.password}
              placeholder="Password" />
            <button 
              className="green-button green-button-session">
              {this.props.formType}
            </button>
          </form>

          <div className="form-footer">
            {footerText}
            {this.props.link}
          </div>
          
          <div className="demo-login">
            <a onClick={this.loginAsRobot.bind(this)}>Login as demo user</a>
          </div>
        </div>
      </div>
    )
   
  }
}

export default withRouter(SessionForm);