import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Computer2 from "../../images/computer2.jpg";

export default function History() {
  AOS.init();
  return (
    <div className="row history">
      <div className="col-6 order-2 d-flex flex-column justify-content-center">
        <h2
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="200"
          className="heading "
        >
          Lịch sử hình thành
        </h2>
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="400"
          className="description"
        >
          Atlaptop được thành lập vào năm 2020 bởi 2 founder Trugtie và
          AlarShere với mong muốn mang lại cho khách hàng những sản phẩm hiện
          đại và mạnh mẽ nhất.
        </p>
      </div>
      <div
       data-aos="fade-right"
       data-aos-duration="2000"
       data-aos-delay="800"
       className="col-6 order-1 d-flex flex-column justify-content-center">
        <img src={Computer2} alt="" />
        <title>Placeholder</title>
      </div>
    </div>
  );
}
