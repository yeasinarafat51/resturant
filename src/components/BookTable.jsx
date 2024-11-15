import Button from "../common/Button";
import cald from "../images/calender-date (5) 1.png";
import spoon from "../images/spoon.jfif";
import bor from "../images/Rectangle 4708.png";
import sort from "../images/sort 1.png";

const BookTable = () => {
  return (
    <div
      className="w-[100%] bg-cover h-[788px] p-4 md:p-12 mt-24  "
      style={{ backgroundImage: `url(${spoon})` }}
    >
      <div className="md:h-[548px] md:w-[620px] h-auto w-[100%] ">
        <div className="flex  items-center gap-2 ">
          <img className="w-[10px] h-[10px]" src={bor} alt="" />
          <p className="font-[700px] text-[20px] text-white font-Roboto">Book Now</p>
        </div>
        <p className="md:font-[700px] font-bold text-[30px] md:text-[62px] mb-8 text-white font-Bebas Neue">
          Book Your Table
        </p>
        <p className="md:font-[400px] font-Roboto font-bold text-[16px]  mb-8 text-white">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="font-Roboto w-full md:w-[302px] h-[46px] border-2 py-3 px-4 text-white bg-transparent border-white"
              type="text"
              placeholder="Your Name * "
              name=""
              id=""
            />
            <input
              className="font-Roboto w-full md:w-[302px] h-[46px] border-2 py-3 px-4 text-white bg-black bg-transparent border-white"
              placeholder="Your Email  "
              name=""
              id=""
            />
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="flex justify-between border-2 border-white py-3 px-4    items-center p-3 gap-2  w-full md:w-[302px] h-[46px]  ">
                <input
                  type="text"
                  placeholder="Reservation Date"
                  className=" font-Roboto text-white w-[106px]  bg-transparent    "
                />
                <img
                  className="w-[20px]  top-o right-0 text-gray-500"
                  src={cald}
                  alt=""
                />
              </div>
              <div className="flex justify-between border-2 border-white py-3 px-4   items-center p-3 gap-2  w-full md:w-[302px] h-[46px]  ">
                <input
                  type="text"
                  placeholder="Total People"
                  className="font-Roboto  text-white w-[106px]   bg-transparent   "
                />
                <img
                  className="w-[20px]  top-o right-0 text-gray-500"
                  src={sort}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <textarea
              className="font-Roboto w-full md:w-[620px] h-[140px] border-2 py-3 px-4 text-white bg-black bg-transparent border-white"
              placeholder="Message"
              name="Message"
              id=""
            />
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
