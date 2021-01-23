import React from 'react'
import LoginForm from "./LoginForm";

const Welcome = ({handleAuth}) => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-6">
            <LoginForm handleAuth = {handleAuth}>
            </LoginForm>
          </div>
          <div className="col-6">Register</div>
      </div>
    </div>
  )
}

export default Welcome;
