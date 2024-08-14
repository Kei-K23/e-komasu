"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function HeroBannerSwiper() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={"/iphone_banner_slice.jpg"}
            alt="iphone"
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/iphone_banner_slice.jpg"}
            alt="iphone"
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/iphone_banner_slice.jpg"}
            alt="iphone"
            className="w-full h-[450px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
