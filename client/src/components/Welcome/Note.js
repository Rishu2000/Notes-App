//import React from 'react';
import {Switch,Route} from "react-router-dom";
import NoteContent from "./NoteContent";
import NoteWelcome from "./NoteWelcome";

const Note = ({match,Notes}) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={NoteWelcome}/>
      <Route path="/:NoteID" render={rp => <NoteContent {...rp} Notes={Notes}/>}/>
    </Switch>
  )
}

export default Note;
