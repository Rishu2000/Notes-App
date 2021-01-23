import React, { Component } from 'react';
import Header from "./Header/Header";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Dark={true} className="Header">App</Header>
      </div>
    )
  }
}
