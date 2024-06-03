import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className=" bg-[url('/banner.jpg')]  lg:w-[100%]  md:w-[100%]  w-[100%]  h-[600px] max-tab:h-[400px] flext items-center justify-center">
        <div className=" text-white font-extrabold lg:text-7xl md:text-7xl text-5xl max-w-[1500px] mx-auto px-[80px] h-full flex items-center max-tab:justify-center max-tab:text-center">
          Contact
        </div>
      </div>
      {/* first part end */}

      {/* 2nd */}
      {/* 2nd (1) */}
      <div className="max-w-[1500px] mx-auto">
      <div>
        {/* get in touch */}
        
        <div className=" flex  justify-center mt-20 ">
          <div className="">
            <div className=" text-black font-extrabold text-5xl pt-7 ">
              Get in Touch
            </div>
            <div className=" text-gray-500  text-xl pt-7 pl-9 ">
              {" "}
              We will be hear from you.
            </div>

            <div className=" flex gap-3 pt-7 pl-9">
              <Link to="https://www.facebook.com/SpringboardRS" target="_blank">
              <FaFacebook
                style={{
                  color: "white",
                  fontSize: "2.3rem",
                  borderRadius: "50px",
                }}
                className="p-2 bg-[#3B5998] text-white"

              />
              </Link>
              <Link to="https://twitter.com/springboardrs" target="_blank">
              <FaSquareXTwitter
                style={{ fontSize: "2.3rem", borderRadius: "60px" }}
                className="p-2 bg-black text-white"

              />
              </Link>
              <Link to="https://www.youtube.com/user/SpringboardRoadShow" target="_blank">
              <FaYoutube
                style={{ color: "white", fontSize: "2.3rem", borderRadius: "50px" }}
                className="p-2 bg-[#CD201F] text-white"

              />
              </Link>
              <Link to="https://www.linkedin.com/company/springboard-road-show-foundation/" target="_blank">
              <FaLinkedin
                style={{
                  fontSize: "2.3rem",
                  borderRadius: "70px",

                }}
                className="p-2 bg-[#0077B5] text-white"
              />
              </Link>
              <Link to="https://www.instagram.com/springboardroadshow/" target="_blank">
              <GrInstagram style={{ fontSize: "2.3rem", borderRadius: "50px" }}className="p-2 bg-[#B84268] text-white" /></Link>
            </div>
          </div>
        </div>
        {/* boxes */}
        <div className=" flex max-tab:flex-col max-tab:gap-[30px] pt-14">
          {/* box1 */}

          <div className=" shadow-2xl rounded-[10px] lg:w-[60%] lg:pl-10 lg lg:pt-14 pb-10 md:w-[90%] md:pl-10 md:ml-10 md:pt-14 md:pb-10  pl-10 ml-10 mr-10 pt-10   ">
            <FaLocationDot
              style={{
                fontSize: "3rem",
                backgroundColor: "skyblue",
                borderRadius: "50px",
                padding: "10px",
                color: "purple",
              }}
            />
            <Link to="https://www.google.com/search?q=legacylegacyGh" target="_blank">
            <div className=" text-black font-extrabold text-3xl pt-6  ">
              Our Location
            </div>
            <div className=" text-gray-500  text-xl pt-4  ">
              {" "}
              75 Bamako Road
            </div>
            <div className=" text-gray-500  text-xl pt-2  ">
              {" "}
              East Lagon, Eccra Ghana.
            </div>
          </Link>

          </div>

          {/* box2 */}
          <div className="rounded-[10px] shadow-2xl lg:w-[60%] lg:pl-10 lg:ml-0 lg:pt-14 lg:pb-10 md:w-[90%] md:pl-10 md:ml-10 md:pt-14 md:pb-10 pb-10  pl-10 ml-10 mr-10 pt-10 ">
            <IoCall
              style={{
                fontSize: "3rem",
                backgroundColor: "skyblue",
                borderRadius: "50px",
                padding: "10px",
                color: "purple",
              }}
            />
              <Link to="tel:+233249999555">
            <div className=" text-black font-extrabold text-3xl pt-6  ">
              Call Us
            </div>
            <div className=" text-gray-500  text-xl pt-4  ">
              {" "}
              (+233) 24 999 9555
            </div>
            </Link>
          </div>
          {/* box3 */}
          <div className="rounded-[10px] shadow-2xl lg:w-[60%] lg:pl-10 lg:ml-0 lg:pt-14 pb-10 md:w-[90%] md:pl-10 md:ml-10 md:pt-14 md:pb-10  pl-10 ml-10 mr-10 pt-10">
            <MdOutlineEmail
              style={{
                fontSize: "3rem",
                backgroundColor: "skyblue",
                borderRadius: "50px",
                padding: "10px",
                color: "purple",
              }}
            />
            <Link to="mailto:info@springboard.com.gh">
            <div className=" text-black font-extrabold text-3xl pt-6  ">
              Email Us
            </div>
            <div className=" text-gray-500  text-xl pt-4  ">
              info@springboard.com.gh
            </div>
          </Link>
          </div>
        </div>
        {/* boxes end */}
        {/* 2nd (1) */}
      </div>

      {/* last part */}
      <div>
        <div className=" flex justify-center">
          <div className="  mt-20 ">
            <div className=" pt-7  text-black lg:font-extrabold lg:text-5xl md:font-extrabold md:text-5xl text-4xl font-bold ">
              Send Us a Message
            </div>

            <div className=" text-gray-500  text-xl pt-7 pl-9 ">
              {" "}
              We would love to hear from you.
            </div>
          </div>
        </div>

        {/* input part */}
        <div className=" m-20">
          <div className=" text-gray-700 font-normal">
            Name <span className=" text-red-500 text-3xl">*</span>
          </div>
          <input
            type="text"
            name=""
            id=""
            className=" w-[100%] mt-2 py-2 mr-10 bg-gray-200 bg-opacity-[0.5] border-solid border border-gray-500 outline-1 outline-grey-500 outline-none  "
          />

          <div className=" mt-10 text-gray-700 font-normal">
            Email <span className=" text-red-500 text-3xl">*</span>
          </div>
          <input
            type="text"
            name=""
            id=""
            className=" w-[100%]  mt-2 py-2 bg-gray-200 bg-opacity-[0.5] border border-gray-500 outline-1 outline-grey-500 outline-none "
          />

          <div className=" mt-10 text-gray-700 font-normal">
            Message <span className=" text-red-500 text-3xl">*</span>
          </div>
          <input
            type="text"
            name=""
            id=""
            className=" w-[100%]  mt-2 py-10 bg-gray-200 bg-opacity-[0.5] border border-gray-500 outline-1 outline-grey-500 outline-none "
          />
          <div className=" mt-5">
            <button className=" px-4 py-4 bg-black hover:bg-gray-500 hover:text-gray-700 text-white ">
              Submit
            </button>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className="mt-10">
        <iframe
          title="Google Map"
          width="100%"
          height="500"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.518120921803!2d-0.1755363240157641!3d5.637897732818636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b642adc3773%3A0x2c292efca069ee14!2sSpringboard%20Road%20Show%20Foundation!5e0!3m2!1sen!2s!4v1707048766995!5m2!1sen!2s"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Contact;
