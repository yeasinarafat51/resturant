import pakage from "../images/package.png";
import medal from "../images/medal.png";
import bag from "../images/bag.png";

const Delevary = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex items-center w-[440px] p-4 bg-white rounded-lg shadow-2xl">
        {/* Image Container */}
        <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[#FFFFFF] shadow-lg mr-4">
          <img
            className="w-[33.33px] h-[35px] py-[2.5px] px-[3.33px]"
            src={pakage}
            alt="Package Icon"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="uppercase font-[700px] text-[30px]">Fast delivery</p>
          <p className="font-[400px] text-[20px]">Within 30 minutes</p>
        </div>
      </div>
      <div className="flex items-center w-[440px] p-4 bg-white rounded-lg shadow-2xl">
        {/* Image Container */}
        <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[#FFFFFF] shadow-lg mr-4">
          <img
            className="w-[33.33px] h-[35px] py-[2.5px] px-[3.33px]"
            src={medal}
            alt="Package Icon"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="uppercase font-[700px] text-[30px]">absolute dining</p>
          <p className="font-[400px] text-[20px]">Best buffet restaurant</p>
        </div>
      </div>
      <div className="flex items-center w-[440px] p-4 bg-white rounded-lg shadow-2xl">
        {/* Image Container */}
        <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[#FFFFFF] shadow-lg mr-4">
          <img
            className="w-[33.33px] h-[35px] py-[2.5px] px-[3.33px]"
            src={bag}
            alt="Package Icon"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="uppercase font-[700px] text-[30px]">pickup delivery</p>
          <p className="font-[400px] text-[20px]">Best buffet restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default Delevary;
