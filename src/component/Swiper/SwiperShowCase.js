import React from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Controller } from 'swiper';

export default function SwiperShowCase({title}) {
  return (
    <section class="showcase">
      <div class="container">
        <h1 class="cateHeader text-center animate-top" id="categories__work">
          {title}
        </h1>
        <div class="swiper mySwiper animate-left">
          <div class="swiper-wrapper">
            <Swiper>
              <SwiperSlide>
                <Card/>
              </SwiperSlide>
              <SwiperSlide>
                <Card/>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <a href="./laptop.php" class="btnAll">
            Xem tất cả
          </a>
        </div>
      </div>
    </section>
  );
}
