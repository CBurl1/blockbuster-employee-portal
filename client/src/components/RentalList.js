import RentalData from './RentalData'


function RentalList({rentals}) {
    
    const sweetRentals = rentals.map(rental => 
        <RentalData 
            key={rental.id} 
            {...rental}
        />
    )

    return(
        <div>
            {sweetRentals}
        </div>
    )
}


export default RentalList