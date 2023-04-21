import React from 'react'
import {useEffect, useState} from 'react'
import ClientList from './ClientList'
import NewClient from './NewClient'

function Client() {

  const [clients, setClients] = useState([])

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

  const addClient = (cO) => {
    const clientArr = [...clients, cO]
    fetch('http://localhost:5555/clients', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cO)
    })
    .then(response => response.json())
    setClients(clientArr)
  }
  

  return (
    <div>
        <NewClient addClient={addClient}/>
        <ClientList removeClientFromState= {removeClientFromState} clients = {clients}/>
    </div>
  )
}

export default Client;
