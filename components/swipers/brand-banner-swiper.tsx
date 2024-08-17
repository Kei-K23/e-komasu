"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type BrandBannerSwiperProps = {
  brandBannersData: {
    bannerUrl: string | null;
  }[];
};
export default function BrandBannerSwiper({
  brandBannersData,
}: BrandBannerSwiperProps) {
  return (
    <div className="section-container">
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
        modules={[Autoplay, Pagination]}
        className="mySwiper border rounded-lg"
      >
        {brandBannersData?.map((banner, index) => (
          <SwiperSlide key={banner.bannerUrl}>
            <img
              src={banner.bannerUrl!}
              alt={`Banner image ${index}`}
              className="w-full h-[380px] lg:h-[450px] rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
