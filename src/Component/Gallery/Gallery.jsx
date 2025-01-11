import React from 'react'
import '../Gallery/Gallery.css';
import img from "../images/1.png";
import img1 from "../images/one.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"
import img7 from "../images/7.png"
export default function Gallery() {
  return (
    <>
   <div className="side">
    
   <section class="container gallery">
      <h2>Our Service Gallery</h2>
      <div class="Galllery-images">
        <img src={img1} />
        <img  src={img2} alt=""/>
        <img  src={img3} alt=""/>
        <img  src={img4} alt=""/>
        <img  src={img6} alt=""/>
        <img  src={img7} alt=""/>
        <div className="gallery-large">
        <img  src={img5} alt=""/>
        </div>
      </div>
    </section>
    <section class="container choose-us">
     
    </section>
   </div>
  
  


  </>
  )
}
