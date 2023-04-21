import {useState} from 'react'


function MovieData({id, cost, name, rating, updateMovie}) {

    const [ editCost, setEditCost ] = useState(false)
    const toggleEdit = () => setEditCost( e => !e )  

    const [ newCost, setNewCost ] = useState(cost)
    const updateCost = e => setNewCost( e.target.value )

    const commitToNewCost = e => {
        e.preventDefault()
        
        fetch( `http://127.0.0.1:5555/movies/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                cost: newCost
            } )
        } )
            .then( r => r.json() )
            .then(updateMovie)
    }
    return (

        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className="px-6 py-3">Movie ID</th>
                        <th scope='col' className="px-6 py-3">Title</th>
                        <th scope='col' className="px-6 py-3">Rating</th>
                        <th scope='col' className="px-6 py-3">Cost</th>
                        <th scope='col' className="px-6 py-3">Edit Client</th>
                    </tr>
                </thead>
                <tbody className='table-auto'>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">{id}</td>
                        <td className="px-6 py-4">{name}</td>
                        <td className="px-6 py-4">{rating}</td>
                        <td className="px-6 py-4">
                            <a href="/rental" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Client</a>
                            <button onClick={handleDelete} >🗑️</button>
                            <button onClick={toggleEdit}>✏️</button>
                            { editCost ? 
                            <form onSubmit={commitToNewCost}>
                                <input onChange= {updateCost}value={newCost}type='number'/>
                                <input type='submit'/>
                            </form>
                            :<td className="px-6 py-4">{cost}</td>}
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
    )
}


export default MovieData