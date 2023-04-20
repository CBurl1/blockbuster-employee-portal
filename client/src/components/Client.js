import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ClientList from './ClientList'
import NewClient from './NewClient'

function Client() {

  const [clients, setClients] = useState([])


  //Why does it hit an error when I make a post? Why does it say client.map
  //is not a function? How can we fix it?
  const addClientToState = newClientObj => {
    setClients(...clients, newClientObj)
  }


  //We need to figure out why the id isn't appearing in the client row. 
  //Without the id we can't delete by the id and if we try to do so it'll delete everything.
  //We still need to build out the delete fetch for clients.
  const removeClientFromState = goodbyeClient => {
    const filteredArray = clients.filter(goodbyeClientObj => {
      return goodbyeClientObj.id !== goodbyeClient
    })
    setClients(filteredArray)
  }



  useEffect(() => {
    fetch("http://127.0.0.1:5555/clients")
      .then((r) => r.json())
      .then(setClients);
  }, []);
  

  return (
    <div>
      <div>
        <h1>Clients</h1>
        <NewClient addClientToState = {addClientToState}/>
        <ClientList removeClientFromState= {removeClientFromState} clients = {clients}/>
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
