import React from 'react'
import logo from '../images/logo.png'

export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="bg-white text-dark py-5">

                    <div className="footer-container">

                    <img className="logo-img" src={logo} alt="Logo" />


                    <div className="footer-item">
                            <ul className="list-unstyled">
                                <li>Make an Appointment</li>
                                <li>About Dubai Hotel Service</li>
                                <li>Why Choose Us</li>
                                <li>Service</li>
                                <li>Our Contact</li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h5 className='text-bold'>Service</h5>
                            <ul className="list-unstyled">
                                <li>Property Cleaning</li>
                                <li>Domectic Cleaning</li>
                                <li>Window Cleaning</li>
                                <li>House Cleaning</li>
                                <li>Office Cleaning</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h5 className='text-bold'>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>T - 01258639562</li>
                                <li>E - Dubaihotelservice@gmail.com</li>
                                <li><div className="social-icons d-flex gap-2"> <i class="fab fa-facebook-f"></i>  <i class="fab fa-whatsapp"></i>  <i class="fab fa-instagram"></i></div></li>
                            </ul>
                        </div>

                    </div>

                </footer>
            </div>

        </>
    )
}
