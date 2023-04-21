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

  const updateMovie = freshMovieObj => {
    setMovies( movies.map( mObj => {
      if(mObj.id !== freshMovieObj.id ){
        return mObj
      } else {
        return freshMovieObj
      }
    } ) )

  }

  const removeMovieFromState = goodbyeMovie => {
    const filteredArray = movies.filter(goodbyeMovieObj => {
      return goodbyeMovieObj.id !== goodbyeMovie
    })
    setMovies(filteredArray)
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  

  return (
      <div>
        <h1>Movies</h1>
        <NewMovie addMovieToState={addMovieToState}/>
        <MovieList 
        removeMovieFromState= {removeMovieFromState} 
        updateMovie= {updateMovie} 
        movies={movies}
        />
      </div>
  )
}

export default Movie;