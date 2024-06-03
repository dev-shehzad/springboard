import { useState, useRef, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import { FaBars } from "react-icons/fa";
import MobileHeader from "../mobileheader/MobileHeader";
import MobileCountDown from "./MobileCountDown";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown when mouse leaves
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu when clicked outside
  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to add click event listener for closing mobile menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="text-gray-600 flex max-tab:flex-inline max-laptop:flex-col  max-laptop:pb-3 max-tab:pb-0 items-center justify-center px-[50px] max-tab:px-[40px] max-md:px-[20px]">
      <div className="container mx-auto flex justify-between max-laptop:justify-center max-tab:justify-between flex-wrap max-tab:flex-row  items-center">
        <div className="flex gap-3  max-tab:pt-3 max-tab:flex-row max-laptop:w-full max-tab:w-fit justify-center title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-[100px] max-tab:w-[70px] object-cover " src="/logo.png" alt="" />
          <div className="flex gap-3 max-tab:hidden">
            <span className="ml-3 text-sm text-gray-500 ">
              <CountdownTimer />
            </span>
            <button className="px-3 cursor-pointer border-none  hover:bg-gray-200 transition-[2s] outline-none py-2 bg-[#7E22CE] text-white text-[13px] rounded-[8px]">
              All Events
            </button>
          </div>
        </div>
        {/* <div className="hidden max-tab:block max-md:hidden"><MobileCountDown/></div> */}
        <div>
          <nav className="md:ml-auto z-10 flex flex-wrap max-laptop:w-full max-tab:w-fit items-center max-tab:hidden text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900 text-[13px] cursor-pointer">
              Welcome
            </Link>
            <div
              className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link to="#" className="mr-5 hover:text-gray-900 text-[13px] cursor-pointer">
                Springboard
              </Link>
              {isDropdownOpen && (
                <div className="absolute mt-0 py-2 w-32 bg-white shadow-md rounded-md z-[1000]">
                  <Link
                    to="/foundation"
                    className="block px-4 py-2 text-sm border-b text-gray-700 hover:bg-gray-100 text-[13px] cursor-pointer"
                  >
                    Foundation
                  </Link>
                  <Link
                    to="/intervention"
                    className="block px-4 py-2 text-sm border-b text-gray-700 hover:bg-gray-100 text-[13px] cursor-pointer"
                  >
                    Interventions
                  </Link>
                  <Link
                    to="/governance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-[13px] cursor-pointer"
                  >
                    Governance
                  </Link>
                </div>
              )}
            </div>
            <Link to="/knowledge" className="mr-5 hover:text-gray-900 text-[13px] cursor-pointer">
              Knowledge Center
            </Link>
            <Link to="/shop" className="mr-5 hover:text-gray-900 text-[13px] cursor-pointer">
              Shop
            </Link>
            <Link to="/contact" className="mr-5 hover:text-gray-900 text-[13px] cursor-pointer">
              Contact
            </Link>
            <Link to="/login" className="mr-5 hover:text-gray-900 text-[13px] cursor-pointer">
              Login
            </Link>
            <Link to="/signup">
            <button  className="inline-flex text-[13px] text-white bg-[#7E22CE] items-center border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 transition-[2s] rounded text-base mt-4 md:mt-0 cursor-pointer">
              Sign Up
            </button></Link>
          </nav>
          <div className="hidden max-tab:block relative">
            <FaBars size={20} onClick={toggleMobileMenu} />
            {isMobileMenuOpen && (
              <div className="absolute -right-1 z-10 top-0" ref={mobileMenuRef}>
                <MobileHeader />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
