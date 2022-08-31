import React from 'react'
import Navbar from './Navbar'
import '../About.css'
import paintingImage from "../hand-painted.jpg";


export default function About() {

  const myStyle = {
    backgroundImage: `url("${paintingImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);

  }

  const check = index => setSelectedIndex(index);

  return (
    <div class="aboutPage">
      <h1 class="aboutTitle" style={myStyle}>About Me</h1>
      <Navbar />
      <hr />
      <div class="bioTitle d-flex justify-content-center py-5">
      </div>
      <div class="bio d-flex justify-content-around rounded-lg">
        <img src="./jahni.JPG"
          width="450px"
          height="600px"
        />
        <p>Raised in Greenville, SC later attending Johnson C. Smith University. I love to travel and cook those are some of the few ways I express myself outside of Tech. As you take a deeper dive into my portfolio you will come to understand exactly "Who Jahni Is"</p>
      </div>
      <button type="submit"></button>
      <button></button>



     



<h2 class="testimonalsTitle pt-60">Testimonals</h2>

      <div class="mentor mt-40">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'<'}</button>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input
                type="radio"
                name="slider"
                id="s2"
                checked={selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1">
                <p class="card-text pt-8">"Throughout our mentorship, Jahni has continuously impressed me with his performance. He has displayed an aptitude for problem solving, as well as a determination to produce meaningful work. His eye for design has led him to produce many different formats and styles of webpage, each with their own distinct personality. Jahni has demonstrated great persistence in this field, and is sure to continue sharpening his skillset as he progresses."
                </p>
                <h5 class="card-title">Brandon H.</h5>
              </label>
              <label htmlFor="s2" id="slide2">
                <img className="fea" src="https://picsum.photos/200/300" height="100%" width="100%" />
              </label>
              <label htmlFor="s3" id="slide3">
                <img className="fea" src="https://picsum.photos/300/300" height="100%" width="100%" />
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
