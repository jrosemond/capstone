import React from 'react'
import Navbar from './Navbar'
import '../Project.css'
import paintingImage from "../hand-painted.jpg";

export default function Projects() {

    const myStyle = {
        backgroundImage: `url("${paintingImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div class="projectsPage">
            <h3 className="projectsTitle" style={myStyle}>Projects</h3>
            <hr />
            <Navbar />
            <div>
                
            </div>
            <div class="projectList d-flex justify-content-around flex-wrap mt-4 " >
                <div class="card">
                    <div class="card-body">
                        <img src="./fpshot.png" alt="" width="150px"></img>
                        <p class="card-text">E-Commerce site built using Semantic HTML</p>
                        <a href="https://stirring-frangollo-0bcdff.netlify.app/home.html" target="_blank" rel="noreferrer" className="title">
                            E-Commerce v1
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <img src="./jahni.JPG" alt="" width="150px"></img>
                        <p class="card-text">Social Oppression project built using HTML & JavaScript.</p>
                        <h5 class="card-title">Code For Justice</h5>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <img src="./ecomv2shot.png" alt="" width="150px"></img>
                        <p class="card-text">Upgraded E-Commerce site built using React.</p>
                        <h5 class="card-title">E-Commerce v2</h5>
                    </div>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <img src="./wikishot.PNG" alt="" width="150px"></img>
                        <p class="card-text">Redesign of site using React and MySQL.</p>
                        <a href="https://main.d2wzkwm3nb10ll.amplifyapp.com">Wikipedia</a>
                    </div>
                </div>


            </div>
        
        </div>
    )
}
