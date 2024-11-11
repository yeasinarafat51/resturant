
import barger from '../images/Image.png'
import Tabes from './Tabes'
import pakage from '../images/package.png'


const AboutSection = () => {
   

    
  return (
    <div>
      <div className='flex flex-col md:flex-row  justify-center md:space-x-8 lg:w-[1320px] lg:h-[460px]'>
      <img className='w-[617px] h-[460px]'  src={barger} alt="" />
      <div>
      <Tabes/>
      </div>
    </div>
    <div>
    <div className="flex items-center w-[440px] p-4 bg-white rounded-lg shadow-2xl">
  {/* Image Container */}
  <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[#FFFFFF] shadow-lg mr-4">
    <img className="w-[33.33px] h-[35px] py-[2.5px] px-[3.33px]" src={pakage} alt="Package Icon" />
  </div>

  {/* Text Content */}
  <div>
    <p className="font-[700px] text-[30px]">Within 30 minutes</p>
    <p className="font-[400px] text-[20px]">Fast delivery</p>
  </div>
</div>

    </div>
    </div>
  )
}

export default AboutSection
