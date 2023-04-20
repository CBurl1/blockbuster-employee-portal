

function RentalData({client_id, movie_id, id}) {
    return(
        <div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className="px-6 py-3">Rental Number</th>
                        <th scope='col' className="px-6 py-3">Movies</th>
                        <th scope='col' className="px-6 py-3">Client</th>
                        <th scope='col' className="px-6 py-3">Edit Rental</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">{id}</td>
                        <td className="px-6 py-4">{movie_id}</td>
                        <td className="px-6 py-4">{client_id}</td>
                        <td className="px-6 py-4">
                            <a href="/rental" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            {/* <p>Checkout time: {checkout_date}</p>
            <p>Client: {client_id}</p>
            <p>Movie: {movie_id}</p>
            <p>Return date: {return_date}</p> */}
        </div>
    )
}

export default RentalData