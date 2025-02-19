import React from "react";
import "../assets/css/Footer.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/Logo.png";
import img1 from '../assets/images/slider1.jpeg';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Background Image */}
      <div className="hero-image">
        <img src={img1} alt="Factory Background" />
        
        {/* Overlay Content */}
        <div className="overlay-content">
          {/* Company Logo */}
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>

          {/* Heading */}
          <h1>Best Seafood From Sultanate of Oman</h1>

          {/* Contact Information */}
          <div className="contact-info">
            <p><strong>P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN</strong></p>
            <p><a href="mailto:info@asmkmct.com">info@asmkmct.com</a></p>
            <p><strong>Mobile:</strong> +968 92850600</p>
            <p><strong>Tel:</strong> +968 24050604</p>
          </div>

          {/* Navigation Links */}
          <div className="navbar-links">
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/aboutus'>About Us</NavLink></li>
              <li><NavLink to='/product'>Products</NavLink></li>
              <li><NavLink to='/contactus'>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://wa.me/96892850600" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="tel:+96892850600"><FaPhoneAlt /></a>
            <a href="mailto:info@asmkmct.com"><FaEnvelope /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlusG /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>

          {/* Footer Note */}
          <footer>
            <p>© 2025 Asmak Muscat Int'l. All Rights Reserved</p>
            <p>Developed by <a href="https://developer.com" target="_blank" rel="noopener noreferrer">Developer</a></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;

