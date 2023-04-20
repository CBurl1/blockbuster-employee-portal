import MovieData from './MovieData'


function MovieList({movies}) {
    console.log(movies)
    const sweetMovies = movies.map((movie) => {
        return (<MovieData 
            key={movie.id} 
            {...movie}
            // name={movie.name}
            // cost={movie.cost}
            // rating={movie.rating}
            // index = {index}
        />
    )})
         
    return(
        <div>
            {sweetMovies}
        </div>
    )
}


export default MovieList