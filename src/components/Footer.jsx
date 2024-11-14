import resturant from '../images/foot.jfif'
import clock from '../images/clock.png'
import facebook from '../images/facebook-circle.png'
import x from '../images/twitter-round-new-alt.png'
import ins from '../images/instagram-round.png'
import lik from '../images/linkedin-round.png'
import call from '../images/call-alt.png'
import mail from '../images/mail.png'
import map from '../images/map-pin.png'

const Footer = () => {
  return (
    <div  className=" w-[100%] brightness-75 bg-[#000000CC] bg-cover h-full md:h-[719px] p-4 md:p-12 mt-24 "
    style={{ backgroundImage: `url(${resturant})` }}>
        <div className=''>
            <p className=' uppercase font-bold text-[42px] text-[#FFFFFF]'>We ready to have you the best dining experiences</p>
            <div className='mt-16 mx-16 md:mx-1 justify-center flex flex-col md:flex-row gap-4'>
                <div className='w-[312px]'>
                   <div className='flex justify-center'>
                   <img className='w-[30px]  h-[30px]' src={clock} alt="" />
                   </div>
                   <div >
                   <p className=' font-[700px] text-[24px] text-center uppercase text-[#FFFFFF]'>Opening hours</p>
                    <p className='text-white font-[400px] text-[16px] text-center'>Monday - Sunday <br />
                    9:00 AM to 11:30 PM</p>
                   </div>
                </div>
                <div className='w-[312px]'>
                   <div className='flex justify-center'>
                   <img className='w-[30px]  h-[30px]' src={call} alt="" />
                   </div>
                   <div >
                   <p className='uppercase text-[#FFFFFF] font-[700px] text-[24px] text-center'>LET&lsquo;S TALK</p>
                    <p className='text-white font-[400px] text-[16px] text-center'>Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545</p>
                   </div>
                </div>
                <div className='w-[312px]'>
                   <div className='flex justify-center'>
                   <img className='w-[30px]  h-[30px]' src={mail} alt="" />
                   </div>
                   <div >
                   <p className='uppercase text-[#FFFFFF] font-[700px] text-[24px] text-center'>BOOK A TABLE</p>
                    <p className='text-white font-[400px] text-[16px] text-center'>Email: demo@website.com <br /> Support: support@website.com</p>
                   </div>
                </div>
                <div className='w-[312px]'>
                   <div className='flex justify-center'>
                   <img className='w-[30px]  h-[30px]' src={map} alt="" />
                   </div>
                   <div >
                   <p className='uppercase text-[#FFFFFF] font-[700px] text-[24px] text-center'>Our Address</p>
                    <p className='text-white font-[400px] text-[16px] text-center'>123 Stree New York City , United <br /> States Of America.</p>
                   </div>
                </div>
            </div>
           <div className='md:mt-48 mt-12'>
           <div className='flex justify-center gap-6'>
           <div className='w-[53.53px] h-[53.53px] rounded-full border-2 border-white flex justify-center items-center'>
                <img className='w-[24px]' src={facebook} alt="" />
            </div>
           <div className='w-[53.53px] h-[53.53px] rounded-full border-2 border-white flex justify-center items-center'>
                <img className='w-[24px]' src={x} alt="" />
            </div>
           <div className='w-[53.53px] h-[53.53px] rounded-full border-2 border-white flex justify-center items-center'>
                <img className='w-[24px]' src={ins} alt="" />
            </div>
           <div className='w-[53.53px] h-[53.53px] rounded-full border-2 border-white flex justify-center items-center'>
                <img className='w-[24px]' src={lik} alt="" />
            </div>
           </div>
           <p className='font-[400px] text-[21px] mt-6 text-white text-center'>© 2023 All Rights Reserved </p>
           </div>
        </div>
      
    </div>
  )
}

export default Footer
