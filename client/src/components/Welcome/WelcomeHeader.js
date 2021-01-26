import React from 'react';
import {Link} from "react-router-dom";

const WelcomeHeader = ({user,handleLogOut}) => {
  return (
      <div className="row">
        <div className="col-12">
          <p>Welcome {user.Name}</p>
          <Link to="/" className = "btn btn-primary mb-3 mr-3">Home</Link>
          <button className="btn btn-warning mb-3" onClick={handleLogOut}>Logout</button>
        </div>
      </div>
  )
}

export default WelcomeHeader;
