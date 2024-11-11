// CustomCarousel.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'; // Custom styling

const Carousel = () => {
  return (
    <div className="carousel-container relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="slide bg-blue-300 flex items-center justify-center h-60">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="slide bg-green-300 flex items-center justify-center h-60">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="slide bg-purple-300 flex items-center justify-center h-60">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="slide bg-pink-300 flex items-center justify-center h-60">
          Slide 4
        </SwiperSlide>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
          <svg width="24" height="24" fill="currentColor" className="text-black hover:text-blue-500">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
          <svg width="24" height="24" fill="currentColor" className="text-black hover:text-blue-500">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
