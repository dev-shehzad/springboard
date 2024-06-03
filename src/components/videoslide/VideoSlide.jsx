import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VideoSlider = () => {
  const videos = [
    "https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4",

    "https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4",
    "https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4",

    "https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4",

    "https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4",
    "https://springboard.com.gh/wp-content/uploads/2022/07/CoRe-Programme-Impact-Story-Dede-Dora-Anim.mp4",

  ];

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow absolute top-[40%] -left-6 hidden cursor-pointer" onClick={onClick}>
      <FaChevronLeft size={30} color="white" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow absolute -right-4 bottom-1/2 cursor-pointer " onClick={onClick}>
      <FaChevronRight size={30} color="white" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1500px] mx-auto px-[40px] max-tab:px-[0] max-md:px-[20px]">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="p-[15px] mx-auto flex justify-center max-sm:flex-col gap-5">
            <div className="max-sm:w-full mt-4 text-white mb-4">
              <div className="w-full rounded-lg">
                <video className="w-full h-[260px] max-tab:h-[150px] max-md:h-[200px] rounded-[10px]" controls src={video} type="video/mp4"></video>
              </div>
              <div className="text-[15px] font-bold mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="text-[15px]">Lorem, ipsum.</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
