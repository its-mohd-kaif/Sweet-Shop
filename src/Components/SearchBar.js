import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { products } from "./Data";
import { displayContext } from "../App";

function SearchBar() {
  const[type,setType]=useState("");
  const[order,setOrder]=useState("");

  let user=useContext(displayContext);

  let tempData=products

  const typeHandler = (e) => {
    setType(e.target.value);
  }
  const orderHandler = (e) => {
    setOrder(e.target.value);
  }
  const filterHandler = (e) => {
    e.preventDefault()
    let v1=order;
    let v2=type;
   if (v1 === "Ascending" && v2 === "Price") {
      tempData.sort(function (a, b) {
        return a.price - b.price;
      });
     
    } else if (v1 === "Descending" && v2 === "Price") {
      tempData.sort(function (a, b) {
        return b.price - a.price;
      });
  
    }
    user.display.push(tempData);
        user.setDisplay([...user.display]);
    console.log("Temp",tempData)
    
  }
  // console.log("Pro",products)
  return (
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
          <button onClick={filterHandler} className="searchBtn" id="filter">Filter</button>
        </div > 
        <div className="search-container filterDiv">
          <form action="/action_page.php">
            <input className="searchInput" type="text" placeholder="Search.." name="search" />
            <button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </center>
    </div>
  );
}

export default SearchBar;
