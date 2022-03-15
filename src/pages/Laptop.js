import React from "react";
import Sale from "../component/Sale/Sale";
import LapFilter from "../component/LaptopFilter/LapFilter";
import Footer from "../component/Footer/Footer"

export default function Laptop() {
  return (
    <div>
      <Sale background='sale--nonebackground' />
      <LapFilter/>
      <Footer/>
    </div>
  );
}
