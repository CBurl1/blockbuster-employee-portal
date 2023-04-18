import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div>
                <img src='https://www.shutterstock.com/image-illustration/typical-theater-style-3d-letters-260nw-656897350.jpg'/>
            </div>
            <nav>
                <Link to='/movies'>Movies</Link>
                <Link to='/rentals'>Rentals</Link>
                <Link to='/clients'>Clients</Link>
            </nav>
        </>
    )
}

export default Home