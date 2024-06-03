import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Articles = () => {
  const [activeDot, setActiveDot] = useState(0);

  const slides = [
    {
      image: "/articles/1.jpg",
      title: "Adapt your style to different environments, Tucci Ivowi tells managers",
      description: "Ghana Commodity Exchange CEO, Tucci Goka Ivowi, has suggested that managers working in different cultures and countries can only...",
    },
    {
      image: "/articles/2.jpg",
      title: "Agric Knowledge, Attitudes and Perception",
      description: "A majority of young people have a positive attitude towards the Agriculture, Technical and Vocational sectors, with over 91%...",
    },
    {
      image: "/articles/3.jpg",
      title: "Go through the mill if you want to lead, PETROSOL CEO charges youth",
      description: "PETROSOL CEO, Michael Bozumbil, has challenged young people aspiring for business leadership to be willing to start from the...",
    },
    {
      image: "/articles/4.jpg",
      title: "Resilience and dedication have been our story this year, says Selorm Adadevoh",
      description: "Selorm Adadevoh, CEO of MTN Ghana, has commended his team's resilience and dedication, emphasizing the pivotal role teamwork played...",
    },
    {
        image: "/articles/5.jpg",
        title: "Don't Get Caught in the Cycle of Wanting to Do Everything, Susan Quist Cautions Entrepreneurs",
        description: "Managing Partner of Piedmont Advisory, Susan Quist has sent a word of caution to entrepreneurs against the common pitfalls...",
      },
   
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev absolute -left-[50px] max-tab:-left-[25px] max-md:-left-[15px] top-1/2   z-10 cursor-pointer text-[#7D1FA5]" onClick={onClick}>
        <FaArrowLeft size={25}/>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next absolute -right-[50px] max-tab:-right-[25px] max-md:-right-[15px] top-1/2 cursor-pointer text-[#7D1FA5]" onClick={onClick}>
        <FaArrowRight size={25}/>
      </div>
    );
  };

  const settings = {
    dots: false, // Disable global dots display
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // Default padding
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div style={{ margin: "0", padding: "10px", listStyle: "none", textAlign: "center" }}>
        {/* Render only two dots */}
        <div style={{ display: "inline-block", margin: "0 5px" }}>{dots[0]}</div>
        <div style={{ display: "inline-block", margin: "0 5px" }}>{dots[1]}</div>
      </div>
    ),
    customPaging: (i) => (
      <div className={`custom-dot ${i === activeDot ? "active" : ""}`} style={{ width: "10px", height: "10px", borderRadius: "50%", marginTop: "20px", background: i === activeDot ? "black" : "red" }} />
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px", // Adjust padding for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "-50px", // Adjust padding for larger screens
        },
      },
    ],
  };
  
  

  return (
    <div className="py-[50px] max-w-[1500px] mx-auto px-[80px] max-tab:px-[40px] max-md:px-[25px]">
      <h1 className="text-center text-[36px] font-bold font-sans py-[20px]">
        Articles & Publications
      </h1>
      <Slider {...settings} beforeChange={(oldIndex, newIndex) => setActiveDot(newIndex)}>
        {slides.map((slide, index) => (
          <div className="p-[30px] max-tab:p-[15px] max-md:p-[10px]" key={index}>
            <div
              className="one-slide relative bg-cover bg-center h-[500px] max-md:w-[360px]  p-[30px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col gap-3 justify-center items-start p-[30px] max-md:p-[15px]">
                <h1 className="text-white text-[20px] font-bold ">{slide.title}</h1>
                <p className="text-white text-[13px] text-wrap whitespace-normal">{slide.description}</p>
                <button className="text-white bg-[#7D1FA5] px-4 py-3 rounded-[5px] text-[13px]">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Articles;
