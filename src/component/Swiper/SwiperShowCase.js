import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Card/Card";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {API_URL} from '../../redux/constants'



export default function SwiperShowCase({ title, listLap }) {
  AOS.init();
  const laps = listLap && listLap.laptopList;
  const slideCount = laps && Math.round(laps.length / 6);
  const sum = laps && laps.length;
  const slides = [];
  for(let i = 0 ; i < slideCount ; i++) {
    const items = laps.slice(0,6);
    laps.splice(0,items.length);
    slides.push(items);
  }

  return (
    <section className="showcase">
      <div className="container">
        <h1
          className="cateHeader text-center animate-top"
          id="categories__work"
          data-aos='fade-down'
          data-aos-duration='2000'
        >
          {title} Tổng: {sum && sum}
        </h1>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          data-aos='fade-right'
          data-aos-duration='2000'
          data-aos-delay='1000'
        >
          {
            slides.map((slide,index) => (
              <SwiperSlide key={index} >
                {slide.map(item => (
                   <Card
                   key={item.maSp}
                   id={item.maSp}
                   img={`${API_URL}/${item.hinh}`}
                   name={item.tenSp}
                   cpu={item.cpu}
                   ram={item.ram}
                   vga={item.vga}
                   ocung={item.oCung}
                   manhinh={item.manHinh}
                   gia={item.gia}
                 />
                ))}
                <p style={{position:"absolute",left:5,bottom:5}}>{index+1}/{slideCount}</p>
              </SwiperSlide>
            ))
          }
          <a href="#" className="btnAll">
            Xem tất cả
          </a>
        </Swiper>
      </div>
    </section>
  );
}
