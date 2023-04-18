import React from 'react';
import {Link} from 'react-route-dom';

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/rentals'>Rentals</Link>
      <Link to='/clients'>Clients</Link>
    </div>
  )
}

export default Header;