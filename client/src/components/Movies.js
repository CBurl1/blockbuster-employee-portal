import React from 'react'

function Movies() {
  return (
    <div>
      <div>
        <h1>Movies</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/rentals'>Rentals</Link>
        <Link to='/clients'>Clients</Link>
      </nav>
    </div>
  )
}

export default Movies;