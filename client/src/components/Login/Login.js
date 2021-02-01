import React from 'react'
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";

const Login = ({handleAuth,authError,handleReg,regError,regSuccess}) => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-6">
            <LoginForm handleAuth = {handleAuth} error = {authError}>
            </LoginForm>
          </div>
          <div className="col-6">
            <RegForm handleReg = {handleReg} regError = {regError} regSuccess = {regSuccess}/>
          </div>
      </div>
    </div>
  )
}

export default Login;
