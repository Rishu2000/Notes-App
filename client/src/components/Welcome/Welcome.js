import React, { Component } from 'react'
import List from "./list";
class Welcome extends Component {
  state = {
    Notes:["List 1","List 2","List 3"],
    CurrentNote:""
  }
  setCurrentNote = CurrentNote => {
    this.setState({CurrentNote})
  }
  render() {
  const {user,handleLogOut} = this.props;
    return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Welcome {user.Name}</p>
          <button className="btn btn-warning mb-3" onClick={handleLogOut}>Logout</button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
            <List items={this.state.Notes} setCurrentNote={this.setCurrentNote} currentNote={this.state.CurrentNote} />
        </div>
        <div className="col-8">Notes Description</div>
      </div>
    </div>
    )
  }
}

export default Welcome;