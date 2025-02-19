import React from "react";
// import "../assets/css/GoogleMap.css";
import '../assets/css/Location.css'
import Footer from "./Footer";

const Location = () => {
  return (
    <div className="map-container">
      {/* Embedded Google Map via iframe */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27794.720392000534!2d58.206360000000004!3d23.633147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3d980d34189%3A0x7b3adde6aae03e63!2sAsmak%20Muscat%20Int'l%20LLC%20Fish%20Exporter!5e1!3m2!1sen!2sin!4v1736919005904!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Details Overlay */}
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Get in touch with us Today</p>
        <h3>Call us</h3>
        <p>Mobile: +968 92850600</p>
        <p>Tel: +968 24050604</p>
        <h3>Address</h3>
        <p>
          P.O.BOX 1741, POSTAL CODE 122, AL MABELA,
          <br />
          SULTANATE OF OMAN, C.R.NO 1341511
        </p>
        <h3>Email</h3>
        <p>info@asmkmct.com</p>
      </div>
      <Footer></Footer>
    </div>
    
  );
};

export default Location;
