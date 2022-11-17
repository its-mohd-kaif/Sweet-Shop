import React from "react";
// Import Images
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import "./Carousel.css";

function Carousel() {
  return (
    <div>
      {/* Carousel Container */}
      <div className="main-task3">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src={img1} alt="Los Angeles" className="imgTask3" />
            </div>

            <div className="item">
              <img src={img2} alt="Chicago" className="imgTask3" />
            </div>

            <div className="item">
              <img src={img3} alt="New york" className="imgTask3" />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
