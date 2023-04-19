import RentalData from './RentalData'


function RentalList({rentals}) {

    
    const sweetrentals = rentals.map(movie => 
        <RentalData 
            key={movie.id} 
            {...movie}
        />
    )

    return(
        <div>
            {sweetrentals}
        </div>
    )
}


export default RentalList