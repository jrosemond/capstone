import React from 'react'
import Navbar from './Navbar';
import paintingImage from "../hand-painted.jpg";

function Home() {

    const myStyle = {
        backgroundImage: `url("${paintingImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div class="home" style={myStyle}>
            <div>
                <div class=" homepage text-align center">
                <h1 class="hometitle">Jahni Rosemond</h1>
            </div>
                <Navbar />
            </div>
        </div>
    )
}

export default Home;