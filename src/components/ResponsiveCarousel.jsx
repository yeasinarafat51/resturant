// ResponsiveCarousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';

const ResponsiveCarousel = () => {
  return (
    <div className="container mx-auto px-4">
         <div className='flex  items-center'>
            {/* <img className='w-[10px] h-[10px]' src={bor} alt="" /> */}
            <p className='font-[700px] text-[20px]'>Crispy, Every Bite Taste</p>
        </div>
         <p  className='font-[700px] text-[62px]'>POPULAR FOOD ITEMS</p>
       
       
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 }, // mobile
          768: { slidesPerView: 2, spaceBetween: 20 }, // tablet
          1024: { slidesPerView: 4, spaceBetween: 30 }, // desktop
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Swiper Slide items */}
        <SwiperSlide className=" ">
          <Slide/>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <Slide/>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <Slide/>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <Slide/>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <Slide/>
        </SwiperSlide>
        
        {/* Add more slides as needed */}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="relative flex justify-end mt-4">
        <button className="absolute md:top-[-400px] md:right-0 right-1/2 custom-prev md:mr-8  p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
          ❮
        </button>
        <button className=" absolute md:top-[-400px]  md:right-0 right-2/3 custom-next p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
          ❯
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
