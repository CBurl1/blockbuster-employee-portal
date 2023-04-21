import React from 'react';
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
          <NewRental addRental={addRental}/>
          <RentalList rentals={rentals} deleteRentalFromState={deleteRentalFromState}/>
        </div>
    </div>
  )
}

export default Rental;
