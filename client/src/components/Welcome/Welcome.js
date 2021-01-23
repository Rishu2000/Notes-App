import React from 'react'

const Welcome = ({user,handleLogOut}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Welcome {user.Name}</p>
          <button className="btn btn-warning" onClick={handleLogOut}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
