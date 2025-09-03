import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Icon } from "@iconify/react";
import { UserContext } from "./Hero";



const Navbar = () => {
  const [isLoggedIn] = useState(true);
  // const dropDownRef = useRef()

  const {isMenuOpen, setIsMenuOpen, isVisible, setIsVisible} = useContext(UserContext)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [setIsVisible]);

  return (
    <>
      <div className={`
          absolute flex justify-between items-center w-full !px-6 !py-4 
          bg-transparent text-white 
          transition duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}>

        {/* Hamburger menu and dropdown are now for all screen sizes */}
        <div>
          {isLoggedIn ? (

            <div className="flex items-center gap-2">
              <button onClick={() => { setIsMenuOpen(!isMenuOpen) }} className={`focus:outline-none z-20`}>
                <div className={`hamburger-menu flex flex-col gap-1 cursor-pointer z-2 !p-2`}>
                  <div className="w-6 rounded-md h-1 bg-white"></div>
                  <div className="w-6 rounded-md h-1 bg-white"></div>
                  <div className="w-6 rounded-md h-1 bg-white"></div>
                </div>
              </button>

              <div className="z-20">
                <h1 className={`${isMenuOpen ? "opacity-100" : "opacity-0"} transition-all ease-in duration-100`}>Menu</h1>
              </div>
            </div>

          ) : (

            <div className="get-started">
              <button className="p-2 bg-[#5a9f36] hover:bg-gradient-to-r from-[#193e9b] via-[#1d5783] to-[#246f8f] transition-colors duration-300 ease-in-out rounded-sm">Login</button>
            </div>
          )}

          {/* Dropdown menu now takes full screen on mobile and larger screens, but you can change that */}
            <div className={`
              ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
              absolute top-0 left-0 w-60 h-screen p-4 !pt-20 
              bg-gradient-to-bl from-[#3a7d44] to-[#67883e] shadow-[8px_8px_10px_rgba(0,0,0,0.1)]  bg-opacity-90 text-white 
              transition-transform duration-500 ease-in-out z-1 rounded-tr-2xl rounded-br-2xl
            `}>
              <Link to="/" className="group flex flex-col items-center justify-center px-4 py-3 !my-9 text-sm rounded hover:scale-110 transition-all ease-in-out duration-500 !mx-auto w-1/2">
                <Icon icon="mdi:home" className="inline-block mr-2 w-6 h-6" />
                <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">Home</h1>
              </Link>
              
              <Link to="dashboard" className="group flex flex-col items-center justify-center px-4 py-3 !my-9 text-sm rounded hover:scale-110 transition-all ease-in-out duration-500 !mx-auto w-1/2">
                <Icon icon="mdi:view-dashboard" className="inline-block mr-2 w-6 h-6 link-hover:" />
                <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">Dashboard</h1>
              </Link>

              <Link to="about" className="group flex flex-col items-center justify-center px-4 py-3 !my-9 text-sm rounded hover:scale-110 transition-all ease-in-out duration-500 !mx-auto w-1/2">
                <Icon icon="mdi:heart" className="inline-block mr-2 w-6 h-6" />
                <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">About</h1>
              </Link>
              
              <Link to="contact" className="group flex flex-col items-center justify-center px-4 py-3 !my-9 text-sm rounded hover:scale-110 transition-all ease-in-out duration-500 !mx-auto w-1/2">
                <Icon icon="mdi:telephone" className="inline-block mr-2 w-6 h-6"/> 
                <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">Contact</h1>
              </Link>
            </div>
        </div>

        {/* LOGO */}
        <div class="text-2xl font-bold">
          <span class="text-[#0f0e0e]">Dev</span><span class="text-[#6bbd40]">meet</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;