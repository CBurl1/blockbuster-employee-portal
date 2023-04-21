import MovieData from './MovieData'


function MovieList({movies, deleteMovieFromState}) {

    console.log(movies)
    const sweetMovies = movies.map(movie => 
        <MovieData 
            key={movie.id} 
            {...movie}
            deleteMovieFromState={deleteMovieFromState}
        />
    )
    
    return(
        <div>
            {sweetMovies}
        </div>
    )
}


export default MovieList