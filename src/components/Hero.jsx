import { useEffect, useState, createContext } from "react"
import bgImg from "../assets/devmeet-bg.png"
import banner from "../assets/devmeet-banner.png"
import Navbar from "./Navbar"

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const Hero = () => {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  
  
  useEffect (() => {
    const zoomed = setTimeout(() => {
      setIsZoomed(true)
    }, 200);

    return () => {clearTimeout(zoomed)}
  }, [])
  
  return ( 
    <UserContext.Provider value={{isVisible, setIsVisible, isMenuOpen, setIsMenuOpen}}>
      <div className="relative">
        {/* Passing the usestate as a prop to use in the Navbar component so as to maintain the opening of the menu  */}
        {/* The props were removed since we're using useContext... sorry hehe 😅 */}
        <Navbar />
        <img
          src={bgImg}
          alt="no background"
          className={`absolute w-full h-screen -z-1 transition-all ease-in-out duration-700 ${isZoomed ? "scale-110" : "scale-100"} blur-xs`}
        />

        <div className={`flex items-center justify-center h-screen`}>
          <div className="text-left leading-loose text-3xl text-gray-300 ">
            <h1 className={`${isVisible ? "opacity-100" : "opacity-0"} ${isMenuOpen ? "translate-x-70 -translate-y-60" : "translate-x-0"} transition-all duration-700 ease-in text-6xl text-[#040d14] font-bold `}>Welcome to <span class="text-[#0f0e0e]">Dev</span><span class="text-[#6bbd40]">meet</span></h1>
          </div>

          <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-700 ease-in-out ${isMenuOpen ? "-translate-x-70 " : "translate-x-0"}`}>
            <img src={banner} alt="no banner" className="w-full max-w-lg" />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Hero;