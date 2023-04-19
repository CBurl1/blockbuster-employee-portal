import React from 'react'
import {Link} from 'react-router-dom'

function Movie() {
  return (
    <div>
      <div>
        <h1>Movies</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/rental'>Rentals</Link>
        <Link to='/client'>Clients</Link>
      </nav>
    </div>
  )
}

export default Movie;