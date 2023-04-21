import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MovieList from './MovieList'
import NewMovie from './NewMovie';

function Movie() {

  const [movies, setMovies] = useState([])
  
  const addMovieToState = newMovieObj => {
    setMovies(...movies, newMovieObj)
  }

  const deleteMovieFromState = deleteMovie => {
    const movieArray = movies.filter(deleteMovieObj => {
      return deleteMovieObj.id !== deleteMovie
    })
    setMovies(movieArray)
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);
  

  return (
    <div>
      <div>
        <h1>Movies</h1>
        <NewMovie addMovieToState={addMovieToState}/>
        <MovieList movies={movies} deleteMovieFromState={deleteMovieFromState}/>
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