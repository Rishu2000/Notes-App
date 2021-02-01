import React, { Component } from 'react';
import { AuthUser,RegUser,LogOutUser } from '../services/User';
import Header from "./Header/Header";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
export default class App extends Component {
state={
  User:null,
  AuthError:null,
  RegError:null,
  RegSuccess:null
};
handleAuth = (username, password) => {
  AuthUser(username,password)
  .then(res => {
    this.setState({
      User:res.data.Message,
      AuthError:null,
      RegError:null
    })
  })
  .catch(error => {
    this.setState({
      User:null,
      RegError:null,
      AuthError:error.response.data.Message
    })
  });
};
handleReg = (username, password) => {
  RegUser(username,password)
  .then(res => {
    this.setState({
      User:null,
      RegError:null,
      AuthError:null,
      RegSuccess:res.data.Message
    })
  })
  .catch(error => {
    this.setState({
      User:null,
      RegError:error.response.data.Message,
      AuthError:null,
      RegSuccess:null
    })
  });
};
handleLogOut = e => {
  e.preventDefault();
  LogOutUser().then(() => {
    this.setState({
    AuthError:null,
    User:null
  })
})
};
  render() {
    return (
      <div className="App">
        <Header Dark={true} className="Header">App</Header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                {this.state.User?
                <Welcome user={this.state.User} handleLogOut={this.handleLogOut}></Welcome>:
                <Login handleAuth={this.handleAuth} authError={this.state.AuthError} handleReg={this.handleReg} regError={this.state.RegError} regSuccess={this.state.RegSuccess}></Login>
                }
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
