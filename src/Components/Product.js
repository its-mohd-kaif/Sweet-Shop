import React, { useContext,useEffect, useState } from "react";
import "./Product.css";
import { products } from "./Data";
import { displayContext, noteContext } from "../App";

function Product() {
  let user = useContext(noteContext);

  let items=useContext(displayContext);
  console.log("Items",items.display[0])

  const[seen,setSeen]=useState([]);

 


  
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
      {seen.map((t) => (
        <div id="main">
          <div id="products1">
            <div className="product1">
              <img className="productImg" src={t.image} alt="" />
              <h3 className="title1">
                <a href="/"> {t.name}</a>
              </h3>
              <span style={{color:"red"}}>Price {t.price} ₹</span>
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
