import React from 'react';
import {Link} from 'react-router-dom';

function Rental() {
  return (
    <div>
      <div>
        <h1>Rentals</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movie'>Movies</Link>
        <Link to='/client'>Clients</Link>
      </nav>
    </div>
  )
}

export default Rental;
