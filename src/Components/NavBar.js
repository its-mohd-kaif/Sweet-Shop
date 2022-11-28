import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import text from "../images/text.png";
import Carousel from "./Carousel";
import Product from "./Product";
import Footer from "./Footer";
import userImg from "../images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { noteContext, textContext } from "../App";
function NavBar() {
  let user = useContext(noteContext);
  let texts = useContext(textContext);
  // Import context values

  // let userSignin = JSON.parse(localStorage.getItem("username"));

  const [login, setLogin] = useState("");

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("username"));
    if (users === null) {
      setLogin("Not Login");
    } else {
      setLogin(users[0].username);
    }
  }, []);

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
      alert("Big Text Theme Enable");
    } else if (texts.text === "big") {
      texts.setText("initial");
      alert("Default Text Theme Enable");
    }
  };
  return (
    <div>
      <div className="navbarDiv">
        <ul>
          <li className="imgNav">
            <Link to={"/"}>
              <a class="active">
                <img className="logoImg" src={logo} alt="" />
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/About"}>
              <a className="textNav">
                <span className={texts.text}>About</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/Contact"}>
              <a className="textNav">
                <span className={texts.text}>Contact</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"Signup"}>
              <a className="textNav">
                <span className={texts.text}>Signup</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"Signin"}>
              <a className="textNav" href="Signin">
                <span className={texts.text}>Login</span>
              </a>
            </Link>
          </li>
          <center>
            <li>
              <button
                style={{ paddingTop: "1em" }}
                onClick={cartHandler}
                className="textNav btnCart"
              >
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
              <button
                style={{ paddingTop: "1em" }}
                onClick={textHandler}
                className="textNav btnCart"
              >
                <img className="textImg" src={text} alt="" />
              </button>
            </li>
            <li>
              <button
                onClick={cartHandler}
                style={{ paddingTop: "0.6em" }}
                className="textNav btnCart"
              >
                <img className="textImg" src={userImg} alt="" />
                <span style={{ marginLeft: "10px", color: "black" }}>
                  {login}
                </span>
              </button>
            </li>
          </center>
        </ul>
        <Carousel />
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default NavBar;
