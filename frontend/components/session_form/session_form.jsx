import React from 'react'

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
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
  }

  render(){
    let footerText;
    if (this.props.formType === 'login'){
      footerText = <p>Don't have an account?</p>
    } else {
      footerText = <p>Already have an account?</p >
    }

    return(
      <div>
        <p>{this.props.formType}</p>
        <p>{this.props.errors}</p>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.update("username")} type="text" value={this.state.username}
            placeholder="Username" />
          <input onChange={this.update("password")} type="password" value={this.state.password}
            placeholder="Password" />
          <button>{ this.props.formType }</button>
        </form>

        <div>
          {footerText}
          {this.props.link}
        </div>
      </div>
    )
   
  }
}

export default SessionForm;