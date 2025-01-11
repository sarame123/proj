import React from 'react'
import style  from '../Main/Main.module.css'
import img from '../images/cleaning service-amico 1.png'
export default function Main() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-lg-7 text mt-5">
             <h2 className={style.header}>A unique hotel experience for your apartment</h2>
             <span className={style.para}>Health and cleanliness</span>
             <button className={style.btn}>Call Us</button>
            </div>
            <div className="col-md-12 col-lg-5 position-relative">
             <img src={img} alt="cleaning service"  className='img-fluid w-100 ' />
             <div className="icons position-absolute">
             <i class="fab fa-whatsapp "></i>
             <i class="fas fa-phone"></i>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}
