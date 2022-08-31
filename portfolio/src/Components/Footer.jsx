import React from 'react'

export default function () {
    return (
        <div class="container-fluid bg-grey py-5">
            <div class="containerFooter">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="logo-part">
                                    <img src="https://i.ibb.co/sHZz13b/logo.png" class="w-50 logo-footer" />
                                    <p>Charlotte, NC</p>
                                </div>
                            </div>
                            <div class="col-md-6 px-4">
                                <h6> About Company</h6>
                                <p>But horizontal lines can only be a full pixel high.</p>
                                <a href="#" class="btn-footer"> More Info </a> <br />
                                <a href="#" class="btn-footer"> Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 px-4">
                                <h6> Help us</h6>
                                <div class="row ">
                                    <div class="col-md-6">
                                        <ul className="footerItems">
                                            <li> <a href="#"> Home</a> </li>
                                            <li> <a href="#"> About</a> </li>
                                            <li> <a href="#"> Projects</a> </li>
                                            <li> <a href="#"> Contact</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <h6> Newsletter</h6>
                                <div class="social">
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                </div>
                                <form class="form-footer my-3">
                                    <input type="text" placeholder="search here...." name="search"></input>
                                    <input type="button" value="Go" ></input>
                                </form>
                                <p>That's technology limitation of LCD monitors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
