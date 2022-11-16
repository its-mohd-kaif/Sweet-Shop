import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { products } from "./Data";
import { displayContext, noteContext } from "../App";

function Product() {
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");

  const [display, setDisplay] = useState([]);

  let tempData = products;
  useEffect(() => {
    //Runs only on the first render
    setDisplay(tempData);
  }, []);

  const typeHandler = (e) => {
    setType(e.target.value);
  };
  const orderHandler = (e) => {
    setOrder(e.target.value);
  };
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
    }
    // user.display.push(tempData);
    //     user.setDisplay([...user.display]);
    console.log("Temp", tempData);
    setDisplay([...tempData]);
  };
  // --------------------
  let user = useContext(noteContext);

  let items = useContext(displayContext);
  console.log("Items", items.display[0]);

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
              <option value="">--Select--</option>
              <option value="Price">Price</option>
            </select>
            <select onChange={orderHandler} id="Brand">
              <option value="">--Select Order--</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
            <button onClick={filterHandler} className="searchBtn" id="filter">
              Filter
            </button>
          </div>
          <div className="search-container filterDiv">
            <form action="/action_page.php">
              <input
                className="searchInput"
                type="text"
                placeholder="Search.."
                name="search"
              />
              <button className="searchBtn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </center>
      </div>
      {products.map((t) => (
        <div id="main">
          <div id="products1">
            <div className="product1">
              <img className="productImg" src={t.image} alt="" />
              <h3 className="title1">
                <a href="/"> {t.name}</a>
              </h3>
              <span style={{ color: "red" }}>Price {t.price} ₹</span>
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
