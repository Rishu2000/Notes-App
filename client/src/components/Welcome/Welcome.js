import React from 'react'

const Welcome = ({user}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          Welcome {user.Name}
        </div>
      </div>
    </div>
  )
}

export default Welcome;
