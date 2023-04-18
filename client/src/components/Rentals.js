import React from 'react';
import {Link} from 'react-router-dom';

function Rentals() {
  return (
    <div>
      <div>
        <h1>Rentals</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/clients'>Clients</Link>
      </nav>
    </div>
  )
}

export default Rentals;
