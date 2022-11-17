import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import text from "../images/text.png";
import Carousel from "./Carousel";
import Product from "./Product";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { noteContext, textContext } from "../App";
function NavBar() {
  let user = useContext(noteContext);
  let texts = useContext(textContext);
  // Import context values
  let navigate = useNavigate();
  // Cart Handler Function
  const cartHandler = (e) => {
    e.preventDefault();
    // When new user try to open cart page then user have to firstly
    // Create accout(Signup) after user can go on CART page
    let users = JSON.parse(localStorage.getItem("username"));
    if (users === null) {
      alert("Please Create Your Account !!!");
      navigate("/Signup");
    } else {
      navigate("/Cart");
    }
  };
  // Function for  increase and decrease Font Symbol
  const textHandler = (e) => {
    e.preventDefault();
    if (texts.text === "initial") {
      texts.setText("big");
    } else if (texts.text === "big") {
      texts.setText("initial");
    }
  };
  return (
    <div className="navbarDiv">
      <ul>
        <li className="imgNav">
          <a class="active" href="/">
            <img className="logoImg" src={logo} alt="" />
          </a>
        </li>
        <li>
          <a className="textNav" href="/About">
            About
          </a>
        </li>
        <li>
          <a className="textNav" href="/Contact">
            Contact
          </a>
        </li>
        <li>
          <a className="textNav" href="Signup">
            Signup
          </a>
        </li>
        <li>
          <a className="textNav" href="Signin">
            Login
          </a>
        </li>
        <center>
          <li>
            <button onClick={cartHandler} className="textNav btnCart">
              <img className="cartImg1 cart" src={cart} alt="" />{" "}
              <span
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "15px",
                }}
              >
                {user.data.length}
              </span>
            </button>
          </li>
          <li>
            <button onClick={textHandler} className="textNav btnCart">
              <img className="textImg" src={text} alt="" />
            </button>
          </li>
        </center>
      </ul>
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}

export default NavBar;
