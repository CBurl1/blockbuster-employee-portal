

function ClientData({id, age, first_name, last_name}) {
    return(
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className="px-6 py-3">Client ID</th>
                        <th scope='col' className="px-6 py-3">First Name</th>
                        <th scope='col' className="px-6 py-3">Last Name</th>
                        <th scope='col' className="px-6 py-3">Age</th>
                        <th scope='col' className="px-6 py-3">Edit Client</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">{id}</td>
                        <td className="px-6 py-4">{first_name}</td>
                        <td className="px-6 py-4">{last_name}</td>
                        <td className="px-6 py-4">{age}</td>
                        <td className="px-6 py-4">
                            <a href="/rental" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Client</a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
    )
}


export default ClientData