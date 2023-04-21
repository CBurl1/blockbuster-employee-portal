import RentalData from './RentalData'


function RentalList({rentals, deleteRentalFromState}) {
    
    const sweetRentals = rentals.map(rental => 
        <RentalData 
            key={rental.id} 
            {...rental}
            deleteRentalFromState={deleteRentalFromState}
        />
    )

    return(
        <div>
            {sweetRentals}
        </div>
    )
}


export default RentalList