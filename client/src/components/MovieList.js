import MovieData from './MovieData'


function MovieList({movies, updateMovie}) {



    const sweetMovies = movies.map(movie => 
        <MovieData 
            key={movie.id} 
            {...movie}
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