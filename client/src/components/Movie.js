import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MovieList from './MovieList'
import NewMovie from './NewMovie';
// import MovieData from './MovieData'

function Movie() {

  const [movies, setMovies] = useState([])
  
  const addMovieToState = newMovieObj => {
    setMovies(...movies, newMovieObj)
  }


  useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
      .then(r => r.json())
      .then(moviedata => setMovies(moviedata));
  }, []);


  // const sweetMovies = movies.map((movie, index) => {
  //   return (<MovieData 
  //       key={movie.id} 
  //       name={movie.name}
  //       cost={movie.cost}
  //       rating={movie.rating}
  //       index = {index}
  //   />
  // )})
     
  return (
    <div>
      <div>
        <h1>Movies</h1>
        <NewMovie addMovieToState={addMovieToState}/>
        <MovieList movies={movies}/>
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