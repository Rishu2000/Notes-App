import React, { Component } from 'react';
import List from "./list";
import WelcomeHeader from "./WelcomeHeader";
import Note from "./Note";
class Welcome extends Component {
  state = {
    Notes:["List 1","List 2","List 3"],
    CurrentNote:null
  }
  setCurrentNote = CurrentNote => {
    this.setState({CurrentNote})
  }
  render() {
  const {user,handleLogOut} = this.props;
    return (
    <div className="container">
      <WelcomeHeader user={user} handleLogOut={handleLogOut}/>
      <div className="row">
        <div className="col-4">
            <List items={this.state.Notes} setCurrentNote={this.setCurrentNote} currentNote={this.state.CurrentNote} />
        </div>
        <div className="col-8">
          <Note currentNote={this.state.CurrentNote}/>
          </div>
      </div>
    </div>
    )
  }
}

export default Welcome;