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
            <hr />
            <Navbar />
            {/* justify-content-between */}
            <div class="container">
                <div class="d-flex justify-content-around">
                    <div class="col-md-7">
                        <div class="form d-flex">
                            <div class="image">
                                <img src="./caliview.jpg"
                                    height="300px"
                                    width="600px" class="contactImage pt-6"/>
                            </div>
                            <form onSubmit={sendEmail} class="my-form pt-24 flex flex-wrap">
                                <div class="md-form md-outline mb-2 pr-3 ">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="text" id="firstNameExample" class="form-control" placeholder="First Name" required />
                                </div>
                                <div class="md-form md-outline mb-2 pr-3 ">
                                    <i class="fas fa-envelope prefix"></i>
                         
                                    <input type="text" id="lastNameExample" class="form-control" placeholder="Last Namme" required/>
                                    
                                </div>
                                <div class="md-form md-outline mb-2 pr-3 ">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="emailExample" class="form-control" placeholder="Email Address" required/>
                                 
                                </div>

                                <div class="md-form md-outline mb-2 pr-3 ">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="phonenumber" id="phoneExample" class="form-control" placeholder="Phone Number" required/>
                                    
                                </div>
                                <div class="md-form md-outline mb-4 ">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="text" id="emailExample" class="form-control" placeholder="Message"  required/>
                                
                                </div>

                                <div class="space">
                                    <div class="pl-4">
                                        <button class="btn btn-rounded" type="submit">Contact Me</button>
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
