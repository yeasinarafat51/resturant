// Carousel.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Exp = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center justify-center h-64 bg-gray-300">Slide 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-64 bg-gray-400">Slide 2</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-64 bg-gray-500">Slide 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-64 bg-gray-600">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Exp;
