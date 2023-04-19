import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import RentalList from './RentalList'

function Rental() {

  const [rentals, setRentals] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5555/rentals")
      .then((r) => r.json())
      .then(setRentals);
  }, []);

  return (
    <div>
        <h1>Rentals</h1>
        <table>
          <tr>
            <th>Rental ID</th>
            <th>Movie ID</th>
            <th>Client Id</th>
            <th>Edit Rental</th>
          </tr>
        </table>
        <RentalList rentals={rentals}/>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movie'>Movies</Link>
          <Link to='/client'>Clients</Link>
        </nav>
    </div>
  )
}

export default Rental;
