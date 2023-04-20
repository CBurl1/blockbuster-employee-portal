


function MovieData({id, cost, name, rating}) {

    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className="px-6 py-3">Movie ID</th>
                        <th scope='col' className="px-6 py-3">Title</th>
                        <th scope='col' className="px-6 py-3">Cost</th>
                        <th scope='col' className="px-6 py-3">Rating</th>
                        <th scope='col' className="px-6 py-3">Edit Client</th>
                    </tr>
                </thead>
                <tbody className='table-auto'>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">{id}</td>
                        <td className="px-6 py-4">{name}</td>
                        <td className="px-6 py-4">{cost}</td>
                        <td className="px-6 py-4">{rating}</td>
                        <td className="px-6 py-4">
                            <a href="/rental" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Client</a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
    )
}


export default MovieData