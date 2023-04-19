import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div>
                <img src='https://www.shutterstock.com/image-illustration/typical-theater-style-3d-letters-260nw-656897350.jpg' alt='blockbuster' />
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