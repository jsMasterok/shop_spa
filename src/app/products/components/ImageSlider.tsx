"use client";
// import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ image }: { image: any }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
        className="min-w-0 min-h-0 h-52 lg:h-96 max-w-full w-full"
      >
        <SwiperSlide className="w-full h-full">
          <Image src={image} layout="fill" objectFit="contain" alt="Image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
