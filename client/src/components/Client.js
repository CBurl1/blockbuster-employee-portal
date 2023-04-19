import React from 'react'
import {Link} from 'react-router-dom'

function Client() {
  return (
    <div>
      <div>
        <h1>Clients</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movie'>Movies</Link>
        <Link to='/rental'>Rentals</Link>
      </nav>
    </div>
  )
}

export default Client;
