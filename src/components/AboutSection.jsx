import barger from "../images/Image.png";
import Tabes from "./Tabes";
import Delevary from "./Delevary";
import bell from "../images/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal 2.png";

const AboutSection = () => {
  return (
    <div className="container relative space-y-12  p-4  md:mx-6 my-16 overflow-hidden">
      <div className=" flex flex-col md:flex-row    md:space-x-8  lg:h-[460px] ">
        <img
          className="flex justify-center bg-center md:w-[617px] w-[100%] md:h-[460px] h-auto"
          src={barger}
          alt=""
        />
        <div className="pt-6 md:pt-1">
          <Tabes />
        </div>
      </div>
      <Delevary />
      <img
        src={bell}
        className="h-[340px] absolute right-0 top-56 mr-[-80px] hidden md:block  "
        alt=""
      />
    </div>
  );
};

export default AboutSection;
