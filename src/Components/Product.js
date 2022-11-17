import React, { useContext, useState } from "react";
import "./Product.css";
import { products } from "./Data";
import { noteContext, textContext } from "../App";

function Product() {
  // State for holding filter values
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");
  // State for Display Products
  const [display, setDisplay] = useState(products);

  let texts = useContext(textContext);
  // State for input value
  const [value, setValue] = useState("");

  let tempData = products;

  const typeHandler = (e) => {
    setType(e.target.value);
  };
  const orderHandler = (e) => {
    setOrder(e.target.value);
  };
  // Filter Handler Function
  const filterHandler = (e) => {
    e.preventDefault();
    let v1 = order;
    let v2 = type;
    if (v1 === "Ascending" && v2 === "Price") {
      tempData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (v1 === "Descending" && v2 === "Price") {
      tempData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (v1 === "Ascending" && v2 === "Rating") {
      tempData.sort(function (a, b) {
        return a.rating.length - b.rating.length;
      });
    } else if (v1 === "Descending" && v2 === "Rating") {
      tempData.sort(function (a, b) {
        return b.rating.length - a.rating.length;
      });
    }
    setDisplay([...tempData]);
  };
  // --------------------
  const onChange = (event) => {
    setValue(event.target.value);
  };
  // Search Handler Function
  const searchHandler = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please Write Name Of Sweets...");
      document.getElementById("search").focus();
    } else {
      let tempValue = value.toLowerCase();
      console.log(tempValue);
      console.log(display[0].name);
      for (let i = 0; i < display.length; i++) {
        let tempValue2 = display[i].name.toLowerCase();
        if (tempValue2.match(tempValue)) {
          setDisplay([display[i]]);
        }
      }
    }
  };

  // -----------------------
  let user = useContext(noteContext);

  const addToCart = (e) => {
    let productId = e;
    productId = Number(productId);

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        for (let k = 0; k < user.data.length; k++) {
          if (user.data[k].id === productId) {
            user.data[k].quantity++;
            user.setData([...user.data]);
            return;
          }
        }
        user.data.push(products[i]);
        user.setData([...user.data]);
      }
    }
  };
  return (
    <div>
      <div className="SearchMainDiv">
        <center>
          <div className="filterDiv filter">
            <select onChange={typeHandler} id="OS">
              <option value="">--Select Type--</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
            </select>
            <select onChange={orderHandler} id="Brand">
              <option value="">--Select Order--</option>
              <option value="Ascending">Low To High</option>
              <option value="Descending">High To Low</option>
            </select>
            <button onClick={filterHandler} className="searchBtn" id="filter">
              Filter
            </button>
          </div>
          <div className="search-container filterDiv">
            <form action="/">
              <input
                className="searchInput"
                type="text"
                placeholder="Search.."
                name="search"
                onChange={onChange}
                id="search"
              />
              <button
                onClick={searchHandler}
                className="searchBtn"
                type="submit"
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </center>
      </div>
      {display.map((t) => (
        <div className={texts.text} id="main">
          <div id="products1">
            <div className="product1">
              <img className="productImg" src={t.image} alt="" />
              <h3 className="title1">
                <a href="/"> {t.name}</a>
              </h3>
              <span style={{ color: "red" }}>Price ₹ {t.price} </span>
              <center>
                <p style={{ textAlign: "center" }}>{t.rating}</p>
              </center>

              <a
                onClick={() => {
                  addToCart(t.id);
                }}
                className="add-to-cart"
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
