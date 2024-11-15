import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
import img from "../images/Image (1).png";
import proja from "../images/Group.svg";
import video from "../images/Video.png";
import red from "../images/221.png";
import bor from "../images/Rectangle 4708.png";
import dan from "../images/12.png";

const Coustomer = () => {
  return (
    <div className="relative container mx-auto px-4 mt-8   ">
      <img
        src={red}
        className="absolute  bottom-[300px] ml-[-200px] bg-cover h-[490px]    hidden md:block"
        alt=""
      />
      <img
        src={dan}
        className="absolute bottom-0 right-[-30px] bg-cover h-[303px]     hidden md:block"
        alt=""
      />

      <div className="flex  items-center gap-2 ">
        <img className="w-[10px] h-[10px]" src={bor} alt="" />
        <p className="font-[700px] text-[20px] font-Roboto">Crispy, Every Bite Taste</p>
      </div>
      <p className="md:font-[700px] font-semibold text-[30px] md:text-[62px] mb-8 font-Bebas Neue">
        What Some of my Customers Say
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="  w-full  md:w-[1320px] h-auto md:h-[555px] p-4   rounded-lg flex items-center justify-center  ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[557px] w-full  relative  bg-[#FEBF00] p-5">
              <img
                className="absolute bottom-24 left-0 w-[40px] h-[77px]"
                src={proja}
                alt=""
              />
              <div className="space-y-40 w-[386px] h-[411px] px-5 py-10 m-auto">
                <p className="relative font-[400px] text-[20px] font-Roboto">
                <RiDoubleQuotesL className="absolute ml-[-24px] top-[-12px] w-[29.13px]" />
                  You can go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it.
                </p>
                <div className="flex justify-between items-center border-b border-black">
                  <div>
                    <p className="font-[700px] text-[18px] font-Bebas Neue">Khalid Al Dawsry</p>
                    <p className="font-[400px] text-[14px] font-Roboto">Jeddah, Saudi</p>
                  </div>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <img className="md:w-[763px] w-full" src={video} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="  w-full  md:w-[1320px] h-auto md:h-[555px] p-4  rounded-lg flex items-center justify-center  ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[557px] w-full   relative  bg-[#FEBF00] p-5">
              <img
                className="absolute bottom-24 left-0 w-[40px] h[77px]"
                src={proja}
                alt=""
              />
              <div className="space-y-40 w-[386px] h-[411px] px-5 py-10 m-auto">
             
                
                <p className="font-[400px] text-[20px] relative">
                <RiDoubleQuotesL className="absolute ml-[-24px] top-[-12px] w-[29.13px]" />
                You can go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it.
                </p>
                <div className="flex justify-between items-center border-b border-black">
                  <div>
                    <p className="font-[700px] text-[18px]">Khalid Al Dawsry</p>
                    <p className="font-[400px] text-[14px]">Jeddah, Saudi</p>
                  </div>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <img className="md:w-[763px] w-full" src={video} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="relative flex justify-end mt-4">
        <button className="absolute md:top-[-700px] md:right-6 right-64 custom-prev md:mr-8  p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
          ❮
        </button>
        <button className=" absolute md:top-[-700px]  md:right-4 right-52 custom-next p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Coustomer;
