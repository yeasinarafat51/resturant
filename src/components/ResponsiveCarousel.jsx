// ResponsiveCarousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';
import bor from '../images/Rectangle 4708.png'
import side from '../images/Frame 1707478073.png'

const ResponsiveCarousel = () => {
  return (
    <div className="relative container mx-auto px-4 ">
      <img src={side} className='absolute bottom-[-40px] ml-[-160px] h-[490px] hidden md:block' alt="" />
         <div className='flex  items-center gap-2 '>
            <img className='w-[10px] h-[10px]' src={bor} alt="" />
            <p className='font-[700px] text-[20px]'>Crispy, Every Bite Taste</p>
        </div>
         <p  className='md:font-[700px] font-bold text-[30px] md:text-[62px] mb-8'>POPULAR FOOD ITEMS</p>
       
       
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
        <button className="absolute md:top-[-400px] md:right-6 right-64 custom-prev md:mr-8  p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
          ❮
        </button>
        <button className=" absolute md:top-[-400px]  md:right-4 right-52 custom-next p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
          ❯
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
