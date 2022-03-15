import React from "react";
import School from "../../images/schoolsale.PNG"
import Work from "../../images/newsale.PNG"

export default function Sale({background}) {
  return (
    // <!-- Sale -->
    <section className={background}>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={School}
                className="d-block w-100"
                alt=".newsale"
              />
            </div>
            <div className="carousel-item ">
              <img
                src={Work}
                className="d-block w-100"
                alt="schooclsale"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
