import ClientData from './ClientData'


function ClientList({clients, removeClientFromState}) {
    console.log(clients)
    
    const sweetClients = clients.map(client => 
        <ClientData 
            key={client.id} 
            {...client}
            removeClientFromState={removeClientFromState}
            
        />
    )


    return(
        <div>
            {sweetClients}
        </div>
    )
}

export default ClientList