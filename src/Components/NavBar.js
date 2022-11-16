import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import Product from "./Product";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { noteContext } from "../App";
// import Link from React-router-dom
function NavBar() {
  let user=useContext(noteContext)
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
            <Link className="textNav" to={"/Cart"}>
              <img className="cartImg1 cart" src={cart} alt="" /> {user.data.length}
            </Link>
        </li>
      </ul>
      {/* <SearchBar /> */}
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}

export default NavBar;
