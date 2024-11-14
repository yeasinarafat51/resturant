/* eslint-disable react/prop-types */

const Slide = ({ img, title, discription }) => {
  return (
    <div className="w-[306px] h-[300px] p-4 mx-12 md:mx-1 bg-white shadow-lg rounded-lg ">
      <div className="flex justify-center mb-4">
        <img
          className="w-[186px] h-[124px] rounded-lg"
          src={img}
          alt="Card Image"
        />
      </div>

      <div className="border-b-2 border-[#BD1F17] w-[57px] mx-auto mb-2"></div>

      <p className="uppercase font-bold text-[24px] text-gray-800 mb-1 text-center">
        {title}
      </p>
      <p className="font-medium text-[16px] text-gray-600 text-center">
        {discription}
      </p>
    </div>
  );
};

export default Slide;
