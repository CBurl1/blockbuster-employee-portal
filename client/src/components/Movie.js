import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MovieList from './MovieList'

function Movie() {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);
  


  return (
    <div>
      <div>
        <h1>Movies</h1>
        <MovieList movies = {movies}/>
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