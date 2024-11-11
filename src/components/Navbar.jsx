// Navbar.js
import  { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu and links
import Button from '../common/Button';
import logo from '../images/Logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-700 shadow sticky top-0 z-50  md:w-[1320px]">
      <nav className="container mx-auto flex justify-between md:space-x-64 items-center p-4 ">
       <div className='flex items-center justify-between space-x-48 md:space-x-16'>
      
       <img src={logo} alt="" />
       <div className="md:hidden flex justify-end ">
          <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            
          </button>
        </div>
        <div className="hidden md:flex space-x-16">
          <a href="#" className="hover:text-blue-500 font-Raleway text-white">Home</a>
          <a href="#" className="hover:text-blue-500 font-Raleway text-white">About</a>
          <a href="#" className="hover:text-blue-500 font-Raleway text-white">Services</a>
          <a href="#" className="hover:text-blue-500 font-Raleway text-white ">Contact</a>
        </div>
        
       </div>
       <div>
            <Button className="hidden md:flex text-black">Book a table</Button>
        </div>
        
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
          <Button className=" text-black  px-4 py-2">Book a table</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;