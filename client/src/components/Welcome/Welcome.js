import React, { Component } from 'react';
import {Route} from "react-router-dom";
import List from "./list";
import {getNotes} from "../../services/note";
import WelcomeHeader from "./WelcomeHeader";
import Note from "./Note";
class Welcome extends Component {
  state = {
    Notes:[]
  }
  componentDidMount() {
    getNotes().then(res => {
      this.setState({
        Notes: res.data
      })
    })
  }
  render() {
  const {user,handleLogOut} = this.props;
    return (
    <div className="container">
      <WelcomeHeader user={user} handleLogOut={handleLogOut}/>
      <div className="row">
      <Route path={["/:NoteID","/"]}>
        <div className="col-4">
            <List items={this.state.Notes}/>
        </div>
        <div className="col-8">
          <Note Notes={this.state.Notes}/>
        </div>
      </Route>
      </div>
    </div>
    )
  }
}

export default Welcome;