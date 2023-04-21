import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import RentalList from './RentalList'
import NewRental from './NewRental'

function Rental() {

  const [rentals, setRentals] = useState([])

  const addRentalToState = newRentalObj => {
    setRentals(...rentals, newRentalObj)
  }

  const deleteRentalFromState = deleteRental => {
    const rentalArray = rentals.filter(deleteRentalObj => {
      return deleteRentalObj.id !== deleteRental
    })
    setRentals(rentalArray)
  }
 
  useEffect(() => {
    fetch("http://127.0.0.1:5555/rentals")
      .then((r) => r.json())
      .then(setRentals);
  }, []);

  return (
    <div>
        <div>
          <h1>Rentals</h1>
          <NewRental addRentalToState={addRentalToState}/>
          <RentalList rentals={rentals} deleteRentalFromState={deleteRentalFromState}/>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movie'>Movies</Link>
          <Link to='/client'>Clients</Link>
        </nav>
    </div>
  )
}

export default Rental;
