import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import RentalList from './RentalList'
import NewRental from './NewRental'

function Rental() {

  const [rentals, setRentals] = useState([])

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

  const addRental = (rO) => {
    const rentalArr = [...rentals, rO]
    fetch('http://localhost:5555/rentals', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(rO)
    })
    .then(response => response.json())
    setRentals(rentalArr)
  }

  return (
    <div>
        <div>
          <h1>Rentals</h1>
          <NewRental addRental={addRental}/>
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
