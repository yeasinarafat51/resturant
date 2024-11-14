import Button from "../common/Button";
import meet from "../images/meet.jfif";
import bk from "../images/Rectangle 4.png";
import offer from "../images/Offer.png";
import vector from "../images/Vector.png";

const HeroSection = () => {
  return (
    <div
      className=" p-4 md:p-12 bg-center bg-red-600"
      style={{ backgroundImage: `url(${bk})` }}
    >
      {/* Container for Text and Image */}
      <div className="  my-24 flex flex-col md:flex-row items-center md:relative">
        {/* Text Section */}
        <div className=" md:absolute md:z-10  top-1/4 ">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl uppercase text-white md:pr-4 leading-tight md:bg-gradient-to-r from-transparent via-[rgba(189,31,23,0.7)] to-[rgba(189,31,23,0.7)]">
            Taste the authentic <br />
            Saudi cuisine
          </h1>
          <p className="font-medium text-lg md:text-xl lg:text-2xl text-white my-4 max-w-lg mx-auto md:mx-0">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <Button>Explore Menu</Button>
        </div>

        {/* Image and Overlays */}
        <div className="relative mt-8 md:mt-0 ml-auto w-full md:w-auto flex items-center justify-center">
          <img
            className="w-full md:h-[649px] md:w-[700px]  h-auto"
            src={meet}
            alt="Saudi Cuisine"
          />

          {/* Offer Badge */}
          <div className="absolute z-20 flex items-center justify-center w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-[#FEBF00] rounded-full right-2 bottom-2 md:right-[-48px] md:bottom-[-20px]">
            <p className="border-dashed border-2 border-black rounded-full w-[80px] h-[80px] md:w-[105px] md:h-[105px] flex items-center justify-center text-center text-[16px] md:text-[20px] lg:text-[24px] font-bold text-[#0A1425]">
              Today Offer
            </p>
          </div>

          {/* Decorative Vector */}
          <img
            className="absolute z-0 md:z-10 top-[-12px] right-0 md:top-[-35px] md:right-[-25px] w-[30px] h-auto md:w-[45px]"
            src={vector}
            alt="Decorative Vector"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
