import React from "react";
import ComputerBlue from "../../images/computerblue.jpg";

export default function AboutContent() {
  return (
    <div className="row about">
      <div className="col-6 d-flex flex-column justify-content-center">
        <h2 className="heading animate-top">Về chúng tôi</h2>
        <p className="description animate-left">
          Atlaptop là cửa hàng chuyên cung cấp các loại laptop phục vụ cho công
          việc, học tập và vui chơi giải trí uy tín ở địa bàn Thành phố Hồ Chí
          Minh
        </p>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center animate-right">
        <img src={ComputerBlue} alt="" />
        <title>Placeholder</title>
      </div>
    </div>
  );
}
