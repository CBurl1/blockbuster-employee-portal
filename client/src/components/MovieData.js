


function MovieData({cost, name, rating}) {

    console.log(cost, name, rating)
    return (
        <div className>
            <h3>Name: {name}</h3>
            <h4>Rating: {rating}</h4>
            <h5>Cost: {cost}</h5>
        </div>
    )
}


export default MovieData