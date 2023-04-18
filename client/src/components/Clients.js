import React from 'react'

function Clients() {
  return (
    <div>
      <div>
        <h1>Clients</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/rentals'>Rentals</Link>
      </nav>
    </div>
  )
}

export default Clients
