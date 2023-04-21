import MovieData from './MovieData'


function MovieList({movies, updateMovie, removeMovieFromState}) {

    const sweetMovies = movies.map(movie => 
        <MovieData 
            key={movie.id} 
            {...movie}
            removeMovieFromState={removeMovieFromState}
            updateMovie = {updateMovie}
        />
    )
    
    return(
        <div>
            {sweetMovies}
        </div>
    )
}


export default MovieList