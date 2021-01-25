import React from 'react'

const WelcomeHeader = ({user,handleLogOut}) => {
  return (
      <div className="row">
        <div className="col-12">
          <p>Welcome {user.Name}</p>
          <button className="btn btn-warning mb-3" onClick={handleLogOut}>Logout</button>
        </div>
      </div>
  )
}

export default WelcomeHeader;
