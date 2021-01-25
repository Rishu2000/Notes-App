//import React from 'react';
import {Switch,Route,withRouter} from "react-router-dom";

const Note = ({currentNote,...props}) => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        Select something from left.
      </Route>
      <Route path="/:NoteID">
        <pre className="border rounded bg-light">
          {JSON.stringify(props,null,2)}
        </pre>
      </Route>
    </Switch>
  )
}

export default withRouter(Note);
