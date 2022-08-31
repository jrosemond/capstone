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
        <div>
            <div class="home" style={myStyle}>
                <div>
                    <div class=" homepage text-align center">
                        <h1 class="hometitle">Jahni Rosemond</h1>
                    </div>
                    <Navbar />
                </div>
            </div>
            <div class="flex flex-row justify-content-center">
                <button class="btn btn-rounded mt-10 mr-8" type="submit" src="https://github.com/jrosemond?tab=repositories">     <a href='https://github.com/jrosemond?tab=repositories'>GitHub</a>
                </button>
                <button class="btn btn-rounded mt-10" type="submit">
                <a href=' https://www.linkedin.com/in/jahnir/'>LinkedIn</a>
                </button>
            </div>
        </div>
    )
}

export default Home;
