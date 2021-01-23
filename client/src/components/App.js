import React, { Component } from 'react';
import Header from "./Header/Header";
export default class App extends Component {
state={
  user:null
}
  render() {
    return (
      <div className="App">
        <Header Dark={true} className="Header">App</Header>
        <div className="row">
          <div className="container">
            <div className="col-12">
        <p>{this.state.user?`User Loged In as ${this.state.user.name}`:"User Loged Out"}</p>
        <button className="btn btn-primary" onClick={
          (e) => {
            e.preventDefault();
            this.setState({
              user:{name:"Rishav"}
            })
          }
        }>
          LogIn
        </button>
        <button className="btn btn-secondary ml-2" onClick={
          (e) => {
            e.preventDefault();
            this.setState({user:null})
          }
        }>LogOut</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
