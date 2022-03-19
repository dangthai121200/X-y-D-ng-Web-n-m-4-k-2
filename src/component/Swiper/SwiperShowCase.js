import React from "react";
import Card from "../Card/Card";
import { Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperShowCase({ title }) {
  return (
    <section className="showcase">
      <div className="container">
        <h1
          className="cateHeader text-center animate-top"
          id="categories__work"
        >
          {title}
        </h1>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SwiperSlide>
          <a href="#" className="btnAll">Xem tất cả</a>
        </Swiper>
      </div>
    </section>
  );
}