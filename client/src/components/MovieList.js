import MovieData from './MovieData'



function MovieList({movies}) {

    const sweetMovies = movies.map(movie => 
        <MovieData 
            key={movie.id} 
            {...movie}
        />
    )

    return(
        <div>
            {sweetMovies}
        </div>
    )
}


export default MovieList