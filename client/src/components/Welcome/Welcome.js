import React from 'react';
import List from "./list";

const Welcome = ({user,handleLogOut}) => {
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
            <List items={["List 1","List 2","List 3"]}/>
        </div>
        <div className="col-8">Notes Description</div>
      </div>
    </div>
  )
}

export default Welcome;
