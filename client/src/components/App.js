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
  const Users = {
    "Praveen":"hello@123",
    "Rishav" :"ris@2000",
    "Ankit":"ank@2000"
  }
  if (!Users[username]) {
    //User not found.
    this.setState({
      User:null,
      Error:"User not found."
    })
  }else if (Users[username] !== password) {
    //Password is incorrect.
    this.setState({
      User:null,
      Error:"Password is not correct."
    })
  }else{
    //Password is correct.
    this.setState({
      User:{Name:username},
      Error:null
    })
  }
};
  render() {
    return (
      <div className="App">
        <Header Dark={true} className="Header">App</Header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>{this.state.User?<Welcome user={this.state.User}></Welcome>:<Login handleAuth={this.handleAuth}></Login>}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
