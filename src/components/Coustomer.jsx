import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';
import img from '../images/Image (1).png'
import proja from '../images/Group.svg'
import video from '../images/Video.png'
import red from '../images/221.png'
import bor from '../images/Rectangle 4708.png'

const Coustomer = () => {
  return (
    <div className='container'>
    
    <div className='flex justify-between items-center'>
    <div className='px-8' >
    
    <div className=' flex  items-center gap-4'>
         <img className='w-[10px] h-[10px]' src={bor} alt="" />
         <p className='font-[700px] text-[20px]'>Crispy, Every Bite Taste</p>
     </div>
      <p  className='font-[700px] text-[62px]'>What Some of my Customers Say</p>
    
    </div>
    <div className='relative'>
    <div className="custom-prev absolute bottom-[-900px] right-60 md:bottom-[-48px] md:right-2  transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer ">
         ❮
       </div>
       <div className="custom-next absolute bottom-[-900px] right-72 md:bottom-[-48px] md:right-16  transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer ">
         ❯
       </div>
    </div>
    </div>
     <div className=" flex flex-col md:flex-row relative my-8   ">
     {/* <img  className=' m-[-90px] w-[307px] h-[303px]' src={red} alt="" /> */}
       
       
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
         modules={[Navigation, Pagination, Autoplay]}
         className="mySwiper"
       >
         <SwiperSlide className="  w-[1320px] h-[555px] p-4 bg-white shadow-lg rounded-lg flex items-center justify-center  ">
        <div className='flex'>
        <div className='w-[557px]  relative  bg-[#FEBF00] p-5'>
            <img className='absolute bottom-24 left-0 w-[40px] h[77px]' src={proja} alt="" />
            <div className='space-y-40 w-[386px] h-[411px] px-5 py-10 m-auto'> 
            <p className='font-[400px] text-[20px]'>You can go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
            <div className='flex justify-between items-center border-b border-black'>
                <div>
                    <p className='font-[700px] text-[18px]'>Khalid Al Dawsry</p>
                    <p className='font-[400px] text-[14px]'>Jeddah, Saudi</p>
                </div>
                <img src={img} alt="" />
            </div>
            </div>
         </div>
         <img className='w-[763px]' src={video} alt="" />
        </div>
         </SwiperSlide>
         <SwiperSlide className="  w-[1320px] h-[555px] p-4 bg-white shadow-lg rounded-lg flex items-center justify-center  ">
        <div className='flex'>
        <div className='w-[557px]  relative  bg-[#FEBF00] p-5'>
            <img className='absolute bottom-24 left-0 w-[40px] h[77px]' src={proja} alt="" />
            <div className='space-y-40 w-[386px] h-[411px] px-5 py-10 m-auto'> 
            <p className='font-[400px] text-[20px]'>You can go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
            <div className='flex justify-between items-center border-b border-black'>
                <div>
                    <p className='font-[700px] text-[18px]'>Khalid Al Dawsry</p>
                    <p className='font-[400px] text-[14px]'>Jeddah, Saudi</p>
                </div>
                <img src={img} alt="" />
            </div>
            </div>
         </div>
         <img className='w-[763px]' src={video} alt="" />
        </div>
         </SwiperSlide>
         
        
         
       </Swiper>
 
       {/* Custom Next and Prev Buttons */}
       {/* <div className="custom-prev absolute bottom-0 right-1/2 md:right-8 md:top-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">
         ❮
       </div>
       <div className="custom-next absolute bottom-0 right-2/3 md:right-0 md:top-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">
         ❯
       </div> */}
     </div>
   </div>
  )
}

export default Coustomer
