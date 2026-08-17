import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="top-left">
          <span>📞 +91 00000 00000</span>
          <span>✉ info@newerapublicschool.com</span>
        </div>

        <div className="top-right">
          <span>Student Login</span>
          <span>Parent Login</span>
        </div>
      </div>

      <nav className="navbar">

        <Link to="/" className="school-logo">
          <div className="logo-emblem">NEPS</div>

          <div className="school-name">
            <h2>NEW ERA</h2>
            <h3>PUBLIC SCHOOL</h3>
            <p>MAKODIYA, INDORE</p>
          </div>
        </Link>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

         

          <Link to="/admissions">Admissions</Link>

          <Link to="/facilities">Facilities</Link>

          <Link to="/gallery">Gallery</Link>


          <Link to="/events">Events</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <Link to="/contact" className="enquiry-btn">
          Enquiry Now
        </Link>

      </nav>
    </>
  );
}

export default Navbar;