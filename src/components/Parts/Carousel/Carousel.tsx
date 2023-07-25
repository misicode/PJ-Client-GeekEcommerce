import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => { 
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      rewind={true}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        React.Children.map(children, child =>
          <SwiperSlide>
            { child }
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default Carousel;