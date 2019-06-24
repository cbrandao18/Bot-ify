import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({current_user, logout}) => {
  
  if (current_user) {
    return (
      <div>
        <h2>Hi {current_user.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
      
    )
  } else {
    return(
      <div>
        <Link to="/login"><p>Login</p></Link>
        <Link to="/signup"><p>Signup</p></Link>
      </div>
      
    )
  }
  
}

export default Greeting;