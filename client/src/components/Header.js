import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <Link to='/' className="navbar-logo">Blockbuster Employee Portal</Link>
      <div className="navbar-menu" onClick={handleToggle}>
        <div className={`navbar-hamburger ${isOpen && 'is-active'}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-links ${isOpen && 'is-active'}`}>
        <Link to='/' className="navbar-link">Home</Link>
        <Link to='/movie' className="navbar-link">Movies</Link>
        <Link to='/rental' className="navbar-link">Rentals</Link>
        <Link to='/client' className="navbar-link">Clients</Link>
      </div>
    </nav>
  )
}

export default Header;