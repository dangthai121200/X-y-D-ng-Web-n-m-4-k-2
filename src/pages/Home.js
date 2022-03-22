import React,{useEffect,useState} from "react";
import Hero from "../component/Hero/Hero";
import Categories from "../component/Categories/Categories";
import Label from "../component/Label/Label";
import Sale from "../component/Sale/Sale";
import Subsection from "../component/Subsection/Subsection";
import SwiperShowCase from "../component/Swiper/SwiperShowCase";
import Contact from "../component/Contact/Contact";
import Map from "../component/Map/Map"
import Footer from "../component/Footer/Footer"
import axios from 'axios'

export default function Home() {

  const [listLaptop,setListLapTop] = useState();

  useEffect(()=>{
      getListLaptop();
  },[])


  const getListLaptop = async () =>{
      const {data} = await axios.get("https://laptopso1vn.herokuapp.com/v1/categoryLaptop")
      setListLapTop(data)
  }

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
      <SwiperShowCase title="LAPTOP HỌC TẬP VĂN PHÒNG" listLap={listLaptop&&listLaptop[0]} />
      <Subsection
        subNumber="sub1 sub2"
        textOne="ĐỒ HỌA"
        textTwo="GAMING"
        subTitle="subsection__title subsection__title2 animate-left"
      />
      <SwiperShowCase title="LAPTOP ĐỒ HỌA - GAMING" listLap={listLaptop&&listLaptop[1]} />
      <Subsection
        subNumber="sub1 sub3"
        textOne="CAO CẤP"
        textTwo="SANG CHẢNH"
        subTitle="subsection__title subsection__title3 animate-left"
      />
      <SwiperShowCase title="LAPTOP CAO CẤP" listLap={listLaptop&&listLaptop[2]} />
      <Contact />
      <Map/>
      <Footer/>
    </div>
  );
}
