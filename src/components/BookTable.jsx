import Button from '../common/Button'
import cald from '../images/calender-date (5) 1.png'
import spoon from '../images/spoon.jfif'

const BookTable = () => {
  return (
    <div className='md:w-[1920px] h-[788px]  bg-cover md:p-12 ' style={{ backgroundImage: `url(${spoon})` }}>
      <div className='space-y-4'>
      <div className="flex flex-col md:flex-row gap-4">
        <input className="w-[302px] h-[46px] border-2 py-3 px-4 text-white bg-black border-white" type="text" placeholder="Your Name * " name="" id="" />
        <input className="w-[302px] h-[46px] border-2 py-3 px-4 text-white bg-black border-white" placeholder="Your Email  " name="" id="" />
      </div>
      <div>
      <div  className="flex flex-col md:flex-row gap-4 ">
      <div className="flex justify-between border-2 border-white py-3 px-4 bg-black  items-center p-3 gap-2 w-[302px] h-[46px]  ">
          {/* <FiSearch className="w-[18px]  top-2 right-3 text-gray-500" /> */}
          <input
            type="text"
            placeholder="Search incident"
            className="  text-white w-[106px] bg-black    "
          />
          <img  className="w-[20px]  top-o right-0 text-gray-500" src={cald} alt="" />

        </div>
        <div className="flex justify-between border-2 border-white py-3 px-4 bg-black  items-center p-3 gap-2 w-[302px] h-[46px]  ">
          {/* <FiSearch className="w-[18px]  top-2 right-3 text-gray-500" /> */}
          <input
            type="text"
            placeholder="Search incident"
            className="  text-white w-[106px] bg-black    "
          />
          <img  className="w-[20px]  top-o right-0 text-gray-500" src={cald} alt="" />

        </div>
      </div>
     
      </div>
      <div  className=" ">
     <textarea className='w-[330px] md:w-[635px] h-[140px] border-2 py-3 px-4 text-white bg-black border-white' placeholder='Message' name="Message" id=""/>
     </div>
     <Button>Book Now</Button>
      </div>
    </div>
  )
}

export default BookTable
