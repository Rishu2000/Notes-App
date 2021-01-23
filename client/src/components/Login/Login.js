import React from 'react'
import LoginForm from "./LoginForm";

const Welcome = ({handleAuth,error}) => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-6">
            <LoginForm handleAuth = {handleAuth} error = {error}>
            </LoginForm>
          </div>
          <div className="col-6">Register</div>
      </div>
    </div>
  )
}

export default Welcome;
