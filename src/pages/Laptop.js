import React from "react";
import Sale from "../component/Sale/Sale";
import LapFilter from "../component/LaptopFilter/LapFilter";
import Footer from "../component/Footer/Footer"
import SwiperLong from "../component/SwiperLong/SwiperLong";

export default function Laptop() {
  return (
    <div>
      <Sale background='sale--nonebackground' />
      <LapFilter/>
      <SwiperLong title='LAPTOP'/>
      <Footer/>
    </div>
  );
}
