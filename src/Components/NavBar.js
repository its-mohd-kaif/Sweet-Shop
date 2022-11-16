import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import Carousel from "./Carousel";
import Product from "./Product";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { noteContext } from "../App";
// import Link from React-router-dom
function NavBar() {
  let user = useContext(noteContext);
  let navigate = useNavigate();
  const cartHandler = (e) => {
    e.preventDefault();
    var users = "";
    users = JSON.parse(localStorage.getItem("username"));
    console.log(Object.keys(users).length);
    console.log("USERS1", users.length);
    if (Object.keys(users).length===0) {
      alert("Please Sign Up");
      navigate("/Signup");
    } else {
      navigate("/Cart");
    }
  };
  return (
    <div>
      <ul>
        <li className="imgNav">
          <a class="active" href="#home">
            <img className="logoImg" src={logo} alt="" />
          </a>
        </li>
        <li>
          <a className="textNav" href="#news">
            About
          </a>
        </li>
        <li>
          <a className="textNav" href="#contact">
            Products
          </a>
        </li>
        <li>
          {/* <Link to="Signup"> */}
          <a className="textNav" href="Signup">
            Signup
          </a>
          {/* </Link> */}
        </li>
        <li>
          <a className="textNav" href="Signin">
            Login
          </a>
        </li>
        <li>
          <button onClick={cartHandler} className="textNav btnCart">
            <img className="cartImg1 cart" src={cart} alt="" />{" "}
            {user.data.length}
          </button>
        </li>
      </ul>
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}

export default NavBar;
