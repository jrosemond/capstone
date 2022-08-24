import React from 'react'
import '../App.css'
import Navbar from './Navbar';


function Contact() {
    return (
        <div>
            <h1 class="mb-3">Contact Me</h1>
            <Navbar />
            <hr/>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <div class="form d-flex justify-content-between">
                            <div class="image">
                                <img src="https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg"
                                    height="100px" />
                            </div>
                            <form action="" class="my-form">
                                <div class="md-form md-outline">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="emailExample" class="form-control" />
                                    <label for="emailExample">First Name</label>
                                </div>
                                <div class="md-form md-outline">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="emailExample" class="form-control" />
                                    <label for="emailExample">Last Name</label>
                                </div>
                                <div class="md-form md-outline">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="emailExample" class="form-control" />
                                    <label for="emailExample">E-mail address</label>
                                </div>

                                <div class="md-form md-outline">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="password" id="passwordExample" class="form-control" />
                                    <label for="passwordExample">Phone Number</label>
                                </div>
                                <div class="md-form md-outline">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="emailExample" class="form-control" />
                                    <label for="emailExample">Message</label>
                                </div>
                                <hr />
                                <div class="space">
                                    <div class="float-right">
                                        <button class="btn btn-rounded" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
