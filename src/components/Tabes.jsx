import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from '../common/Button';
import call from '../images/call-alt.png'

const Tabes = () => {
  return (
    <div className=" md:w-[624px] h-[402px]">
      <Tabs>
        <TabList className="flex space-x-2 border-b">
          <Tab className="px-4 py-2 border-0 text-black " selectedClassName="bg-[#B52B1D] text-white">
            Title 1
          </Tab>
          <Tab className="px-4 py-2 rounded-md text-black " selectedClassName="bg-[#B52B1D] text-white">
            Title 2
          </Tab>
          <Tab className="px-4 py-2 rounded-md text-black " selectedClassName="bg-[#B52B1D] text-white">
            Title 3
          </Tab>
        </TabList>

        <TabPanel>
          <div className='space-y-8'>
          <p className='font-[700px] text-[62px]'>Exceptional culinary experience and delicious food</p>
          <p className='font-[400px] text-[16px] text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
          <div className='flex items-center gap-8'>
            <Button>About More</Button>
            <div className='flex items-center gap-1 '>
              <img className='w-[20px] h-[20px]' src={call} alt="" />
              <p>+88 3426 739 485</p>

            </div>
          </div>
          </div>
        </TabPanel>
        
        <TabPanel>
          <h2 className="mt-4 text-lg font-bold">Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="mt-4 text-lg font-bold">Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Tabes;
