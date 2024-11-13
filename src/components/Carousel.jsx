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
import bor from '../images/Rectangle 4708.png'
import side from '../images/Frame 1707478073.png'

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
  
    
    <div >
    
      
     <div className=" flex flex-col md:flex-row relative my-8   ">
     {/* <img  className=' m-[-100px] w-[280px]' src={side} alt="" /> */}
       
       
     <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
 
       {/* Custom Next and Prev Buttons */}
       <div>
       <div className="custom-prev absolute bottom-0 right-1/2 md:right-8 md:top-8 transform -translate-y-1/2 bg-white p-2 rounded-full  cursor-pointer ">
         ❮
       </div>
       <div className="custom-next absolute bottom-0 right-2/3 md:right-0 md:top-8 transform -translate-y-1/2 bg-white p-2 rounded-full  cursor-pointer ">
         ❯
       </div>
       </div>
     </div>
   </div>
  );
};

export default Carousel;
