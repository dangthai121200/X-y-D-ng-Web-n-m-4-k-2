import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ComputerBlue from "../../images/computerblue.jpg";

export default function AboutContent() {
  AOS.init();
  return (
    <div className="row about">
      <div className="col-6 d-flex flex-column justify-content-center">
        <h2
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="200"
          className="heading"
        >
          Về chúng tôi
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="400"
          className="description "
        >
          Atlaptop là cửa hàng chuyên cung cấp các loại laptop phục vụ cho công
          việc, học tập và vui chơi giải trí uy tín ở địa bàn Thành phố Hồ Chí
          Minh
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="800"
        className="col-6 d-flex flex-column justify-content-center"
      >
        <img src={ComputerBlue} alt="" />
        <title>Placeholder</title>
      </div>
    </div>
  );
}
