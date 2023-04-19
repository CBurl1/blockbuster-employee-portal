import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/movie'>Movies</Link>
      <Link to='/rental'>Rentals</Link>
      <Link to='/client'>Clients</Link>
    </div>
  )
}

export default Header;