import img1 from '../images/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1.png'
import img2 from '../images/pizza 1.png'
import img3 from '../images/fried-shrimp-prawn-cake-white-plate 1.png'
import img4 from '../images/french-fries 1.png'

const Slide = () => {
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
    <div className="w-[306px] h-[300px] p-4 mx-12 md:mx-1 bg-white shadow-lg rounded-lg ">
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
  )
}

export default Slide
