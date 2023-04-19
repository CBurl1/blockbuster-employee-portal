import ClientData from './ClientData'


function ClientList({clients}) {
    
    const sweetClients = clients.map(client => 
        <ClientData 
            key={client.id} 
            {...client}
        />
    )


    return(
        <div>
            {sweetClients}
        </div>
    )
}

export default ClientList