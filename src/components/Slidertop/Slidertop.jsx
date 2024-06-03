import { useState, useEffect } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentSlideIndex]);

  const showSlide = (index) => {
    const slider = document.querySelector(".slider");
    const translateValue = -100 * (index - 1);
    slider.style.transform = `translateX(${translateValue}%)`;
  };

  const currentSlide = (index) => {
    setCurrentSlideIndex(index);
    showSlide(index);
  };

  const nextSlide = () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    const nextIndex = (currentSlideIndex % totalSlides) + 1;
    currentSlide(nextIndex);
  };

  const prevSlide = () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    const prevIndex =
      currentSlideIndex === 1 ? totalSlides : currentSlideIndex - 1;
    currentSlide(prevIndex);
  };

  return (
    <div className="slider-container relative overflow-hidden">
      <div className="slider flex  transition-transform duration-500 ease-in-out">
        <div className="slide min-w-full box-border relative flex flex-row-reverse">
          <div className="w-[50%] max-md:hidden h-[500px] max-md:h-[300px] max-md:w-full bg-[url('/s1.png')] bg-cover bg-no-repeat right-0"></div>
          <div className="w-[50%] max-md:w-full  flex bg-violet-950  flex-col p-6 text-white pb-20">
            <div className="lg:text-6xl md:text-4xl text-3xl font-bold">
              Features
            </div>
            <div className="lg:text-2xl md:text-xl max-md:text-[10px] text-sm font-semibold pt-8">
              {/* Slide 1 Content */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita possimus aspernatur earum cumque officiis aut.
            </div>
            <div className="lg:text-2xl max-md:text-[12px] md:text-sm text-xs pt-3">
              {/* Slide 1 Content */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, vel. Ea dolorem laboriosam possimus amet sapiente minima cupiditate odit nobis, veritatis fugiat? Voluptatum voluptatibus fugit sed ea dolores! Sit fugiat quaerat nemo, et quisquam asperiores quibusdam vero optio. Corporis sint ullam, libero excepturi, est veniam qui fuga assumenda ea exercitationem aspernatur numquam, eveniet nisi quod explicabo iure doloribus autem iusto. Commodi voluptatem magni atque ipsum.
            </div>
          </div>
        </div>

        <div className="slide min-w-full box-border relative flex flex-row-reverse">
          <div className="w-[50%] max-md:hidden h-[500px] max-md:h-[400px] max-md:w-full bg-[url('/s2.png')] bg-cover bg-no-repeat right-0"></div>
          <div className="w-[50%]  max-md:w-full  flex bg-violet-950  flex-col p-6 text-white pb-20">
            <div className="lg:text-6xl md:text-4xl text-3xl font-bold">
              Features
            </div>
            <div className="lg:text-2xl md:text-xl max-md:text-[10px] text-sm font-semibold pt-8">
              {/* Slide 1 Content */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita possimus aspernatur earum cumque officiis aut.
            </div>
            <div className="lg:text-2xl max-md:text-[12px] md:text-sm text-xs pt-3">
              {/* Slide 1 Content */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, vel. Ea dolorem laboriosam possimus amet sapiente minima cupiditate odit nobis, veritatis fugiat? Voluptatum voluptatibus fugit sed ea dolores! Sit fugiat quaerat nemo, et quisquam asperiores quibusdam vero optio. Corporis sint ullam, libero excepturi, est veniam qui fuga assumenda ea exercitationem aspernatur numquam, eveniet nisi quod explicabo iure doloribus autem iusto. Commodi voluptatem magni atque ipsum.
            </div>
          </div>
        </div>

        <div className="slide min-w-full box-border relative flex flex-row-reverse">
          <div className="w-[50%] max-md:hidden h-[500px] max-md:h-[300px] max-md:w-full bg-[url('/s1.png')] bg-cover bg-no-repeat right-0"></div>
          <div className="w-[50%] max-md:w-full  flex bg-violet-950  flex-col p-6 text-white pb-20">
            <div className="lg:text-6xl md:text-4xl text-3xl font-bold">
              Features
            </div>
            <div className="lg:text-2xl md:text-xl max-md:text-[10px] text-sm font-semibold pt-8">
              {/* Slide 1 Content */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita possimus aspernatur earum cumque officiis aut.
            </div>
            <div className="lg:text-2xl max-md:text-[12px] md:text-sm text-xs pt-3">
              {/* Slide 1 Content */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, vel. Ea dolorem laboriosam possimus amet sapiente minima cupiditate odit nobis, veritatis fugiat? Voluptatum voluptatibus fugit sed ea dolores! Sit fugiat quaerat nemo, et quisquam asperiores quibusdam vero optio. Corporis sint ullam, libero excepturi, est veniam qui fuga assumenda ea exercitationem aspernatur numquam, eveniet nisi quod explicabo iure doloribus autem iusto. Commodi voluptatem magni atque ipsum.
            </div>
          </div>
        </div>  
      </div>

      <div className="slider-controls absolute bottom-2 w-full h-full flex items-center justify-center">
        <div className="arrows flex space-x-2">
          <div
            className="arrow left-arrow h-8 w-8 rounded-full cursor-pointer absolute left-2"
            onClick={prevSlide}
          >
            <FaChevronCircleLeft size={50} color="white" />
          </div>
          <div
            className="arrow right-arrow h-8 w-8 rounded-full  cursor-pointer absolute right-6"
            onClick={nextSlide}
          >
            <FaChevronCircleRight size={50} color="white" />
          </div>
        </div>
        <div className="dots flex absolute bottom-2 space-x-2">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`dot h-4 w-4 rounded-full bg-white cursor-pointer ${
                currentSlideIndex === index ? "active" : ""
              }`}
              onClick={() => currentSlide(index)}
              style={{
                // Add a 2px solid blue border to the selected dot
                border: currentSlideIndex === index ? "2px solid white " : "none",
                backgroundColor: currentSlideIndex === index ? "black " : "white",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
