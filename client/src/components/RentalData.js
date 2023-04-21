

function RentalData({client_id, movie_id, id, deleteRentalFromState, checkout_date}) {
    
    const handleDelete = () => {
        fetch(`http://127.0.0.1:5555/rentals/${id}`, {method: 'DELETE'})
        deleteRentalFromState(id)
    }

    return(
        <div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className="px-6 py-3">Rental Number</th>
                        <th scope='col' className="px-6 py-3">Movie</th>
                        <th scope='col' className="px-6 py-3">Client</th>
                        <th scope='col' className="px-6 py-3">Checkout date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">{id}</td>
                        <td className="px-6 py-4">{movie_id}</td>
                        <td className="px-6 py-4">{client_id}</td>
                        <td className="px-6 py-4">{checkout_date}</td>
                        <td className="px-6 py-4">
                            <button onClick={handleDelete} >🗑️</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default RentalData;