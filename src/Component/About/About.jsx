import React from 'react'
import '../About/About.css'
export default function About() {
  return (
    <>
      <div className="about">
        <div className="overlay">
          <h3>About US</h3>
        </div>
      </div>
      <div className="word">
        <div className="text">
          <p>At Dubai Hotel Service , we are dedicated to providing top-notch cleaning and sanitization services for hotels, serviced apartments, and furnished properties. Our mission is to create a clean, healthy, and welcoming environment for your guests, ensuring their satisfaction and comfort</p>
        </div>
        <div className="text2">
          <ul className='list-unstyled'>With a team of experienced professionals and a commitment to excellence, we specialize in:
            <li>Comprehensive cleaning tailored to your property's needs</li>
            <li>Deep sanitization to maintain hygiene standards</li>
            <li>Reliable and efficient service to meet your schedule</li>
          </ul>
        </div>
       <div className="text3">
       <p>We understand the importance of a spotless and hygienic space, and our goal is to help you maintain the highest standards of cleanliness. Partner with us for services that enhance your property's reputation and give your guests an unforgettable experience</p>
       </div>
      </div>
    </>
  )
}
