import {useState} from 'react'

function NewMovie({addMovieToState}) {

    const [newName, setName ] = useState('')
    const [newCost, setCost] = useState('')
    const [newRating, setRating] = useState('')

    const handleName = e => setName(e.target.value)
    const handleCost = e => setCost(e.target.value)
    const handleRating = e => setRating(e.target.value)
    
    const handleSubmit = e => {
        e.preventDefault()

        const newMovie = {
            name: newName,
            cost: newCost,
            rating: newRating
        }
        // addMovieToState(newMovie)
        fetch("http://127.0.0.1:5555/movies", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMovie)
        })
        .then(r => r.json())
        .then(addMovieToState)
    }

    return (
        <div className='new-movie-form'>
            <h2>New Movie</h2>
            <form onSubmit ={handleSubmit}>
                <input onChange= {handleName} type='text' name='name' placeholder='Movie name' />
                <input onChange= {handleCost} type='number' name='cost' step='0.01' placeholder='Movie cost' />
                <input onChange= {handleRating} type='text' name='rating' placeholder='Movie rating' />
                <button type='submit'>Add Movie</button>
            </form>
        </div>
    )
}

export default NewMovie