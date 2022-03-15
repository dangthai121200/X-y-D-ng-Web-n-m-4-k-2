import React from "react";
import Sale from "../component/Sale/Sale";
import AccessoryFilter from "../component/AccessoryFilter/AccessoryFilter"
import Footer from "../component/Footer/Footer"

export default function Phukien() {
  return (
    <div>
      <Sale background='sale--nonebackground' />
      <AccessoryFilter/>
      <Footer/>
    </div>
  );
}
