import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { noteContext } from "../App";
import { Link } from "react-router-dom";
import "./CartPage.css";
function CartPage() {
  let user = useContext(noteContext);
  const [price, setPrice] = useState(0);
  console.log("USER",user)
  let navigate = useNavigate();
  // When Page render total price will be display
  useEffect(() => {
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      tempPrice += user.data[i].price * user.data[i].quantity;
    }
    setPrice(tempPrice);
  }, [price]);
  // Delete button function
  const deleteBtn = (val) => {
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      if (val === user.data[i].id) {
        let flag = window.confirm("Sure You Want To Remove Product !!!");
        if (flag === true) {
          tempPrice = price - user.data[i].price * user.data[i].quantity;
          setPrice(tempPrice);
          user.data.splice(i, 1);
        }
      }
    }
    user.setData([...user.data]);
  };
  // Increment button function
  const increment = (val) => {
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      if (val === user.data[i].id) {
        user.data[i].quantity++;
        tempPrice = price + user.data[i].price * user.data[i].quantity;
        setPrice(tempPrice);
        user.setData([...user.data]);
      }
    }
  };
  // Decrement button function
  const decrement = (val) => {
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      if (val === user.data[i].id) {
        if (user.data[i].quantity === 1) {
          let flag = window.confirm("Sure You Want To Remove Product !!!");
          if (flag === true) {
            tempPrice = price - user.data[i].price * user.data[i].quantity;
            setPrice(tempPrice);
            user.data.splice(i, 1);
            user.setData([...user.data]);
            break;
          }
        } else {
          tempPrice = price - user.data[i].price * user.data[i].quantity;
          setPrice(tempPrice);
          user.data[i].quantity--;
          user.setData([...user.data]);
        }
      }
    }
  };
  // Empty Cart Function
  const cartDelete = () => {
    let flag = window.confirm("Are You Sure ??");
    if (flag === true) {
      user.data.length = 0;
      setPrice(0);
      user.setData([...user.data]);
    }
  };
  const checkOutBtn = () => {
    alert("Checkout Successfully");
    user.data.length = 0;
    setPrice(0);
    user.setData([...user.data]);
    navigate("/");
  };
  return (
    <center>
      <div className="CartDiv">
        <div className="header"></div>
        <div className="tableDisplay">
          <div>
            <div className="rowTitle">
              <div className="column1Title">
                <h2>Shoping Cart</h2>
              </div>
              <div className="column2Title">
                <button className="emptyBtn" onClick={cartDelete}>
                  Empty Cart
                </button>
              </div>
            </div>
            {user.data.map((ele) => (
              <div className="rowCart grid-container">
                <div className="column1Cart grid-item">
                  <img className="cartImg" src={ele.image} alt="" />
                </div>
                <div className="column2Cart grid-item">
                  <span className="nameProduct">{ele.name}</span>
                </div>
                <div className="column5Cart grid-item">
                  <span>{ele.price} $</span>
                </div>
                <div className="column3Cart grid-item">
                  <button
                    className="plus"
                    onClick={() => {
                      increment(ele.id);
                    }}
                  >
                    ➕
                  </button>
                  {ele.quantity}
                  <button
                    className="minus"
                    onClick={() => {
                      decrement(ele.id);
                    }}
                  >
                    ➖
                  </button>
                </div>
                <div className="column4Cart grid-item">
                  <button
                    className="deleteBtn1"
                    onClick={() => {
                      deleteBtn(ele.id);
                    }}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartPriceDiv">
            <div>
              <h2>Total Price : {price} $</h2>
            </div>
            <button className="deleteBtn" onClick={checkOutBtn}>
              Checkout
            </button>
            <br></br>
            <br></br>
            <Link to="/">
              <button className="deleteBtn2">Home Page</button>
            </Link>
          </div>
        </div>
      </div>
    </center>
  );
}

export default CartPage;
