import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      {/* Contact Us Container */}
      <center>
        <div>
          <Link to={"/"}>
            <button className="homeBtn">Home Page</button>
          </Link>
        </div>
        <div className="aboutDiv">
          <h1>Contact Us</h1>
          <br></br>
          <p>
            Neelkanth Sweets Address : Vivek Khand, Gomti Nagar Lucknow, Uttar
            Pradesh (226 010), India
            <br></br>
            <br></br>
            Phone No : +(91)-999999999 / +(91)-8888888888
            <br></br>
            <br></br>
            E-mail : info@sweelsweet.com
          </p>
        </div>
      </center>
    </div>
  );
}

export default Contact;
