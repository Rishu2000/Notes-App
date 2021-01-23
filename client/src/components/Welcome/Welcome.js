import React from 'react'

function Welcome({user}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          Welcome {`${user.name}`}
        </div>
      </div>
    </div>
  )
}

export default Welcome;
