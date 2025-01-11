import React from 'react'
import '../OurTeam/team.css'
import img1 from "../images/p1.png"
import img2 from "../images/p2.png"
import img3 from "../images/p3.png"
import img4 from "../images/p4.png"
import img5 from "../images/p5.png"
import img6 from "../images/p6.png"
import img7 from "../images/p7.png"
import img8 from "../images/p8.png"
import img9 from "../images/p9.png"
import img10 from "../images/p10.png"
import img11 from "../images/p11.png"
import img12 from "../images/p12.png"
export default function OurTeam() {
  return (
    <>
    <div className="ourTeam about">
        <div className="overlay">
            <h3>OurTeam</h3>
        </div>
    </div>
    <div className=" p-5 team-img">
        <div className="">
            <div className="row ">
                <div className="img col-3">
                    <img src={img1} alt="" />
                    <h3>Savannah Nguyen</h3>
                    <p>Owner</p>
                </div>
                <div className="img col-3">
                    <img src={img2} alt="" />
                    <h3>Savannah Nguyen</h3>
                    <p>Owner</p>
                </div>
                <div className="img col-3">
                    <img src={img3} alt="" />
                    <h3>Savannah Nguyen</h3>
                    <p>Owner</p>
                </div>
                <div className="img col-3">
                    <img src={img4} alt="" />
                    <h3>Bessie Cooper</h3>
                    <p>Owner</p>
                </div>
                <div className="img col-3">
                    <img src={img5} alt="" />
                    <h3>Devon Lane</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img6} alt="" />
                    <h3>Savannah Nguyen</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img7} alt="" />
                    <h3>Bessie Cooper</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img8} alt="" />
                    <h3>Eleanor Pena</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img9} alt="" />
                    <h3>Jenny Wilson</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img10} alt="" />
                    <h3>Jenny Wilson</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img11} alt="" />
                    <h3>Darlene Robertson</h3>
                    <p>Cleaning</p>
                </div>
                <div className="img col-3">
                    <img src={img12} alt="" />
                    <h3>Ronald Richards</h3>
                    <p>Cleaning</p>
                </div>
               
            </div>
        </div>
    </div>
    </>
  )
}
