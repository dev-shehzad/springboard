import { FaLaptopHouse } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full  ">
      <div className="max-w-[1500px] mx-auto py-[30px] px-[80px] max-tab:px-[40px] max-md:px-[25px]">
        <div className="topflex flex max-maxtab:flex-col flex-wrap">
          <div className="one w-[50%] max-maxtab:w-full max-maxtab:justify-center flex max-md:flex-col gap-[50px] max-md:gap-[20px]">
            <div className="oneaddress flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[10px] items-center gap-[30px]">
              <div>
                <FaLaptopHouse size={60} color="#68B241" />
              </div>
              <div className="address max-md:flex max-md:flex-col max-md:items-center max-md:gap-0">
                <a className="text-[#9A999A]" href="#">
                  (+233) 24 999 9555
                </a>
                <br className="max-md:hidden"/>
                <a className="text-[#9A999A]" href="#">
                  info@springboard.com.gh
                </a>
              </div>
            </div>
            <div className="twoaddress flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[10px] items-center gap-[30px]">
              <div className="oneaddress flex items-center gap-[30px] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[10px]">
                <div>
                  <FaMapLocationDot size={60} color="#68B241" />
                </div>
                <div className="address address max-md:flex max-md:flex-col max-md:items-center max-md:gap-0">
                  <a className="text-[#9A999A]" href="#">
                    (+233) 24 999 9555
                  </a>
                  <br className="max-md:hidden" />
                  <a className="text-[#9A999A]" href="#">
                    info@springboard.com.gh
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="two w-[50%] max-maxtab:w-full max-tab:w-full max-maxtab:mt-[30px] flex justify-center  items-center">
            <div className="mail flex gap-[10px]">
              <input
                type="text"
                placeholder="Email"
                className="px-[20px] py-[12px]  outline-none w-[350px] max-md:w-[230px] bg-[#F4F4F4] rounded-l-[10px]"
              />{" "}
              <button className="bg-[#830186] px-[25px] max-md:px-[15px] py-[12px] text-white outline-none rounded-r-[10px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="line h-[1px] bg-[#D6D6D6] mt-[25px]"></div>

        <div className="bottom mt-[25px] w-full flex justify-start gap-[50px] max-md:flex-col">
          <div className="logo w-[10%] max-tab:w-[14%] max-md:w-full max-md:flex max-md:items-center max-md:justify-center">
            <img src="/logo.png" alt=""  className="w-[120px] max-md:w-[200px] max-tab:w-[200px]"/>
          </div>
          <div className="menu w-[70%] max-md:w-full max-md:gap-[30px] mt-[30px] max-md:mt-0 flex justify-around max-md:flex-col max-md:justify-center max-md:items-center">
            <div className="one">
              <h3 className="text-[20px] font-[Helvetica] max-md:text-center font-[700]">
                Interventions
              </h3>
              <ul className="mt-[20px] flex flex-col gap-[5px] max-md:items-center">
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400] max-md:text-center" href="#">
                    CoRe Programme
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    e-Counselling
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    e-Learning
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    e-Mentoring
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    e-Hangout
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Lead  
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Road Show
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Seed
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Springboard Mentoring Clubs
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    TEENpreneurship
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Virtual Univerity
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Youth Dialogues
                  </a>
                </li>
              </ul>
            </div>
            <div className="two">
              <h3 className="text-[20px] font-[Helvetica] font-[700] max-md:text-center">
                Quick Links
              </h3>
              <ul className="mt-[20px] flex flex-col gap-[5px] max-md:items-center">
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400] " href="#">
                    CoRe Programme
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Foundation
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Governance
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Knowledge Center
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Impact
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                   Need Help
                  </a>
                </li>
               
              </ul>
            </div>
            <div className="two">
              <h3 className="text-[20px] font-[Helvetica] font-[700] max-md:text-center">
                Follow 
              </h3>
              <ul className="mt-[20px] flex flex-col gap-[5px] max-md:items-center">
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400] " href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                   Youtube
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="text-[15px] p-2 font-[Helvetica] font-[400]" href="#">
                    Linkedin
                  </a>
                </li>
               
                
              </ul>
            </div>
          </div>
        </div>
        <div className="line h-[1px] bg-[#D6D6D6] mt-[25px]"></div>
      <p className="text-center text-[14px] max-md:text-[14px] mt-[25px] font-normal text-[#696687]">Copyright 2024 Springboard Road Show Foundation © All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
