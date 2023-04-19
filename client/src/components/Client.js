import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ClientList from './ClientList'

function Client() {

  const [clients, setClients] = useState([])


  useEffect(() => {
    fetch("http://127.0.0.1:5555/clients")
      .then((r) => r.json())
      .then(setClients);
  }, []);
  

  return (
    <div>
      <div>
        <h1>Clients</h1>
        <ClientList clients = {clients}/>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movie'>Movies</Link>
        <Link to='/rental'>Rentals</Link>
      </nav>
    </div>
  )
}

export default Client;
