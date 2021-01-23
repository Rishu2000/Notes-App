import React, { Component } from 'react';
import Header from "./Header/Header";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
export default class App extends Component {
state={
  user:{}
}
  render() {
    return (
      <div className="App">
        <Header Dark={true} className="Header">App</Header>
        <div className="row">
          <div className="container">
            <div className="col-12">
        <p>{this.state.user?<Welcome></Welcome>:<Login></Login>}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
