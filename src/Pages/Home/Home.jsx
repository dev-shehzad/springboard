import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { ImCross } from "react-icons/im";
import Slider from "../../components/Slidertop/Slidertop";
import Carousel from "../../components/slidertwo/Slidertwo";
import VideoSlider from "../../components/videoslide/VideoSlide";
import MobileCountDown from "../../components/header/MobileCountDown";
import Articles from "../../components/articles/Articles";

const Home = () => {
  return (
    <div className="w-full">
      <div className="hidden max-tab:block">
      <MobileCountDown/></div>
      {/* <Header /> */}
      {/* <div className="w-full flex bg-violet-950 lg:flex-row md:flex-row flex-col">
        <div className="w-[50%] max-md:w-full px-[30px] text-white pb-[50px]">
          <div className="lg:text-[64px] max-md:text-[44px] text-[34px] font-bold">
            Features
          </div>
          <div className="lg:text-[18px] md:text-[15px] text-[12px] font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            possimus aspernatur earum cumque officiis aut.
          </div>
          <div className="lg:text-[18px] md:text-[12px] text-[10px] pt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            vel. Ea dolorem laboriosam possimus amet sapiente minima cupiditate
            odit nobis, veritatis fugiat? Voluptatum voluptatibus fugit sed ea
            dolores! Sit fugiat quaerat nemo, et quisquam asperiores quibusdam
            vero optio. Corporis sint ullam, libero excepturi, est veniam qui
            fuga assumenda ea exercitationem aspernatur numquam, eveniet nisi
            quod explicabo iure doloribus autem iusto. Commodi voluptatem magni
            atque ipsum.
          </div>
        </div>

        <div className="w-[50%] h-[500px] max-md:h-[400px] max-md:w-full bg-[url('/s1.png')] bg-cover bg-no-repeat"></div>
      </div> */}
      <Slider />

      {/*  */}

      {/* <div className="w-full flex ">
        <div className="flex justify-center items-center lg:w-[32%] max-md:w-[50%] max-sm:w-full  bg-purple-700 h-[130px] object-cover">
          <img src="./vu-bw.png" alt="" height="200px" width="230px" />
        </div>
        <div className="flex justify-center items-center lg:w-[32%] max-md:w-[50%] bg-orange-500 max-sm:hidden h-[130px] object-cover ">
          <img src="./core-bw.png" alt="" height="200px" width="230px" />
        </div>
        <div className="flex justify-center items-center w-[32%] bg-green-500 h-[130px] object-cover max-md:hidden">
          <img src="./hangout-bw.png" alt="" height="200px" width="230px" />
        </div>
        <div className="flex justify-center items-center w-[32%] bg-pink-600 h-[130px] object-cover max-lg:hidden  ">
          <img
            src="./ghana-grows-white.png"
            alt=""
            height="150px"
            width="230px"
          />
        </div>
      </div> */}
      <Carousel />
      {/* recent */}
      <div className="bg-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <div className="w-[full] bg-gray-100 p-[40px]">
            <div className="text-[34px] max-md:text-[27px] max-sm:text-[22px] font-bold  max-sm:pl-[40px] max-md:pl-[50px]">
              Recent
            </div>
            <div className="w-full py-[20px]  flex justify-between gap-5 max-sm:flex-col">
              <div className="w-[32%] max-sm:w-full mb-4">
                <div className="w-full rounded-lg ">
                  <video
                    className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                    controls
                    src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Alhassan-Abdul-Aziz.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="text-[15px] font-bold mt-[10px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-[15px] text-gray-600">Lorem, ipsum.</div>
              </div>
              <div className="w-[32%] max-sm:w-full">
                <div className="w-full rounded-lg">
                  <video
                    className="w-full  h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                    controls
                    src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Alhassan-Kamilu.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="text-[15px] font-bold mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-[15px] text-gray-600">Lorem, ipsum.</div>
              </div>
              <div className="w-[32%] max-sm:w-full">
                <div className="w-full rounded-lg">
                  <video
                    className="w-full  h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                    controls
                    src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Bright-Fiafenyo.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="text-[15px] font-bold mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-[15px] text-gray-600">Lorem, ipsum.</div>
              </div>
            </div>
          </div>
          {/* ghana grows */}
          <div className="text-[34px] max-md:text-[27px] max-sm:text-[22px] font-bold px-[40px] py-[20px]">
            Ghana Grows
          </div>
        </div>

        <div className="w-[full] ">
          <div className="w-full px-[40px] max-md:px-[0px] py-[0px]  bg-gradient-to-r from-orange-500 t0 to-black">
            {/* <div className=" max-w-[1500px] mx-auto  flex justify-between max-sm:flex-col gap-5 ">
              <div className="w-[32%] max-sm:w-full mt-4 text-white mb-4">
                <div className="w-full rounded-lg">
                  <video
                    className="w-full  h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                    controls
                    src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Clara-Dansoa.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="text-[15px] font-bold mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-[15px] ">Lorem, ipsum.</div>
              </div>
              <div className="w-[32%] max-sm:w-full mt-4 text-white">
                <div className="w-full rounded-lg">
                  <video
                    className="w-full  h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                    controls
                    src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="text-[15px] font-bold mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-[15px] ">Lorem, ipsum.</div>
              </div>
              <div className="w-[32%] max-sm:w-full mt-4 text-white">
                <div className="w-full rounded-lg">
                  <video
                    className="w-full  h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                    controls
                    src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Douglas-Ayensu.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="text-[15px] font-bold mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-[15px]">Lorem, ipsum.</div>
              </div>
            </div> */}
            <VideoSlider/>
          </div>
        </div>
        {/* hangout */}
        <div className="w-[full] max-w-[1500px] mx-auto p-[40px]">
          <div className="text-[34px] max-sm:text-[22px] font-bold  ">
            Hangout
          </div>
          <div className="w-full   flex justify-between max-sm:flex-col mt-[20px] gap-5">
            <div className="w-[32%] max-sm:w-full mb-4">
              <div className="w-full rounded-lg">
                <video className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                  controls
                  src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Ekua-Klaye.mp4"
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-[15px] text-gray-600">Lorem, ipsum.</div>
            </div>
            <div className="w-[32%] max-sm:w-full">
              <div className="w-full rounded-lg">
                <video className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                  controls
                  src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Elizabeth-Bukari.mp4"
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-[15px] text-gray-600">Lorem, ipsum.</div>
            </div>
            <div className="w-[32%] max-sm:w-full">
              <div className="w-full rounded-lg">
                <video className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                  controls
                  src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Gideon-Sosu-Jnr.mp4"
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-[15px] text-gray-600">Lorem, ipsum.</div>
            </div>
          </div>
        </div>
        {/* virtual university */}
        <div className="w-[full] max-w-[1500px] px-[40px] py-[20px] mx-auto">
          <div className="text-[34px] max-md:text-[27px] max-sm:text-[22px] font-bold ">
            Virtual University
          </div>
        </div>

          <div className="w-full   bg-gradient-to-b from-sky-400 t0 to-indigo-600">
            <div className="max-w-[1500px] p-[40px] mx-auto flex justify-between max-sm:flex-col gap-5 ">
            <div className="w-[32%] max-sm:w-full mt-4 text-white mb-4">
              <div className="w-ful  rounded-lg">
              <video className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                  controls
                  src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Nathaniel-Attuquaye.mp4"
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-[15px] ">Lorem, ipsum.</div>
            </div>
            <div className="w-[32%] max-sm:w-full mt-4 text-white">
              <div className="w-full rounded-lg">
                <video className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                  controls
                  src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Nana-Akua-Asantewaa.mp4"
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-[15px] ">Lorem, ipsum.</div>
            </div>
            <div className="w-[32%] max-sm:w-full mt-4 text-white">
              <div className="w-full rounded-lg">
                <video className="w-full h-[260px] max-md:h-[200px] max-tab:h-[150px] rounded-[10px]"
                  controls
                  src="https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Nathaniel-Attuquaye.mp4"
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-[15px]">Lorem, ipsum.</div>
            </div>
          </div>
          </div>
      </div>
      <div>
        <Articles/>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
