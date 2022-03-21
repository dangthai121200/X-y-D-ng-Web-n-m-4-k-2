import React,{useEffect,useState} from "react";
import axios from 'axios'
import Sale from "../component/Sale/Sale";
import LapFilter from "../component/LaptopFilter/LapFilter";
import Footer from "../component/Footer/Footer"
import SwiperLong from "../component/SwiperLong/SwiperLong";

export default function Laptop() {

  
  const [listLaptop,setListLapTop] = useState();

  useEffect(()=>{
      getListLaptop();
  },[])


  const getListLaptop = async () =>{
      const {data} = await axios.get("https://laptopso1vn.herokuapp.com/v1/laptop")
      setListLapTop(data)
  }

  return (
    <div>
      <Sale background='sale--nonebackground' />
      <LapFilter/>
      <SwiperLong title='LAPTOP' listLap={listLaptop&&listLaptop}/>
      <Footer/>
    </div>
  );
}
