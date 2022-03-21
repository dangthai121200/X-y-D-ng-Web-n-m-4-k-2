import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Subsection.css";
export default function Subsection({ subNumber, textOne, textTwo, subTitle }) {
  AOS.init();

  return (
    // <!-- Subsection 1 -->
    <section className={subNumber}>
      <div className="container container__subsection d-flex justify-content-center align-items-center text-center ">
        <h1 className={subTitle}>
          {" "}
          <div
            data-aos="fade-right"
            data-aos-offset="10"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            {textOne}
          </div>
          <div
            data-aos-offset="10"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            {textTwo}
          </div>
        </h1>
      </div>
    </section>
  );
}
