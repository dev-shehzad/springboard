import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true, // Set to true for a continuous loop
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {/* Your slide content goes here */}
        <div className=" flex justify-center items-center    bg-purple-700 hover:bg-red-600 cursor-pointer h-[150px] object-cover ">
          <img src="./vu-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        <div className=" flex justify-center items-center  bg-green-500 hover:bg-yellow-500 cursor-pointer h-[150px] object-cover max-md:">
          <img src="./hangout-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        <div className=" flex justify-center items-center lg: max-md:w-[50%] bg-orange-500 hover:bg-purple-700 cursor-pointer  h-[150px] object-cover">
          <img src="./core-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        <div className=" flex justify-center items-center  bg-green-500 hover:bg-blue-600 cursor-pointer h-[150px] object-cover max-md:">
          <img src="./hangout-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        <div className=" flex justify-center items-center lg: max-md:w-[50%] bg-orange-500 hover:bg-yellow-500 cursor-pointer  h-[150px] object-cover">
          <img src="./core-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        {/* Add more slides as needed */}
        {/* Example of duplicated slides */}
        <div className=" flex justify-center items-center  bg-green-500 hover:bg-blue-600 cursor-pointer h-[150px] object-cover max-md:">
          <img src="./hangout-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        <div className=" flex justify-center items-center lg: max-md:w-[50%] bg-orange-500 hover:bg-purple-600 cursor-pointer   h-[150px] object-cover">
          <img src="./core-bw.png" alt="" height="200px" width="230px" className="mx-auto" />
        </div>
        {/* Duplicate slides to create a continuous loop */}
      </Slider>
    </div>
  );
};

export default Carousel;
