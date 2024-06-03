import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import CountdownTimer from "../header/CountdownTimer";
import MobileCountDown from "../header/MobileCountDown";

const MobileHeader = () => {
  const [showFoundationMenu, setShowFoundationMenu] = useState(false);
  const [showEventsMenu, setShowEventsMenu] = useState(false);

  const handleFoundationClick = () => {
    setShowFoundationMenu(!showFoundationMenu);
  };

  const handleEventsClick = () => {
    setShowEventsMenu(!showEventsMenu);
  };

  return (
    <div className="w-[200px] py-4 bg-black bg-opacity-[0.5] text-white">
      <ul className="flex flex-col items-center">
        <li>
          <Link to="" className="hover:text-[#670069] px-2 font-[gotham]">
            Welcome
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={handleFoundationClick}
            className=" px-4 py-2 flex items-center justify-center gap-1  font-[gotham]  hover:text-[#670069]"
          >
            Springboard <FaAngleDown />
          </Link>
          {showFoundationMenu && (
            <ul className="pl-4">
              <li>
                <Link
                  to="/intervention"
                  className="block px-4 py-2 hover:text-[#670069]"
                >
                  Interventions
                </Link>
              </li>
              <li>
                <Link
                  to="/governance"
                  className="block px-4 py-2 hover:text-[#670069]"
                >
                  Governance
                </Link>
              </li>
              <li>
                <Link
                  to="/foundation"
                  className="block px-4 py-2 hover:text-[#670069]"
                >
                  Foundation
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="#"
            onClick={handleEventsClick}
            className=" px-4 py-2 flex items-center justify-center gap-1  font-[gotham]  hover:text-[#670069]"
          >
            All Events <FaAngleDown />
          </Link>
          {showEventsMenu && (
            <ul className="">
              {/* Your events menu items go here */}
              <li>
                {/* <MobileCountDown/> */}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/knowledge" className="block px-4 py-2  hover:text-[#670069]">
            Knowledge Center
          </Link>
        </li>
        <li>
          <Link to="/impact" className="block px-4 py-2 hover:text-[#670069]">
            Impact
          </Link>
        </li>
        <li>
          <Link to="/shop" className=" block px-4 py-2 hover:text-[#670069]">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block px-4 py-2 hover:text-[#670069]">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="block px-4 py-2 hover:text-[#670069]">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
