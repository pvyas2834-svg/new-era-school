import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* SCHOOL INFO */}
        <div className="footer-school">

          <div className="footer-brand">

            <img
              src="/school-logo.png"
              alt="New Era Public School Logo"
              className="footer-logo-image"
            />

            <div>
              <h3>NEW ERA</h3>
              <h4>PUBLIC SCHOOL</h4>
            </div>

          </div>

          <p>
            Quality education, strong values and a caring environment.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/gallery">Gallery</Link>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>
            📍 Makodiya, Indore, Madhya Pradesh
          </p>

          <p>
            ☎ 6261292921
          </p>

          <p>
            ✉ newerapublicschoolnps@gmail.com
          </p>

          <a
            href="https://www.instagram.com/newerapublicschool_/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <span className="instagram-icon">📷</span>

            <span className="instagram-text">
              Instagram ID
              <strong>@newerapublicschool_</strong>
            </span>

          </a>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          © 2026 New Era Public School. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;