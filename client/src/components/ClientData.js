

function ClientData({id, age, first_name, last_name, email_address, removeClientFromState, telephone_number}) {

    const handleDelete = () => {
        fetch(`http://127.0.0.1:5555/clients/${id}`, {method: 'DELETE'})
        removeClientFromState(id)
    }

    return(
<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
  <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        <th scope='col' className="px-6 py-3">Client ID</th>
        <th scope='col' className="px-6 py-3">First Name</th>
        <th scope='col' className="px-6 py-3">Last Name</th>
        <th scope='col' className="px-6 py-3">Age</th>
        <th scope='col' className="px-6 py-3">Email</th>
        <th scope='col' className="px-6 py-3">Telephone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-6 py-4 text-center">{id}</td>
        <td className="px-6 py-4 text-center">{first_name}</td>
        <td className="px-6 py-4 text-center">{last_name}</td>
        <td className="px-6 py-4 text-center">{age}</td>
        <td className="px-6 py-4 text-center">{email_address}</td>
        <td className="px-6 py-4 text-center">{telephone_number}</td>
        <td className="px-6 py-4 text-center">
          <button onClick={handleDelete}>🗑️</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    )
}


export default ClientData