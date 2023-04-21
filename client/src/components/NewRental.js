import {useState} from 'react'

function NewRental({addRentalToState}) {

    const [newRentalId, setRentalId] = useState('')
    const [newMovieId, setMovieId ] = useState('')
    const [newClientId, setClientId] = useState('')

    const handleRentalId = e => setRentalId(e.target.value)
    const handleMovieId = e => setMovieId(e.target.value)
    const handleClientId = e => setClientId(e.target.value)
    
    const handleSubmit = e => {
        e.preventDefault()

        const newRental = {
            rental_id: newRentalId,
            movie_id: newMovieId,
            client_id: newClientId
        }
        // addMovieToState(newMovie) 
        fetch("http://127.0.0.1:5555/rentals", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRental)
        })
        .then(r => r.json())
        .then(addRentalToState)
    }

    return (
        <div className='new-rental-form'>
            <h2>New Rental</h2>
            <form onSubmit ={handleSubmit}>

                <input onChange= {handleRentalId} type='text' name='name' placeholder='Rental Number' />
                <input onChange= {handleMovieId} type='number' name='cost' step='0.01' placeholder='Movie Id' />
                <input onChange= {handleClientId} type='text' name='rating' placeholder='Client Id' />
                <button type='submit'>Add Rental</button>
            </form>
        </div>
    )
}

export default NewRental;