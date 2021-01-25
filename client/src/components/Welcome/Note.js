//import React from 'react';
import {Switch,Route,withRouter} from "react-router-dom";

const Note = ({match}) => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        Select something from left.
      </Route>
      <Route path="/:NoteID">
        <pre className="border rounded bg-light">
          {JSON.stringify(match,null,2)}
        </pre>
      </Route>
    </Switch>
  )
}

export default withRouter(Note);
