import React from 'react'
import logo from '../images/logo.png'
import style from '../Navbar/Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container">
                    <div className={style.logo} >
                    <img className="navbar-brand " src={logo} />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ${style.links}`}>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/about" tabindex="-1" aria-disabled="true">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" tabindex="-1" aria-disabled="true">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/team" tabindex="-1" aria-disabled="true">Our Team</NavLink>
                            </li>
                        </ul>


                        <div className="nav-item dropdown " id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> English </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Arabic</a></li>                                
                            </ul>

                    </div>


                    </div>
                </div>
            </nav>

        </>
    )
}
