import React from 'react';
import {Link} from 'react-router-dom';

function Rental() {
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className="px-6 py-3">Rental Number</th>
              <th scope='col'className="px-6 py-3">Movies</th>
              <th scope='col' className="px-6 py-3">Client</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Jaws</td>
              <td className="px-6 py-4">Dakota Vikdal</td>
              <td className="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Lord of the Rings The Fellowship of the Ring</td>
              <td className="px-6 py-4">Mason Parks</td>
              <td className="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">Top Gun</td>
              <td className="px-6 py-4">Collin Burleigh</td>
              <td className="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>  
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movie'>Movies</Link>
          <Link to='/client'>Clients</Link>
        </nav>
      </div>
    </div>
  )
}

export default Rental;
