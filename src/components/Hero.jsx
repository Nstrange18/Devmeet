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
          className={`absolute w-full h-screen -z-1 transition-all ease-in-out duration-700 ${isZoomed ? "scale-110" : "scale-100"} ${isMenuOpen ? "blur-xs" : ""} `}
        />

        <div className={`flex items-center justify-center h-screen !px-20`}>
          <div className="text-center leading-loose text-3xl text-gray-300 ">
            <h1 className={`${isVisible ? "opacity-100" : "opacity-0"} ${isMenuOpen ? "translate-x-70 -translate-y-60" : "translate-x-0 delay-100"} transition-all duration-600 ease-in text-5xl text-[#040d14] font-bold `}>Welcome to <span class="text-[#0f0e0e]">Dev</span><span class="text-[#6bbd40]">meet</span></h1>

            <p className={`${isVisible ? "opacity-100" : "opacity-0"} ${isMenuOpen ? "translate-x-70 -translate-y-60" : "translate-x-0"} transition-all duration-600 ease-in delay-100 bg-gradient-to-br from-[#246924] via-[#245224] to-[#0e0e1d] bg-clip-text text-transparent !mt-2 text-3xl`}>Rise up in ranks and connect with your fellow developers</p>
          </div>

          <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-200 ease-in-out ${isMenuOpen ? "-translate-x-80 delay-450" : "translate-x-0 delay-0"}`}>
            <img src={banner} alt="no banner" className="w-full max-w-lg" />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Hero;