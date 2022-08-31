import { useRef } from "react";
import '../Contact.css'
import Navbar from './Navbar';
import paintingImage from "../hand-painted.jpg";
import emailjs from '@emailjs/browser';
// emailjs.send('service_x6i7ypm', 'template_6lfuak7', values, 'henB07B5nQV3_5Wzx')



function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'service_x6i7ypm', 'template_6lfuak7', e.target, 'henB07B5nQV3_5Wzx')
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        });
        e.target.reset()
  };


    const myStyle = {
        backgroundImage: `url("${paintingImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div className="contactPage">
            <h1 class=" contactTitle mb-3" style={myStyle}>Contact Me</h1>
            <Navbar />
            <hr />
            {/* justify-content-between */}
            <div class="container">
                <div class="row d-flex justify-content-around">
                    <div class="col-md-7">
                        <div class="form d-flex">
                            <div class="image">
                                <img src="./caliview.jpg"
                                    height="100px"
                                    width="300px" />
                            </div>
                            <form onSubmit={sendEmail} class="my-form pt-4">
                                <div class="md-form md-outline mb-2 ">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="text" id="emailExample" class="form-control" />
                                    <label for="emailExample">First Name</label>
                                </div>
                                <div class="md-form md-outline mb-2">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="text" id="emailExample" class="form-control" />
                                    <label for="emailExample">Last Name</label>
                                </div>
                                <div class="md-form md-outline mb-2">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="emailExample" class="form-control" />
                                    <label for="emailExample">E-mail address</label>
                                </div>

                                <div class="md-form md-outline mb-2">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="phonenumber" id="passwordExample" class="form-control" />
                                    <label for="passwordExample">Phone Number</label>
                                </div>
                                <div class="md-form md-outline mb-2">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="text" id="emailExample" class="form-control" />
                                    <label for="emailExample">Message</label>
                                </div>

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
