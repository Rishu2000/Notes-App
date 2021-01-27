import React, { Component } from 'react';
import Header from "./Header/Header";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
export default class App extends Component {
state={
  User:null,
  Error:null
};
handleAuth = (username, password) => {

};
handleLogOut = e => {
  e.preventDefault();
  this.setState({
    Error:null,
    User:null
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
                <Login handleAuth={this.handleAuth} error={this.state.Error}></Login>
                }
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
