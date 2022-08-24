import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (
    <div>
        <h1>About Me</h1>
        <Navbar/>
      
<div
  id="carouselVideoExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <div class="carousel-inner">
   
    <div class="carousel-item active">
      <video class="img-fluid" autoplay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</div>
<div class="bio d-flex justify-content-center">
    <img src="./jahni.JPG"
    width="200px"/>
    <h2>Who is Jahni?</h2>
  </div>
<div class= "d-flex justify-content-center" >
<div class="card">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 class="card-title">Brandon H.</h5>
    <div class="card">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 class="card-title">Patrick M.</h5>
    <div class="card">
</div>
  </div>
</div>
  </div>
</div>
</div>

    </div>
  )
}
