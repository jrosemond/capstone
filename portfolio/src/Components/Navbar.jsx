import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to="/about">About Me</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}


export default Navbar;