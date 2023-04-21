import React from 'react';
import {Link} from 'react-router-dom'

function Home() {

    return (
        <>
            <div className='bg-black'>
                <h1 className='text-blue-600'>
                </h1>
            </div>
            <nav className='stupid'>
                <Link to='/movie'>Movies</Link>
                <Link to='/rental'>Rentals</Link>
                <Link to='/client'>Clients</Link>
            </nav>
            <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/08/Exterior_Hero-NewsroomFeatured.jpg" alt="blockbuster"/>
        </>
    )
}

export default Home;