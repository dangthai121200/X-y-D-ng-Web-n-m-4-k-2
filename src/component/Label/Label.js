import React from "react";
import AsusLogo from "../../images/AsusLogo.png";
import HPLogo from "../../images/hplogo.png";
import MacBook from "../../images/macbooklogo.png";
import DellLogo from "../../images/delllogo.png";
import AcerLogo from "../../images/acerlogo.png";
import "./Label.css";

export default function Label() {
  return (
    // <!-- Label -->
    <section className="label">
      <div className="container">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src={AsusLogo}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={HPLogo}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={MacBook}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={DellLogo}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={AcerLogo}
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
