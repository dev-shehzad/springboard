
const Knowledge = () => {
  return (
    <div>
      {/* part1 */}
      <div className="bg-fuchsia-900 text-white h-[400px] max-md:h-[350px] ">
        <div className="max-w-[1500px] mx-auto flex items-center max-tab:justify-center h-full px-[80px] max-tab:px-[40px] max-md:px-[25px]">
          <h1 className="text-[66px] font-[Helvetica] font-[800] max-tab:text-center max-md:text-[36px]">
            Knowledge Centre
          </h1>
        </div>
      </div>
      <div className=" bg-[url('/bg1.jpg')]  bg-fixed h-[600px] flex items-center w-[100%] bg-cover">
        <div className="  w-full h-full bg-black bg-opacity-[0.5] flex items-center max-md:justify-center justify-start">
          <div className="max-w-[1500px] w-full  flex flex-col gap-[25px] max-md:gap-[40px]  mx-auto px-[80px] max-tab:px-[40px] max-md:px-[25px]">
            <div className="text-5xl font-extrabold lg:text-5xl max-md:text-start  text-white ">
              {" "}
              CoRe Program
            </div>
            <div className="flex max-md:flex-col gap-[20px]">
              <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3 ">
                Audio
              </button>
              <button className="hover:bg-white hover:text-black border-2  text-white border-white  px-10 py-3">
                Video
              </button>
              <button className=" hover:bg-white hover:text-black border-2  text-white border-white  px-10 py-3 ">
                WorkBooks
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* part2 */}
      <div className=" bg-[url('/bg2.jpg')] bg-fixed h-[600px] max-md:h-[400px] flex items-center   w-[100%] bg-cover ">
        <div className="w-full h-full  bg-black bg-opacity-[0.5] flex items-center">
          <div className="max-w-[1500px] flex  flex-col gap-[25px] max-md:gap-[40px] w-full mx-auto px-[80px] max-tab:px-[40px] max-md:px-[25px]">
            <div className="text-5xl font-extrabold lg:text-5xl max-md:text-center  text-white  ">
              HangOut
            </div>
            <div className="flex max-md:flex-col">
              <button
                className=" hover:bg-white hover:text-black border-2 text-white border-white
          px-10 py-3 "
              >
                Audio
              </button>
            </div>
          </div>
        </div>
        {/* part3 */}
      </div>
      <div className=" bg-[url('/bg3.jpg')] bg-fixed h-[600px] max-md:h-[450px]  flex items-center  w-[100%] bg-cover ">
        <div className="w-full h-full bg-black bg-opacity-[0.5] flex items-center ">
          <div className="max-w-[1500px] w-full flex flex-col gap-[25px] max-md:gap-[40px]  mx-auto  px-[80px] max-tab:px-[40px] max-md:px-[25px]">
            <div className="text-5xl font-extrabold lg:text-5xl max-md:text-center  text-white ">
              RoadShow
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className=" flex max-md:flex-col  max-md:justify-center max-md:items-stretch max-md:w-full gap-[20px]">
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                  Audio
                </button>
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                  Video
                </button>
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                  PRESENTATION
                </button>
              </div>
              <div className="max-md:flex max-md:flex-col max-md:items-stretch max-md:w-full">
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white    px-14 py-3">
                  WORKBOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* part4 */}

      <div className=" bg-[url('/bg4.jpg')] bg-fixed h-[600px] w-[100%] bg-cover ">
        <div className="w-full h-full bg-black bg-opacity-[0.5] flex items-center">
          <div className="max-w-[1500px] w-full flex  flex-col gap-[25px] max-md:gap-[40px] mx-auto px-[80px] max-tab:px-[40px] max-md:px-[25px]">
            <div className="text-5xl font-extrabold lg:text-5xl  text-white ">
              Virtual University
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex max-md:flex-col max-md:items-stretch max-md:w-full gap-[20px] ">
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                  Audio
                </button>
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                  Audio
                </button>
              </div>
              <div className="max-md:w-full max-md:flex max-md:flex-col ">
                <button className=" hover:bg-white hover:text-black border-2 text-white border-white   px-10 py-3">
                  ARTICLES & PUBLICATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part5 */}

      <div className=" bg-[url('/bg5.jpg')] bg-fixed h-[600px] w-[100%] bg-cover   ">
        <div className="w-full h-full flex flex-col justify-center bg-black bg-opacity-[0.5] ">
          <div className="max-w-[1500px] flex flex-col gap-[25px] max-md:gap-[40px] w-full mx-auto px-[80px] max-tab:px-[40px] max-md:px-[25px]">
            <div className="text-5xl font-extrabold lg:text-5xl  text-white ">
              Youth Dialogue
            </div>
            <div className="  flex max-md:flex-col gap-[20px]">
              <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                Audio
              </button>
              <button className=" hover:bg-white hover:text-black border-2 text-white border-white  px-10 py-3">
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
