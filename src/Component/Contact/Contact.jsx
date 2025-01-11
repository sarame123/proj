import React from 'react'
import '../Contact/Contact.css'
export default function Contact() {
  return (
    <>
     <div className="about">
        <div className="overlay">
            <h3>Contact Us</h3>
        </div>
    </div>
   
    <div className="contact p-5">
  <div className="row">
  
    <div className="col-6  left">
      <div className="mb-4 d-flex align-items-center">
        <div className="col-2 text-center">
          <i className="fas fa-phone"></i>
        </div>
        <div className="col-10">
          <p>Phone Number</p>
          <span>01256784581</span>
        </div>
      </div>
      <div className="mb-4 d-flex align-items-center">
        <div className="col-2 text-center">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="col-10">
          <p>Email Address</p>
          <span>Dubaihotelservice@gmail.com</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="col-2 text-center">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        </div>
        <div className="col-10">
          <p>Location</p>
          <span>Dubai, 1244 Street</span>
        </div>
      </div>
    </div>


    <div className="col-6 mt-5 right">
      <form action="">
        <h2 className="text-center pb-3">Send Message</h2>
        <label>First Name</label>
        <input type="text" className="form-control mt-2 mb-3" />
        <label>Email</label>
        <input type="email" className="form-control mt-2 mb-3" />
        <label>Phone Number</label>
        <input type="text" className="form-control mt-2 mb-3" />
        <label>Message</label>
        <textarea
          rows={5}
          className="form-control mt-2 mb-3"
        ></textarea>
        <button
          className="btn form-control p-3 text-white fw-bold"
          style={{
            backgroundColor: "var(--main-color)",
            fontSize: "20px",
            fontFamily: "var(--font)",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  )
}
