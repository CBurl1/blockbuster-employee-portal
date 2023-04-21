import React from 'react';
import {Link} from 'react-router-dom'

function Home() {

    return (
        <>
            <div className='bg-black'>
                <h1 className='text-blue-600'>
                </h1>
            </div>
            <nav>
                <Link to='/movie'>Movies</Link>
                <Link to='/rental'>Rentals</Link>
                <Link to='/client'>Clients</Link>
            </nav>
        </>
    )
}

export default Home;