import React from 'react'
import '../Why/why.css';
import img from "../images/1.png";
import img2 from "../images/Frame 16 (1).png"
import img1 from "../images/Frame 16 (6).png"
import img5 from "../images/Frame 16 (5).png"
import img3 from "../images/Frame 16 (7).png"
import img4 from "../images/Frame 16.png"
import img6 from "../images/Frame 16 (2).png"
import img7 from "../images/Frame 16 (3).png"
import img8 from "../images/Frame 16 (4).png"
export default function Why() {
  return (
    <>
      <section>
        <h2>Why will you choose our services?</h2>
        <div class="container t">
          <div class="item">
            <img src={img1} alt="" />
            <p>Kitchen cleaning and disinfection</p>
          </div>
          <div class="item">
            <img src={img4} alt="" />
            <p>Washing dishes, cups and utensils</p>
          </div>
          <div class="item large-img">
            <img src={img} alt="" className='img-fluid w-100' />
            <p>Complete sterilization of all surfaces and devices</p>
          </div>
          <div class="item ">
            <img src={img3} alt="" />
            <p>Change sheets and pillows daily and clean and sterilize curtains</p>
          </div>
          <div class="item ">
            <img src={img2} alt="" />
            <p>Wash and disinfect surfaces around the house and eliminate germs and insects</p>
          </div>
        </div>
      </section>
      <div className="container section2">
        <div className="item">
          <img src={img8} alt="" />
          <p>Professional tools and components to eliminate germs and microbes</p>
        </div>
        <div className="item">
          <img src={img7} alt="" />
          <p>Coordinating the place and spreading the spirit of beauty</p>
        </div>
        <div className="item">
          <img src={img6} alt="" />
          <p>Cleaning and disinfecting bathrooms using specialized chemicals</p>
        </div>
        <div className="center-img">
          <img src={img5} alt="" />
          <p>Complete cleaning and sterilization of the place</p>
        </div>
      </div>


    </>
  )
}
