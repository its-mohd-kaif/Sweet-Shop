import React, { useState, } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  // UseState for password Input Field
  const [pass, setPass] = useState("");
  const userHandler = (e) => {
    setUsername(e.target.value);
  };
  // Function for password value hold into states
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  // let navigate=useNavigate();
  let navigate =useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    // Get data from local storage
    var user = JSON.parse(localStorage.getItem("username"));
    let users = user;
    console.log(users[0]);
    // Check Validation
    if (username === "") {
      alert("Username Field Can Not Be Empty");
      document.getElementById("username").focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else if (users[0].username !== username) {
      alert("Wrong Username");
      document.getElementById("username").focus();
    } else if (users[0].pass !== pass) {
      alert("Wrong Password");
      document.getElementById("pass").focus();
    } else if (users[0].username === username && users[0].pass === pass) {
      alert("Login Successfully");
      // Navigate to feed page
      navigate("/");
      
    }
  };
  return (
    <div>
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Login</h1>
          <div className="inputContainer">
            <input
              onChange={userHandler}
              id="username"
              type="text"
              className="input"
              placeholder=""
            />
            <label for="" className="label">
              Username
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={passHandler}
              id="pass"
              type="password"
              className="input"
              placeholder=""
            />
            <label for="" className="label">
              Password
            </label>
          </div>

          <input
            onClick={submitHandler}
            type="submit"
            className="submitBtn"
            value="Login"
          />
          <Link to="/Signup">
          <input type="submit" className="submitBtn" value="Signup" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
