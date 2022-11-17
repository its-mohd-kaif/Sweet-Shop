import React, { useState } from "react";
import "./Footer.css";
import logo from "../images/logo.png";
function Footer() {
  // States for footer contact input values
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Email Handler Function
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  // Message Handler Function
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  // Button Handler
  const buttonHandler = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Plese Write Your Email!!");
      document.getElementById("email").focus();
    } else if (message === "") {
      alert("Please Write Some Message!!");
      document.getElementById("message").focus();
    } else {
      setEmail("");
      setMessage("");
      alert("Message Submitted Successfully 😊😊");
    }
  };
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img
            style={{ marginBottom: "2em" }}
            className="logo"
            src={logo}
            alt="logo"
          />

          <p class="footer-links">
            <a href="/">Home</a>·<a href="/">About</a>·<a href="/">Faq</a>
          </p>

          <p class="footer-company-name">Sweel Sweet © 2022</p>
        </div>

        <div class="footer-right">
          <p>Contact Us</p>

          <form>
            <input
              onChange={emailHandler}
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
            />
            <textarea
              onChange={messageHandler}
              name="message"
              placeholder="Message"
              id="message"
              value={message}
            ></textarea>
            <button onClick={buttonHandler}>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
