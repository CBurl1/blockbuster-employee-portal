import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Movie() {


  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);


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