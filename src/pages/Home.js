import React from "react";
import Hero from "../component/Hero/Hero";
import Categories from "../component/Categories/Categories";
import Label from "../component/Label/Label";
import Sale from "../component/Sale/Sale";
import Subsection from "../component/Subsection/Subsection";
import SwiperShowCase from "../component/Swiper/SwiperShowCase";
import Contact from "../component/Contact/Contact";
import Map from "../component/Map/Map"
import Footer from "../component/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Label />
      <Sale background="sale"/>
      <Subsection
        subNumber="sub1"
        textOne="HỌC TẬP"
        textTwo="VĂN PHÒNG"
        subTitle="subsection__title animate-left"
      />
      <SwiperShowCase title="LAPTOP HỌC TẬP VĂN PHÒNG" />
      <Subsection
        subNumber="sub1 sub2"
        textOne="ĐỒ HỌA"
        textTwo="GAMING"
        subTitle="subsection__title subsection__title2 animate-left"
      />
      <SwiperShowCase title="LAPTOP ĐỒ HỌA - GAMING" />
      <Subsection
        subNumber="sub1 sub3"
        textOne="CAO CẤP"
        textTwo="SANG CHẢNH"
        subTitle="subsection__title subsection__title3 animate-left"
      />
      <SwiperShowCase title="LAPTOP CAO CẤP" />
      <Contact />
      <Map/>
      <Footer/>
    </div>
  );
}
