import React from "react";
import Impact from "../Impact/Impact";

const Testimonial = ({ name, image, intervention, title, content }) => {
  return (
    <div className="max-w-[1200px] mx-auto w-full p-[80px] max-tab:p-[40px] max-md:p-[28px]">
       
      <div className="flex gap-[40px] max-tab:flex-col max-tab:gap-[70px] max-tab:items-center">
        <div className="w-[450px] max-tab:w-[296px] max-md:w-full h-[306px]">
          <img src={image} alt={name} className="w-full h-full object-contain" />
          <h3 className="text-[19px] font-sans font-[700] text-[#56008C] mt-3">
            {name}
          </h3>
          <p className="text-[14px] font-[500] font-sans">Intervention: {intervention}</p>
        </div>
        <div className="right w-fit max-tab:w-full">
          <h3 className="text-[30px] font-sans font-[800] text-[#56008C] max-md:leading-8">
            {title}
          </h3>
          <div className="text-[16px] font-sans font-[400] max-md:text-start">
            {content.map((paragraph, index) => (
              <div key={index} className="pt-3 font-sans">
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
