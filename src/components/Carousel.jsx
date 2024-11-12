// CustomCarousel.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'; 
import Slide from './Slide';
import img1 from '../images/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1.png'
import img2 from '../images/pizza 1.png'
import img3 from '../images/fried-shrimp-prawn-cake-white-plate 1.png'
import img4 from '../images/french-fries 1.png'

const Carousel = () => {
    // const datas = [
    //     {
    //         id: 1,
    //         img:  img1,
    //         name: "vegetables burger",
    //         discription : "Barbecue Italian cuisine pizza"
    //     },
    //     {
    //         id: 2,
    //         img:  img2,
    //         name: "Spacial Pizza ",
    //         discription : "Barbecue Italian cuisine pizza"
    //     },
    //     {
    //         id: 3,
    //         img:  img3,
    //         name: "Spacial French fries ",
    //         discription : "Barbecue Italian cuisine "
    //     },
    //     {
    //         id: 4,
    //         img:  img4,
    //         name: "Cuisine Chicken",
    //         discription : "Japanese Cuisine Chicken"
    //     },
    // ]
  return (
    <div className=" flex flex-col md:flex-row relative my-12   py-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[306px] h-[300px] p-4 bg-white shadow-lg rounded-lg flex items-center justify-center  ">
        <div className=" ">
      <div className="flex justify-center mb-4">
        <img
          className="w-[186px] h-[124px] rounded-lg"
          src={img1}
          alt="Card Image"
        />
      </div>

      <div className="border-b-2 border-[#BD1F17] w-[57px] mx-auto mb-2"></div>

      <p className="font-bold text-[24px] text-gray-800 mb-1 text-center">vegetables burger</p>
      <p className="font-medium text-[16px] text-gray-600 text-center">Barbecue Italian cuisine pizza</p>
    </div>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center rounded-md">
        <div className="w-[306px] h-[300px] p-4 bg-white shadow-lg rounded-lg ">
      <div className="flex justify-center mb-4">
        <img
          className="w-[186px] h-[124px] rounded-lg"
          src={img1}
          alt="Card Image"
        />
      </div>

      <div className="border-b-2 border-[#BD1F17] w-[57px] mx-auto mb-2"></div>

      <p className="font-bold text-[24px] text-gray-800 mb-1 text-center">vegetables burger</p>
      <p className="font-medium text-[16px] text-gray-600 text-center">Barbecue Italian cuisine pizza</p>
    </div>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center rounded-md">
        <div className="w-[306px] h-[300px] p-4 bg-white shadow-lg rounded-lg ">
      <div className="flex justify-center mb-4">
        <img
          className="w-[186px] h-[124px] rounded-lg"
          src={img1}
          alt="Card Image"
        />
      </div>

      <div className="border-b-2 border-[#BD1F17] w-[57px] mx-auto mb-2"></div>

      <p className="font-bold text-[24px] text-gray-800 mb-1 text-center">vegetables burger</p>
      <p className="font-medium text-[16px] text-gray-600 text-center">Barbecue Italian cuisine pizza</p>
    </div>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center rounded-md">
        <div className="w-[306px] h-[300px] p-4 bg-white shadow-lg rounded-lg ">
      <div className="flex justify-center mb-4">
        <img
          className="w-[186px] h-[124px] rounded-lg"
          src={img1}
          alt="Card Image"
        />
      </div>

      <div className="border-b-2 border-[#BD1F17] w-[57px] mx-auto mb-2"></div>

      <p className="font-bold text-[24px] text-gray-800 mb-1 text-center">vegetables burger</p>
      <p className="font-medium text-[16px] text-gray-600 text-center">Barbecue Italian cuisine pizza</p>
    </div>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center rounded-md">
        <div className="w-[306px] h-[300px] p-4 bg-white shadow-lg rounded-lg ">
      <div className="flex justify-center mb-4">
        <img
          className="w-[186px] h-[124px] rounded-lg"
          src={img1}
          alt="Card Image"
        />
      </div>

      <div className="border-b-2 border-[#BD1F17] w-[57px] mx-auto mb-2"></div>

      <p className="font-bold text-[24px] text-gray-800 mb-1 text-center">vegetables burger</p>
      <p className="font-medium text-[16px] text-gray-600 text-center">Barbecue Italian cuisine pizza</p>
    </div>
        </SwiperSlide>
        
      </Swiper>

      {/* Custom Next and Prev Buttons */}
      <div className="custom-prev absolute bottom-0 right-1/2 md:right-8 md:top-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">
        ❮
      </div>
      <div className="custom-next absolute bottom-0 right-2/3 md:right-0 md:top-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">
        ❯
      </div>
    </div>
  );
};

export default Carousel;
