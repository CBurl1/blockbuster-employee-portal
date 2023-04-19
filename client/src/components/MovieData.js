


function MovieData({cost, name, rating}) {

    return (
        <div>
            <h3 className='text-blue-600'>Name: {name}</h3>
            <h4>Rating: {rating}</h4>
            <h5 className='text-blue-600'>Cost: {cost}</h5>
        </div>
    )
}


export default MovieData